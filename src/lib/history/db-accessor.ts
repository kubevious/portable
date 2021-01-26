import _ from 'the-lodash';
import { Promise } from 'the-promise';
import { ILogger } from 'the-logger' ;

import * as DateUtils from '@kubevious/helpers/dist/date-utils';
import * as BufferUtils from '@kubevious/helpers/dist/buffer-utils';
import { Helpers, Snapshot, SnapshotReader } from '@kubevious/helpers/dist/history';

import { SnapshotItem, DiffItem, TimelineSample } from '@kubevious/helpers/dist/history';

import { Context } from '../context';
import { Database } from '../db';
import { MySqlDriver } from '@kubevious/easy-data-store'
import { ConfigHash } from './entities';

export class HistoryAccessor
{
    private _logger : ILogger;
    private _context : Context

    private _database : Database;
    private _snapshotReader : SnapshotReader;

    constructor(context: Context)
    {
        this._context = context;
        this._logger = context.logger.sublogger('HistoryAccessor');

        this._database = context.database;

        this._snapshotReader = new SnapshotReader(this.logger, context.database.driver);

        this._registerStatements();
    }

    get logger() {
        return this._logger;
    }

    get debugObjectLogger() {
        return this._context.debugObjectLogger;
    }

    get snapshotReader() {
        return this._snapshotReader;
    }

    private _registerStatements()
    {
        this._registerStatement('GET_SNAPSHOTS', 'SELECT * FROM `snapshots`;');
        this._registerStatement('GET_SNAPSHOT', 'SELECT * FROM `snapshots` WHERE `id` = ?;');
        this._registerStatement('FIND_SNAPSHOT', 'SELECT * FROM `snapshots` WHERE `part` = ? AND `date` = ? ORDER BY `id` DESC LIMIT 1;');
        this._registerStatement('INSERT_SNAPSHOT', 'INSERT INTO `snapshots` (`part`, `date` ) VALUES (?, ?);');

        this._registerStatement('INSERT_SNAPSHOT_ITEM', 'INSERT INTO `snap_items` (`part`, `snapshot_id`, `dn`, `kind`, `config_kind`, `name`, `config_hash`) VALUES (?, ?, ?, ?, ?, ?, ?);');
        this._registerStatement('UPDATE_SNAPSHOT_ITEM', 'UPDATE `snap_items` SET `dn` = ?, `kind` = ?, `config_kind` = ?, `name` = ?, `config_hash` = ? WHERE `part` = ? && `id` = ?;');
        this._registerStatement('DELETE_SNAPSHOT_ITEM', 'DELETE FROM `snap_items` WHERE `part` = ? && `id` = ?;');

        this._registerStatement('FIND_DIFF', 'SELECT * FROM `diffs` WHERE `part` = ? AND `snapshot_id` = ? AND `date` = ? AND `in_snapshot` = ? ORDER BY `id` DESC LIMIT 1;');
        this._registerStatement('INSERT_DIFF', 'INSERT INTO `diffs` (`part`, `snapshot_id`, `date`, `in_snapshot`, `summary`) VALUES (?, ?, ?, ?, ?);');

        this._registerStatement('INSERT_DIFF_ITEM', 'INSERT INTO `diff_items` (`part`, `diff_id`, `dn`, `kind`, `config_kind`, `name`, `present`, `config_hash`) VALUES (?, ?, ?, ?, ?, ?, ?, ?);');
        this._registerStatement('UPDATE_DIFF_ITEM', 'UPDATE `diff_items` SET `dn` = ?, `kind` = ?, `config_kind` = ?, `name` = ?, `present` = ?, `config_hash` = ? WHERE `part` = ? && `id` = ?;');
        this._registerStatement('DELETE_DIFF_ITEM', 'DELETE FROM `diff_items` WHERE `part` = ? && `id` = ?;');

        this._registerStatement('INSERT_TIMELINE_ITEM', 'INSERT INTO `timeline` (`part`, `date`, `changes`, `error`, `warn`) VALUES (?, ?, ?, ?, ?);');
        
        this._registerStatement('INSERT_SUMMARY_COUNTERS_ITEM', 'INSERT INTO `summary_counters` (`part`, `date`, `counter_kind`, `counter`) VALUES (?, ?, ?, ?);');
        this._registerStatement('INSERT_SUMMARY_COUNTERS_BY_KIND_ITEM', 'INSERT INTO `summary_counters_by_kind` (`part`, `date`, `counter_kind`, `item_kind`, `counter`) VALUES (?, ?, ?, ?, ?);');
        this._registerStatement('INSERT_SUMMARY_DELTA_COUNTERS_ITEM', 'INSERT INTO `summary_delta_counters` (`part`, `date`, `counter_kind`, `counter`) VALUES (?, ?, ?, ?);');
        this._registerStatement('INSERT_SUMMARY_DELTA_COUNTERS_BY_KIND_ITEM', 'INSERT INTO `summary_delta_counters_by_kind` (`part`, `date`, `counter_kind`, `item_kind`, `counter`) VALUES (?, ?, ?, ?, ?);');

        this._registerStatement('GET_DIFFS', 'SELECT * FROM `diffs`;');

        this._registerStatement('GET_CONFIG', 'SELECT * FROM `config` WHERE `key` = ?;');
        this._registerStatement('SET_CONFIG', 'INSERT INTO `config`(`key`, `value`) VALUES(?, ?) ON DUPLICATE KEY UPDATE `value` = ?;');

        this._registerStatement('INSERT_CONFIG_HASH', 'INSERT IGNORE INTO `config_hashes`(`key`, `part`, `value`) VALUES(?, ?, ?);');
    }

