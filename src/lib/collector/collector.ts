import _ from 'the-lodash';
import { Promise } from 'the-promise';
import { ILogger } from 'the-logger' ;

import { v4 as uuidv4 } from 'uuid';
import * as DateUtils from '@kubevious/helpers/dist/date-utils';

import { Context } from '../context';
import { SnapshotItemInfo } from '@kubevious/helpers/dist/snapshot/types';

export interface UserMetricItem
{
    category: string,
    name: string,
    value: string | number
}

export interface MetricItem
{
    origDate: Date,
    dateStart: Date,
    dateEnd: Date | null,
    kind: string,
    durationSeconds: number | null
}

export interface CollectorSnapshotInfo
{
    date: Date,
    metric: MetricItem,
    items: Record<string, SnapshotItemInfo>
}

export interface CollectorSnapshotItem
{
    hash: string,
    data: SnapshotItemInfo
}

export interface DiffItem
{

}

export class Collector
{
    private _logger : ILogger;
    private _context : Context

    private _snapshots : Record<string, CollectorSnapshotInfo> = {};
    private _diffs : Record<string, any> = {};

    private _iteration : number = 0;

    private _parserVersion? : string;
    private _currentMetric : any;
    private _latestMetric : any;
    private _recentDurations : number[] = [];

    constructor(context: Context)
    {
        this._context = context;
        this._logger = context.logger.sublogger("Collector");

        this.logger.info("[constructed] ");
    }

    get logger() {
        return this._logger;
    }

    extractMetrics()
    {
        let metrics : UserMetricItem[] = [];

        metrics.push({
            category: 'Collector',
            name: 'Parser Version',
            value: this._parserVersion ? this._parserVersion : 'unknown'
        })

        metrics.push({
            category: 'Collector',
            name: 'Recent Durations',
            value: JSON.stringify(this._recentDurations)
        })

        if (this._currentMetric && !this._currentMetric.dateEnd) {
            metrics.push({
                category: 'Collector',
                name: 'Current Report Date',
                value: this._currentMetric.dateStart
            })
    
            metrics.push({
                category: 'Collector',
                name: 'Current Report Kind',
                value: this._currentMetric.kind
            })

            let durationSeconds = DateUtils.diffSeconds(new Date(), this._currentMetric.dateStart);
            metrics.push({
                category: 'Collector',
                name: 'Current Report Duration(sec). Still collecting...',
                value: durationSeconds
            })
        }

        if (this._latestMetric) {
            metrics.push({
                category: 'Collector',
                name: 'Latest Report Date',
                value: this._latestMetric.dateStart
            })

            metrics.push({
                category: 'Collector',
                name: 'Latest Report Kind',
                value: this._latestMetric.kind
            })

            metrics.push({
                category: 'Collector',
                name: 'Latest Report Duration(sec)',
                value: this._latestMetric.durationSeconds
            })
        }

        return metrics;
    }

    private _newMetric(date: Date, kind: string) 
    {
        let metric : MetricItem = {
            origDate: date,
            dateStart: new Date(),
            dateEnd: null,
            kind: kind,
            durationSeconds: null
        };
        this._currentMetric = metric;
        return metric;
    }

    private _endMetric(metric: MetricItem)
    {
        metric.dateEnd = new Date();
        metric.durationSeconds = DateUtils.diffSeconds(metric.dateEnd, metric.dateStart);
        this._recentDurations.push(metric.durationSeconds);
        this._recentDurations = _.takeRight(this._recentDurations, 10);
        this._latestMetric = metric;
        return metric;
    }
    
    newSnapshot(date: Date, parserVersion: string)
    {
        this._parserVersion = parserVersion;

        let metric = this._newMetric(date, 'snapshot');

        var id = uuidv4();
        this._snapshots[id] = {
            date: date,
            metric: metric,
            items: {}
        };

        return {
            id: id
        };
    }

    acceptSnapshotItems(snapshotId: string, items: CollectorSnapshotItem[])
    {
        var snapshotInfo = this._snapshots[snapshotId];
        if (!snapshotInfo) {
            return RESPONSE_NEED_NEW_SNAPSHOT;
        }

        for(var item of items)
        {
            snapshotInfo.items[item.hash] = item.data;
        }

        return {};
    }

    activateSnapshot(snapshotId: string)
    {
        return this._context.tracker.scope("collector::activateSnapshot", (tracker) => {
            var snapshotInfo = this._snapshots[snapshotId];
            if (!snapshotInfo) {
                return RESPONSE_NEED_NEW_SNAPSHOT;
            }

            this._acceptSnapshot(snapshotInfo);

            return {};
        });
    }

    newDiff(snapshotId: string, date: Date)
    {
        var snapshotInfo = this._snapshots[snapshotId];
        if (!snapshotInfo) {
            return RESPONSE_NEED_NEW_SNAPSHOT;
        }

        let metric = this._newMetric(date, 'snapshot');
        metric.kind = 'diff';

        var id = uuidv4();
        this._diffs[id] = {
            date: date,
            metric: metric,
            snapshotId: snapshotId,
            items: []
        };

        return {
            id: id
        };
    }

    acceptDiffItems(diffId: string, items: DiffItem[])
    {
        var diffInfo = this._diffs[diffId];
        if (!diffInfo) {
            return RESPONSE_NEED_NEW_SNAPSHOT;
        }

        for(var item of items)
        {
            diffInfo.items.push(item);
        }

        return {};
    }

    activateDiff(diffId: string)
    {
        return this._context.tracker.scope("collector::activateDiff", (tracker) => {
            var diffInfo = this._diffs[diffId];
            if (!diffInfo) {
                return RESPONSE_NEED_NEW_SNAPSHOT;
            }
    
            var snapshotInfo = this._snapshots[diffInfo.snapshotId];
            if (!snapshotInfo) {
                return RESPONSE_NEED_NEW_SNAPSHOT;
            }
    
            var newSnapshotId = uuidv4();
            var newSnapshotInfo : CollectorSnapshotInfo = {
                date: new Date(diffInfo.date),
                metric: diffInfo.metric,
                items: _.clone(snapshotInfo.items)
            };
            this._snapshots[newSnapshotId] = newSnapshotInfo;
    
            for(var diffItem of diffInfo.items)
            {
                if (diffItem.present)
                {
                    newSnapshotInfo.items[diffItem.hash] = diffItem.data;
                }
                else
                {
                    delete newSnapshotInfo.items[diffItem.hash];
                }
            }
    
            delete this._snapshots[diffInfo.snapshotId];
    
            this._acceptSnapshot(newSnapshotInfo);
    
            return {
                id: newSnapshotId
            };
        });
    }

    private _acceptSnapshot(snapshotInfo: CollectorSnapshotInfo)
    {
        this._endMetric(snapshotInfo.metric);

        this.logger.info("[_acceptSnapshot] item count: %s", _.keys(snapshotInfo.items).length);
        this.logger.info("[_acceptSnapshot] metric: ", snapshotInfo.metric);
        var safeSnapshot = _.cloneDeep(snapshotInfo);
        this._context.facadeRegistry.acceptCurrentSnapshot(safeSnapshot);
    }

}

const RESPONSE_NEED_NEW_SNAPSHOT = {
    new_snapshot: true
};
