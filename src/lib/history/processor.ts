import _ from 'the-lodash';
import { Promise } from 'the-promise';
import { ILogger } from 'the-logger' ;

import * as BufferUtils from '@kubevious/helpers/dist/buffer-utils';

import * as HashUtils from '@kubevious/helpers/dist/hash-utils';

import { Snapshot, Partitioning as HistoryPartitioning } from '@kubevious/helpers/dist/history';
import { SnapshotItem, DiffItem, TimelineSample } from '@kubevious/helpers/dist/history';
import { ConfigHash } from './entities';

import { HistoryAccessor } from './db-accessor';

import { Context } from '../context';
import { Database } from '../db';
import { RegistryBundleState } from '@kubevious/helpers/dist/registry-bundle-state';

import { HISTORY_TABLES } from './metadata';

export interface HandlerCallback
{
    finish: () => void;
}

export class HistoryProcessor
{
    private _logger : ILogger;
    private _context : Context;

    private _database : Database;
    private _dbAccessor : HistoryAccessor;

    private _latestSnapshot : any = null;
    private _currentState : any = null;
    private _interation : number = 0;
    private _isDbReady : boolean = false;
    private _configHashesDict : Record<string, boolean> = {};
    private _configHashesPartition? : number;
    private _statesQueue : RegistryBundleState[] = [];
    private _isLocked : boolean  = false;
    private _isProcessing : boolean  = false;
    private _processFinishListeners : (() => void)[] = [];
    private _latestSnapshotAlerts? : AlertsSummary;

    constructor(context : Context)
    {
        this._context = context;
        this._database = context.database;

        this._logger = context.logger.sublogger('HistoryProcessor');
        this._dbAccessor = new HistoryAccessor(context);
        

        this._database.onConnect(this._onDbConnected.bind(this));
    }

    get logger() {
        return this._logger;
    }

    get debugObjectLogger() {
        return this._context.debugObjectLogger;
    }

    lockForCleanup(cb: (handler: HandlerCallback) => void)
    {
        this._logger.info("[lockForCleanup] BEGIN");
        var handler = {
            finish: () => {
                this._logger.info("[lockForCleanup] FINISH");
                this._resumeProcessing();
            }
        }

        this._isLocked = true;
        if (!this._isProcessing) {
            cb(handler);
        } else {
            this._processFinishListeners.push(() => {
                cb(handler);
            });
        }
    }

    accept(state: RegistryBundleState)
    {
        this._addToQueue(state);
        return this._safeProcessQueue();
    }

    private _resumeProcessing()
    {
        this._isLocked = false;
        this._safeProcessQueue();
    }

    private _safeProcessQueue()
    {
        return Promise.resolve()
            .then(() => this._processQueue())
            .catch(reason => {
                this.logger.error(reason);
            });
    }

    private _processQueue() : Promise<any> | void
    {
        if (this._statesQueue.length == 0) {
            return;
        }
        if (this._isLocked) {
            return Promise.resolve(30 * 1000);
        }

        if (this._isProcessing) {
            return;
        }
        this._isProcessing = true;

        var state = this._statesQueue.shift()!;
        return this._processQueueItem(state)
            .finally(() => {
                this._isProcessing = false;
            })
            .then(() => {
                return this._processQueue();
            })
    }

    private _processQueueItem(state: RegistryBundleState)
    {
        this._logger.info("[_processQueueItem] begin");
        var snapshot = this._produceSnapshot(state);
        this._logger.info("[_processQueueItem] snapshot %s, item count: %s", snapshot.date.toISOString(), snapshot.getItems().length);

        return this._processSnapshot(snapshot)
            .then(() => {
                for(var x of this._processFinishListeners)
                {
                    x();
                }
                this._processFinishListeners = [];
            });
    }

    private _addToQueue(state: RegistryBundleState)
    {
        this._statesQueue.push(state);
        this._statesQueue = _.takeRight(this._statesQueue, 1);
        this.logger.info("[_addToQueue] Size: %s", this._statesQueue.length);
    }