    updateConfig(key: string, value: any)
    {
        var params = [key, value, value]; 
        return this._execute('SET_CONFIG', params);
    }

    queryConfig(key: string) : Promise<object>
    {
        var params = [key]; 
        return this._execute('GET_CONFIG', params)
            .then((results: any[]) => {
                if (results.length == 0) {
                    return {};
                }
                return _.head(results);
            });
    }

    querySnapshot(id: string)
    {
        var params = [id]; 
        return this._execute('GET_SNAPSHOT', params)
            .then((results: any[]) => {
                if (!results.length) {
                    return null;
                } else {
                    return _.head(results);
                }
            })
    }

    fetchSnapshot(partition: number, date: any) : Promise<any>
    {
        date = DateUtils.makeDate(date);

        var params = [ partition, date ]; 
        return this._execute('FIND_SNAPSHOT', params)
            .then(results => {
                if (!results.length) {
                    return this._execute('INSERT_SNAPSHOT', params)
                        .then(insertResult => {
                            var newObj = {
                                id: insertResult.insertId,
                                part: partition,
                                date: date.toISOString()
                            };
                            return newObj;
                        });
                } else {
                    return _.head(results);
                }
            })
    }

    /* SNAPSHOT ITEMS BEGIN */

    private _makeDbSnapshotFromItems(items : SnapshotItem[])
    {
        const snapshot = new Snapshot(null);
        for(var x of items)
        {
            var key = Helpers.makeKey(x);
            if (!snapshot.findById(key)) {
                snapshot.addItemByKey(key, {});
            }
            var id = x.id;
            delete x.id;
            snapshot.findById(key)[id] = x;
        }
        return snapshot;
    }

    persistConfigHashes(configHashes: ConfigHash[], partition: number)
    {
        this.logger.info("[persistConfigHashes] BEGIN, count: %s", configHashes.length);

        return Promise.resolve()
            .then(() => {

                var statements = configHashes.map(x => {
                    return { 
                        id: 'INSERT_CONFIG_HASH',
                        params: [
                            x.config_hash,
                            partition,
                            x.config
                        ]
                    };
                })

                return this._executeMany(statements);
            })
            .then(() => {
                this.logger.info("[persistConfigHashes] END");
            });
    }

