import _ from 'the-lodash';
import { Promise } from 'the-promise';
import { ILogger } from 'the-logger';

import { Context } from '../context';

import moment from 'moment';

const CronJob = require('cron').CronJob

import { Partitioning as HistoryPartitioning } from '@kubevious/helpers/dist/history'
import { HISTORY_TABLES } from './metadata';
import { Database } from '../db';
import { ProcessingTrackerScoper } from '@kubevious/helpers/dist/processing-tracker';

export class HistoryCleanupProcessor
{
    private _logger : ILogger;
    private _context : Context

    private _database : Database;
    private _days : number = 15;
    private _isProcessing : boolean = false;

    private _startupDate? : moment.Moment;
    private _lastCleanupDate? : moment.Moment;
    private _cutoffDate? : moment.Moment;

    constructor(context: Context)
    {
        this._context = context;
        this._logger = context.logger.sublogger('HistoryCleanupProcessor');
        this._database = context.database;
    }

    get logger() {
        return this._logger;
    }

    init()
    {
        this._startupDate = moment();
        this._setupCronJob();
    }

    private _setupCronJob()
    {
        // TODO: Temporarity disabled cleanup scheduling.
        // return;
        var schedule = '* 0/15 0-2 * * *';
        // schedule = '*/1 * * * *';
        const cleanupJob = new CronJob(schedule, () => {
            this._processSchedule();
        })
        cleanupJob.start();
    }

    private _processSchedule()
    {
        var now = moment();
        this.logger.info('[_processSchedule] now: %s', now);

        if (now.diff(this._startupDate, 'minutes') < 15) {
            this.logger.info('[_processSchedule] skipped, waiting 15 minutes post startup');
            return;
        }
        if (this._lastCleanupDate)
        {
            if (now.diff(this._lastCleanupDate, 'hours') < 20) {
                this.logger.info('[_processSchedule] skipped, processed within last 20 hours');
                return;
            }
        }

        this.logger.info('[_processSchedule] will execute');
        this.processCleanup();
    }

    processCleanup()
    {
        this._logger.info('[processCleanup] Begin');
        if (this._isProcessing) {
            this._logger.warn('[processCleanup] Skipped');
            return;
        }
        this._isProcessing = true;

        this._lastCleanupDate = moment();

        this._cutoffDate = moment().subtract(this._days, 'days');
        this._logger.info('[processCleanup] Cutoff Date=%s', this._cutoffDate);

        return this._process(this._context.tracker)
            .then(() => {
                this._logger.info('[processCleanup] End');
            })
            .catch(reason => {
                this._logger.error('[processCleanup] FAILED: ', reason);
            })
            .finally(() => {
                this._isProcessing = false;
            })
    }

    private _process(tracker: ProcessingTrackerScoper)
    {
        return Promise.construct((resolve, reject) => {

            this._context.historyProcessor.lockForCleanup(historyLock => {

                return tracker.scope("HistoryCleanupProcessor::_process", (childTracker) => {
                    return Promise.resolve()
                        .then(() => this._outputDBUsage('pre-cleanup', childTracker))
                        .then(() => this._cleanupHistoryTables(childTracker))
                        .then(() => this._outputDBUsage('post-cleanup', childTracker))
                        
                })
                .finally(() => {
                    historyLock.finish();
                })
                .then(() => {
                    resolve();
                })
                .catch(reason => {
                    reject(reason);
                })
                ;

            });

        });
    }

    private _cleanupHistoryTables(tracker: ProcessingTrackerScoper)
    {
        this._logger.info('[_cleanupHistoryTables] Running...');

        return tracker.scope("_cleanupHistoryTables", (childTracker) => {
            return Promise.serial(HISTORY_TABLES, x => this._cleanupHistoryTable(x));
        });
    }

    private _cleanupHistoryTable(tableName: string)
    {
        this._logger.info('[_cleanupHistoryTable] Table: %s', tableName);
        return this._database.queryPartitions(tableName)
            .then(partitions => {
                this._logger.info('[_cleanupHistoryTable] Table: %s, Current Partitions: ', tableName, partitions);

                var cutoffPartition = HistoryPartitioning.calculateDatePartition(this._cutoffDate);
                this._logger.info('[_cleanupHistoryTable] CutoffPartition=%s', cutoffPartition);

                let partitionIds : PartitionId[] = partitions.map(x => ({
                    id: x.value - 1,
                    name: x.name
                }))

                var partitionsToDelete = partitionIds.filter(x => (x.id <= cutoffPartition));
                this._logger.info('[_cleanupHistoryTable] table: %s, partitionsToDelete:', tableName, partitionsToDelete);

                return Promise.serial(partitionsToDelete, x => this._deletePartition(tableName, x));
            });
    }

    private _deletePartition(tableName: string, partitionId: PartitionId)
    {
        this._logger.info('[_deletePartition] Table: %s, Partition: %s, Id: %s', tableName, partitionId.name, partitionId.id);
        this._context.historyProcessor.markDeletedPartition(partitionId.id);
        return this._database.dropPartition(tableName, partitionId.name);
    }

    private _outputDBUsage(stage: string, tracker: ProcessingTrackerScoper)
    {
        return tracker.scope("_outputDBUsage", (childTracker) => {
            return this._outputDbSize(stage)
        });
    }

    private _countTable(tableName: string, keyColumn: string, stage: string)
    {
        if (!stage) {
            stage = '';
        }
        return this._executeSql(`SELECT COUNT(\`${keyColumn}\`) as count FROM ${tableName}`)
            .then(result => {
                var count = result[0].count;
                this._logger.info('[_countTable] %s, Table: %s, Row Count: %s ', stage, tableName, count);
                return count;
            })
    }

    private _outputDbSize(stage: string)
    {
        var sql = `SELECT \`TABLE_NAME\`, \`TABLE_ROWS\`, ((data_length + index_length) / 1024 / 1024 ) AS size FROM information_schema.TABLES WHERE table_schema = "${process.env.MYSQL_DB}"`
        return this._executeSql(sql)
            .then(result => {
                result = _.orderBy(result, ['size'], ['desc']);
                for(var x of result)
                {
                    this._logger.info('[_outputDbSize] %s, Table: %s, Rows: %s, Size: %s MB', stage, x.TABLE_NAME, x.TABLE_ROWS, x.size);
                }
            });
    }

    private _executeSql(sql: string)
    {
        return this._database.executeSql(sql);
    }
}

interface PartitionId
{
    name: string,
    id: number
}