    private _processSnapshot(snapshot: Snapshot)
    {
        this.logger.info("[_processSnapshot] BEGIN. %s, Item Count: %s", snapshot.date.toISOString(), snapshot.count);

        return Promise.resolve()
            .then(() => this.debugObjectLogger.dump("history-snapshot", 0, snapshot))
            .then(() => {

                this._interation += 1;
                var partition = HistoryPartitioning.calculateDatePartition(snapshot.date);
                var tablesPartitionsData : TablesPartitionsInfo;

                this.logger.info("[_processSnapshot] Date: %s, Partition: %s", snapshot.date, partition);

                var configHashes = this._produceConfigHashes(snapshot);

                var itemsDelta = this._produceDelta(snapshot, this._latestSnapshot);
                var deltaSummary = this._constructDeltaSummary(snapshot, itemsDelta);
                this._cleanupSnapshot(snapshot);

                return Promise.resolve()
                    .then(() => {
                    })
                    .then(() => this._queryDatabasePartitions())
                    .then(result => {
                        tablesPartitionsData = result;
                        this.logger.debug("[_processSnapshot] tablesPartitionsData:", tablesPartitionsData);

                        var list = _.values(tablesPartitionsData.byTable);
                        if (!_.every(list, x => x[partition])) {
                            this.logger.debug("[_processSnapshot] maxPartition: %s", tablesPartitionsData.maxPartition);
                            if (partition < tablesPartitionsData.maxPartition) {
                                this.logger.warn("[_processSnapshot] Existing partitions found. Reporting to latest partition. (%s -> %s)", partition, tablesPartitionsData.maxPartition);
                                partition = tablesPartitionsData.maxPartition;
                            }
                        }
                    })
                    .then(() => {
                        this._prepareConfigHashesCache(partition);
                    })
                    .then(() => this.debugObjectLogger.dump("history-diff-snapshot-", this._interation, snapshot))
                    .then(() => this.debugObjectLogger.dump("history-diff-latest-snapshot-", this._interation, this._latestSnapshot))
                    .then(() => this.debugObjectLogger.dump("history-diff-items-delta-", this._interation, itemsDelta))
                    .then(() => {
                        return this._dbAccessor.executeInTransaction(() => {
                            return Promise.resolve()
                                .then(() => this._prepareDatabasePartitions(partition, tablesPartitionsData.byTable))
                                .then(() => this._persistConfigHashes(configHashes, partition))
                                .then(() => this._persistSnapshot(snapshot, partition))
                                .then(() => this._persistDiff(snapshot, partition, itemsDelta, deltaSummary))
                                .then(() => this._persistTimeline(snapshot, partition, deltaSummary))
                                .then(() => this._persistSummaries(snapshot, partition, deltaSummary))
                                .then(() => this._persistConfig())
                        });
                    })
            })
            .then(() => {
                this.logger.info("[_processSnapshot] END");

                this._latestSnapshot = snapshot;
            })
            .catch(reason => {
                this.logger.error(reason);
            });
    }

    private _prepareConfigHashesCache(partition: number)
    {
        if (this._configHashesPartition != partition)
        {
            this._configHashesDict = {};
            this._configHashesPartition = partition;
        }
    }

    private _produceConfigHashes(snapshot: Snapshot) 
    {
        var configHashes : ConfigHash[] = [];
        for(var item of snapshot.getItems())
        {
            // this.logger.info("[_produceConfigHashes] %s...", item.dn, item);
            var hash = HashUtils.calculateObjectHash(item.config);
            configHashes.push({ 
                config_hash: hash,
                config: item.config
            })
            item.config_hash = hash;
        }
        return configHashes;
    }

    private _cleanupSnapshot(snapshot: Snapshot)
    {
        for(var item of snapshot.getItems())
        {
            delete item.config;
        }
    }