    syncSnapshotItems(partition: number, snapshotId: string, snapshot: any)
    {
        this.logger.info("[syncSnapshotItems] BEGIN, partition: %s, item count: %s", partition, snapshot.count);

        return this._snapshotReader.querySnapshotItems(partition, snapshotId)
            .then(dbItems => {
                var dbSnapshot = this._makeDbSnapshotFromItems(dbItems);
                this.logger.info("[syncSnapshotItems] dbSnapshot count: %s", dbSnapshot.count);

                this.debugObjectLogger.dump("history-snapshot-target", 0, snapshot);
                this.debugObjectLogger.dump("history-snapshot-db", 0, dbSnapshot);

                var itemsDelta = this._produceDelta(snapshot, dbSnapshot);
                this.logger.info("[syncSnapshotItems] itemsDelta count: %s", itemsDelta.length);

                this.debugObjectLogger.dump("history-items-delta", 0, itemsDelta);

                var statements = itemsDelta.map(x => {
                    if (x.action == 'C')
                    {
                        return { 
                            id: 'INSERT_SNAPSHOT_ITEM',
                            params: [
                                partition,
                                snapshotId,
                                x.item.dn,
                                x.item.kind,
                                x.item.config_kind,
                                x.item.name,
                                x.item.config_hash
                            ]
                        };
                    }
                    else if (x.action == 'U')
                    {
                        return { 
                            id: 'UPDATE_SNAPSHOT_ITEM',
                            params: [
                                x.item.dn,
                                x.item.kind,
                                x.item.config_kind,
                                x.item.name,
                                x.item.config_hash,
                                partition,
                                x.oldItemId
                            ]
                        };
                    } 
                    else if (x.action == 'D')
                    {
                        return { 
                            id: 'DELETE_SNAPSHOT_ITEM',
                            params: [
                                partition,
                                x.id
                            ]
                        };
                    }

                    this.logger.info("[syncSnapshotItems] INVALID delta: ", x);
                    throw new Error("INVALID");
                })

                return this._executeMany(statements);
            })
            .then(() => {
                this.logger.info("[syncSnapshotItems] END");
            });
    }

    /* SNAPSHOT ITEMS END */

    /* DIFF BEGIN */

    fetchDiff(snapshotId: string, partition: number, date: any, in_snapshot: any, summary: any)
    {
        date = DateUtils.makeDate(date);
        var params = [partition, snapshotId, date, in_snapshot]; 
        return this._execute('FIND_DIFF', params)
            .then((results : any[]) => {
                if (!results.length) {
                    params = [partition, snapshotId, date, in_snapshot, summary]; 
                    return this._execute('INSERT_DIFF', params)
                        .then(insertResult => {
                            var newObj = {
                                id: insertResult.insertId,
                                snapshot_id: snapshotId,
                                date: date.toISOString()
                            };
                            return newObj;
                        });
                } else {
                    return _.head(results);
                }
            })
    }

    /* DIFF END */

    /* DIFF ITEMS BEGIN */

    syncDiffItems(partition: number, diffId: string, diffSnapshot: any)
    {
        this.logger.info("[syncDiffItems] partition: %s, item count: %s", partition, diffSnapshot.count);

        return this._snapshotReader.queryDiffItems(partition, diffId)
            .then(dbItems => {
                var dbSnapshot = this._makeDbSnapshotFromItems(dbItems);

                var itemsDelta = this._produceDelta(diffSnapshot, dbSnapshot);

                var statements = itemsDelta.map(x => {

                    if (x.action == 'C')
                    {
                        return { 
                            id: 'INSERT_DIFF_ITEM',
                            params: [
                                partition,
                                diffId,
                                x.item.dn,
                                x.item.kind,
                                x.item.config_kind,
                                x.item.name,
                                x.item.present,
                                x.item.config_hash
                            ]
                        };
                    }
                    else if (x.action == 'U')
                    {
                        return { 
                            id: 'UPDATE_DIFF_ITEM',
                            params: [
                                x.item.dn,
                                x.item.kind,
                                x.item.config_kind,
                                x.item.name,
                                x.item.present,
                                x.item.config_hash,
                                partition,
                                x.oldItemId
                            ]
                        };
                    } 
                    else if (x.action == 'D')
                    {
                        return { 
                            id: 'DELETE_DIFF_ITEM',
                            params: [
                                partition,
                                x.id
                            ]
                        };
                    }

                    this.logger.error("[syncDiffItems] INVALID delta: ", x);
                    throw new Error("INVALID");
                })
                // this.logger.info('[syncDiffItems] ', statements);
                // throw new Error("INVALID");

                return this._executeMany(statements);
            });
    }

    /* DIFF ITEMS END */

    /* TIMELINE BEGIN */

    syncTimelineItems(partition: number, date: any, deltaSummary: any)
    {
        this.logger.info("[syncTimelineItems] partition: %s, date: %s", partition, date);
        this.logger.debug("[syncTimelineItems] partition: %s, date: %s, deltaSummary: ", partition, date, deltaSummary);

        let params = [
            partition, 
            date, 
            deltaSummary.delta.items,
            deltaSummary.snapshot.alerts.error,
            deltaSummary.snapshot.alerts.warn
        ];

        return this._execute('INSERT_TIMELINE_ITEM', params);
    }

    /* TIMELINE END */

    /* SUMMARY COUNTERS BEGIN */