    private _persistConfigHashes(configHashes: ConfigHash[], partition: number)
    {
        var newHashes = configHashes.filter(x => !this._configHashesDict[<string>x.config_hash]);
        this.logger.info('[_persistConfigHashes] current hash count: %s', _.keys(this._configHashesDict).length);
        this.logger.info('[_persistConfigHashes] new hash count: %s', newHashes.length);
        return Promise.resolve()
            .then(() => {
                return this._dbAccessor.persistConfigHashes(newHashes, partition);
            })
            .then(() => {
                for(var x of newHashes)
                {
                    this._configHashesDict[<string>x.config_hash] = true;
                }
            });
    }

    private _persistSnapshot(snapshot: Snapshot, partition: number)
    {
        if (!this._shouldCreateNewDbSnapshot(snapshot, partition)) {
            return;
        }
        this.logger.info("[_persistSnapshot] BEGIN. Item Count: %s", snapshot.count, this._currentState);
        return Promise.resolve()
            .then(() => this._dbAccessor.fetchSnapshot(partition, snapshot.date))
            .then(dbSnapshot => {
                this.logger.info("[_persistSnapshot] ", dbSnapshot);

                this._resetSnapshotState();

                this._currentState.snapshot_id = dbSnapshot.id;
                this._currentState.snapshot_part = dbSnapshot.part;
                this._currentState.snapshot_date = dbSnapshot.date;
            })
            .then(() => {
                return this._dbAccessor.syncSnapshotItems(partition, this._currentState.snapshot_id, snapshot);
            })
            .then(() => {
                this.logger.info("[_persistSnapshot] END");
            });
    }

    private _queryDatabasePartitions()
    {
        var tablesPartitionsData : TablesPartitionsInfo = {
            maxPartition: 0,
            byTable: {}
        };
        return Promise.serial(HISTORY_TABLES, tableName => {
            return this._database.queryPartitions(tableName)
                .then(partitions => {
                    partitions = _.filter(partitions, x => x.value != 0);
                    
                    tablesPartitionsData.byTable[tableName] = {};
                    for(var partitionInfo of partitions)
                    {
                        var partitionId = partitionInfo.value - 1;
                        tablesPartitionsData.byTable[tableName][partitionId] = true;

                        tablesPartitionsData.maxPartition = Math.max(partitionId, tablesPartitionsData.maxPartition);
                    }
                });
        })
        .then(() => tablesPartitionsData);
    }

    private _prepareDatabasePartitions(partition: number, tablePartitions: Record<string, TablePartitionMap>)
    {
        return Promise.serial(HISTORY_TABLES, x => this._prepareTablePartitions(x, partition, tablePartitions[x]));
    }

    private _prepareTablePartitions(tableName: string, partition: number, myPartitions: TablePartitionMap)
    {
        this.logger.verbose("[_prepareTablePartitions] %s :: %s", tableName, partition, myPartitions)
        if (myPartitions[partition]) {
            return;
        }
        return this._database.createPartition(tableName, 
            HistoryPartitioning.partitionName(partition),
            partition + 1);
    }

    private _shouldCreateNewDbSnapshot(snapshot: Snapshot, partition: number)
    {
        if (!this._currentState.snapshot_id) {
            return true;
        }

        if (partition != this._currentState.snapshot_part) {
            return true;
        }

        if (this._currentState.diff_count > 50) {
            return true;
        }

        return false;
    }

    private _persistDiff(snapshot: Snapshot, partition: number, itemsDelta: DeltaItem[], deltaSummary: DeltaSummary)
    {
        this.logger.info('[_persistDiff] BEGIN. ', this._currentState);

        return Promise.resolve()
            .then(() => {
                return this._dbAccessor.fetchDiff(this._currentState.snapshot_id,
                    partition,
                    snapshot.date,
                    this._currentState.diff_in_snapshot,
                    deltaSummary)
            })
            .then(dbDiff => {
                this._currentState.diff_id = dbDiff.id;
                this._currentState.diff_date = dbDiff.date;
                this._currentState.diff_in_snapshot = false;
                this._currentState.diff_count += 1;

                this._currentState.diff_item_count += itemsDelta.length;

                var diffSnapshot = new Snapshot(null);
                for(var x of itemsDelta)
                {
                    var newItem = _.clone(x);
                    diffSnapshot.addItem(newItem);
                }

                return this._dbAccessor.syncDiffItems(partition, dbDiff.id, diffSnapshot);
            })
            .then(() => {
                this.logger.info('[_persistDiff] END.');
            })
    }

    private _persistTimeline(snapshot: Snapshot, partition: number, deltaSummary: DeltaSummary)
    {
        this.logger.info('[_persistTimeline] BEGIN. ');
        return Promise.resolve()
            .then(() => {
                return this._dbAccessor.syncTimelineItems(partition, snapshot.date, deltaSummary);
            })
            .then(() => {
                this.logger.info('[_persistTimeline] END.');
            })
    }

    private _persistSummaries(snapshot: Snapshot, partition: number, deltaSummary: DeltaSummary)
    {
        this.logger.info('[_persistSummaries] BEGIN. ');
        return Promise.resolve()
            .then(() => {
                return this._dbAccessor.syncSummaryItems(partition, snapshot.date, deltaSummary.snapshot);
            })
            .then(() => {
                return this._dbAccessor.syncSummaryDeltaItems(partition, snapshot.date, deltaSummary.delta);
            })
            .then(() => {
                this.logger.info('[_persistSummaries] END.');
            })
    }

    private _constructDeltaSummary(snapshot: Snapshot, itemsDelta: DeltaItem[])
    {
        var deltaSummary : DeltaSummary = {
            snapshot: this._constructSnapshotSummary(snapshot.getItems()),
            delta: this._constructSnapshotSummary(itemsDelta)
        }

        var currentSnapshotAlerts = this._constructAlertsSummary(snapshot);

        this.debugObjectLogger.dump("current-snapshot-alerts-", this._interation, currentSnapshotAlerts);


        const currentTotalAlerts = this._newAlertsDict();
        const currentByKindAlerts : Record<string, AlertCounter> = {};
        for(let kind of _.keys(currentSnapshotAlerts))
        {
            let dict = currentSnapshotAlerts[kind];
            currentByKindAlerts[kind] = this._newAlertsDict();
            for(let itemAlerts of _.values(dict))
            {
                this._appendAlertCounts(currentTotalAlerts, itemAlerts);
                this._appendAlertCounts(currentByKindAlerts[kind], itemAlerts);
            }
        }
        deltaSummary.snapshot.alerts = currentTotalAlerts;
        deltaSummary.snapshot.alertsByKind = currentByKindAlerts;

        var deltaAlertsDict = _.cloneDeep(currentTotalAlerts);
        var deltaAlertsByKindDict = _.cloneDeep(currentByKindAlerts);
        if (this._latestSnapshotAlerts)
        {
            for(let kind of _.keys(this._latestSnapshotAlerts))
            {
                if (!deltaAlertsByKindDict[kind]) {
                    deltaAlertsByKindDict[kind] = this._newAlertsDict();
                }
                let dict = this._latestSnapshotAlerts[kind];
                for(let itemAlerts of _.values(dict))
                {
                    this._subtractAlertCounts(deltaAlertsDict, itemAlerts);
                    this._subtractAlertCounts(deltaAlertsByKindDict[kind], itemAlerts);
                }
            }
        }
        deltaSummary.delta.alerts = deltaAlertsDict;
        deltaSummary.delta.alertsByKind = deltaAlertsByKindDict;

        this._latestSnapshotAlerts = currentSnapshotAlerts;

        return deltaSummary;
    }

    private _appendAlertCounts(counter: AlertCounter, other: AlertCounter)
    {
        counter.error += other.error;
        counter.warn += other.warn;
    }