    syncSummaryItems(partition: number, date: any, summaryInfo: any)
    {
        this.logger.info("[syncSummaryItems] partition: %s, date: %s", partition, date);
        this.logger.debug("[syncSummaryItems] partition: %s, date: %s, summaryInfo: ", partition, date, summaryInfo);

        return Promise.resolve()
            .then(() => {
                let statements = this._getSummaryItems('INSERT_SUMMARY_COUNTERS_ITEM', partition, date, summaryInfo);
                return this._executeMany(statements);
            })
            .then(() => {
                let statements = this._getSummaryItemsByKind('INSERT_SUMMARY_COUNTERS_BY_KIND_ITEM', partition, date, summaryInfo);
                return this._executeMany(statements);
            })
    }

    syncSummaryDeltaItems(partition: number, date: any, summaryInfo: any)
    {
        this.logger.info("[syncSummaryDeltaItems] partition: %s, date: %s", partition, date);
        this.logger.debug("[syncSummaryDeltaItems] partition: %s, date: %s, summaryInfo: ", partition, date, summaryInfo);

        return Promise.resolve()
            .then(() => {
                let statements = this._getSummaryItems('INSERT_SUMMARY_DELTA_COUNTERS_ITEM', partition, date, summaryInfo);
                return this._executeMany(statements);
            })
            .then(() => {
                let statements = this._getSummaryItemsByKind('INSERT_SUMMARY_DELTA_COUNTERS_BY_KIND_ITEM', partition, date, summaryInfo);
                return this._executeMany(statements);
            })
    }

    private _getSummaryItems(statementId: string, partition: number, date: any, dict: any)
    {
        const items = [];

        items.push({
            id: statementId,
            params: [partition, date, 'logic', dict.items]
        });

        for(let severity of _.keys(dict.alerts))
        {
            items.push({
                id: statementId,
                params: [partition, date, severity, dict.alerts[severity]]
            });
        }

        return items;
    }

    private _getSummaryItemsByKind(statementId: string, partition: number, date: any, dict: any)
    {
        const items = [];

        for(let kind of _.keys(dict.kinds))
        {
            items.push({
                id: statementId,
                params: [partition, date, 'logic', kind, dict.kinds[kind]]
            });
        }

        for(let kind of _.keys(dict.alertsByKind))
        {
            for(let severity of _.keys(dict.alertsByKind[kind]))
            {
                items.push({
                    id: statementId,
                    params: [partition, date, severity, kind, dict.alertsByKind[kind][severity]]
                });
            }
        }

        return items;
    }

    /* SUMMARY COUNTERS END */


    private _produceDelta(targetSnapshot: any, dbSnapshot: any)
    {
        this.logger.info("[produceDelta] targetSnapshot count: %s",  targetSnapshot.count);
        var itemsDelta = [];

        for(var key of targetSnapshot.keys)
        {
            var shouldCreate = true;
            var targetItem = targetSnapshot.findById(key);

            var dbItemDict = dbSnapshot.findById(key)
            if (dbItemDict)
            {
                for(var id of _.keys(dbItemDict))
                {
                    var dbItem = dbItemDict[id];
                    if (shouldCreate)
                    {
                        shouldCreate = false;
                        if (!BufferUtils.areEqual(targetItem.config_hash, dbItem.config_hash))
                        {
                            itemsDelta.push({
                                action: 'U',
                                oldItemId: id,
                                reason: 'not-equal',
                                item: targetItem,
                                currentItem: dbItem
                            });
                        }
                    }
                    else
                    {
                        itemsDelta.push({
                            action: 'D',
                            id: id,
                            reason: 'already-found',
                            item: dbItemDict
                        });
                    }
                }
            }
            
            if (shouldCreate)
            {
                itemsDelta.push({
                    action: 'C',
                    item: targetItem,
                    reason: 'not-found'
                });
            }
        }

        for(var key of dbSnapshot.keys)
        {
            if (!targetSnapshot.findById(key))
            {
                for(var id of _.keys(dbSnapshot[key]))
                {
                    itemsDelta.push({
                        action: 'D',
                        id: id
                    });
                }
            }
        }

        return itemsDelta;
    }

    private _registerStatement(name: string, sql: string)
    {
        return this._database.registerStatement(name, sql);
    }

    private _execute(name: string, params?: any[])
    {
        return this._database.executeStatement(name, params);
    }

    private _executeMany(statements: {id: string, params?: any}[])
    {
        return this._database.executeStatements(statements);
    }

    executeInTransaction(cb: ((driver: MySqlDriver) => Promise<any>))
    {
        return this._database.executeInTransaction(cb);
    }

}