    private _subtractAlertCounts(counter: AlertCounter, other: AlertCounter)
    {
        counter.error += other.error;
        counter.warn += other.warn;
    }

    private _newAlertsDict() : AlertCounter
    {
        return {
            error: 0,
            warn: 0
        }
    }

    private _constructSnapshotSummary(items: any[])
    {
        var dns : Record<string, boolean> = {};
        var summary : SnapshotSummary= {
            items: 0,
            kinds: {}
        };

        for(var item of items)
        {
            if (item.config_kind != 'alerts')
            {
                if (!dns[item.dn])
                {
                    dns[item.dn] = true;
                    
                    summary.items = summary.items + 1;

                    if (!summary.kinds[item.kind])
                    {
                        summary.kinds[item.kind] = 1;
                    }
                    else
                    {
                        summary.kinds[item.kind] = summary.kinds[item.kind] + 1;
                    }
                }
            }
        }

        return summary;
    }

    private _constructAlertsSummary(snapshot: Snapshot) : AlertsSummary
    {
        let alertsDict : AlertsSummary = {};
        for(var item of snapshot.getItems())
        {
            // this.logger.info("[_constructAlertsSummary] ", item);
            if (item.config_kind == 'node')
            {
                if (item.config.selfAlertCount)
                {
                    for(let severity of _.keys(item.config.selfAlertCount))
                    {
                        let count = item.config.selfAlertCount[severity];
                        if (count > 0)
                        {
                            if (!alertsDict[item.kind])
                            {
                                alertsDict[item.kind] = {};
                            }
                            if (!alertsDict[item.kind][item.dn])
                            {
                                alertsDict[item.kind][item.dn] = {
                                    error: 0,
                                    warn: 0
                                };
                            }
                            (<any>alertsDict[item.kind][item.dn])[severity] = count;
                        }
                    }
                }
            }
        }
        return alertsDict;
    }

    private _produceDelta(targetSnapshot: Snapshot, currentSnapshot: Snapshot) : DeltaItem[]
    {
        this.logger.info("[_produceDelta] target count: %s, current count: %s.",  targetSnapshot.count, currentSnapshot.count);
        var itemsDelta : DeltaItem[] = [];

        for(var key of targetSnapshot.keys)
        {
            var targetItem = targetSnapshot.findById(key);
            var currentItem = currentSnapshot.findById(key);
            currentItem = this._sanitizeSnapshotItem(currentItem);
            var shouldAdd = true;

            if (currentItem)
            {
                if (BufferUtils.areEqual(targetItem.config_hash, currentItem.config_hash))
                {
                    shouldAdd = false;
                }
            }

            if (shouldAdd)
            {
                itemsDelta.push({
                    present: 1,
                    dn: targetItem.dn,
                    kind: targetItem.kind,
                    config_kind: targetItem.config_kind,
                    name: targetItem.name,
                    config: targetItem.config,
                    config_hash: targetItem.config_hash
                });
            }
        }

        for(var key of currentSnapshot.keys)
        {
            var currentItem = currentSnapshot.findById(key);
            if (!targetSnapshot.findById(key))
            {
                currentItem = this._sanitizeSnapshotItem(currentItem);
                currentItem.present = 0;
                itemsDelta.push(currentItem);
            }
        }

        return itemsDelta;
    }

    private _sanitizeSnapshotItem(item: any)
    {
        if (!item) {
            return null;
        }
        var config: any = {
            dn: item.dn,
            kind: item.kind,
            config_kind: item.config_kind,
            config_hash: item.config_hash
        }
        if (item.name) {
            config.name = item.name;
        }
        return config;
    }

    private _persistConfig()
    {
        return Promise.resolve()
            .then(() => this._dbAccessor.updateConfig('STATE', this._currentState));
    }

    private _produceSnapshot(state: RegistryBundleState)
    {
        this._logger.info("[_produceSnapshot] date: %s, count: %s", state.date.toISOString(), state.getCount());

        const snapshot = new Snapshot(state.date);
        for(let node of state.nodeItems)
        {
            {
                snapshot.addItem({
                    config_kind: 'node',
                    dn: node.dn,
                    kind: node.kind,
                    config: node.config
                });
            }
            
            {
                for(var props of _.values(node.propertiesMap))
                {
                    snapshot.addItem({
                        config_kind: 'props',
                        dn: node.dn,
                        kind: node.kind,
                        name: props.id,
                        config: props
                    });
                }
            }

            {
                if (node.selfAlerts.length > 0)
                {
                    snapshot.addItem({
                        config_kind: 'alerts',
                        dn: node.dn,
                        kind: node.kind,
                        config: node.selfAlerts
                    });
                }
            }
        }

        return snapshot;
    }

    private _onDbConnected()
    {
        this._logger.info("[_onDbConnected] ...");
        this._latestSnapshot = null;
        return Promise.resolve()
            .then(() => this._dbAccessor.queryConfig('STATE'))
            .then((config : any) => {
                this._currentState = config.value || {};
                this._logger.info("[_onDbConnected] state: ", this._currentState);
            })
            .then(() => this._dbAccessor.snapshotReader.reconstructRecentShapshot())
            .then(snapshot => {
                this._logger.info("[_onDbConnected] reconstructed snapshot item count: %s",
                    snapshot.count);

                this._latestSnapshot = snapshot;

                this._latestSnapshotAlerts = this._constructAlertsSummary(snapshot);

                this._cleanupSnapshot(snapshot);

                this._logger.info("[_onDbConnected] _latestSnapshotAlerts key count: %s", _.keys(this._latestSnapshotAlerts).length);
                this._logger.silly("[_onDbConnected] this._latestSnapshotAlerts: ", this._latestSnapshotAlerts);
            })
            .then(() => {
                return this.debugObjectLogger.dump("history-initial-latest-snapshot-", this._interation, this._latestSnapshot);
            })
            .then(() => {
                return this.debugObjectLogger.dump("history-initial-latest-snapshot-alerts-", this._interation, this._latestSnapshotAlerts);
            })
            .then(() => {
                return this._dbAccessor.querySnapshot(this._currentState.snapshot_id)
            })
            .then(snapshot => {
                if (!snapshot) {
                    this._resetSnapshotState();
                }
            })
            .then(() => {
                this._isDbReady = true;
                this._logger.info("[_onDbConnected] IS READY");
            })
    }

    markDeletedPartition(partition: number)
    {
        if (this._currentState.snapshot_part == partition)
        {
            this._resetSnapshotState();
        }
    }

    setUsedHashesDict(dict: Record<string, boolean>)
    {
        this.logger.info("[setUsedHashesDict] size: %s", _.keys(dict).length);
        this._configHashesDict = dict;
    }

    private _resetSnapshotState()
    {
        this.logger.info('[_resetSnapshotState] ');

        this._currentState.snapshot_part = null;
        this._currentState.snapshot_id = null;
        this._currentState.snapshot_date = null;
        this._currentState.diff_in_snapshot = true;
        this._currentState.diff_count = 0;
        this._currentState.diff_item_count = 0;
    }

}


interface TablesPartitionsInfo
{
    maxPartition: number,
    byTable: Record<string, TablePartitionMap>
}

type TablePartitionMap = Record<string, boolean>


interface DeltaItem
{
    present: number,
    dn: string,
    kind: string,
    config_kind: string,
    name: string,
    config: any,
    config_hash: Buffer
}

interface DeltaSummary
{
    snapshot: any,
    delta: any,
}

type AlertsSummary = Record<string, Record<string, AlertCounter > >;

interface AlertCounter {
    error: number,
    warn: number
}


interface SnapshotSummary
{
    items: number,
    kinds: Record<string, number>
}