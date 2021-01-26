import _ from 'the-lodash';
import { Promise } from 'the-promise';
import { ILogger } from 'the-logger';

import { Snapshot } from './snapshot'

import VERSION from '../version'
import { ReporterTarget } from './target';

export class SnapshotReporter
{
    private _logger: ILogger;
    private _reporterTarget : ReporterTarget;

    private _snapshot: Snapshot;
    private _latestSnapshot: Snapshot | null;
    private _snapshotId: string | null;

    private _isReported = false;
    private _diffId : any;

    constructor(reporterTarget: ReporterTarget, logger: ILogger, snapshot: Snapshot, latestSnapshot: Snapshot | null, latestSnapshotId: string | null)
    {
        this._reporterTarget = reporterTarget;
        this._logger = logger;

        this._snapshot = snapshot;
        this._latestSnapshot = latestSnapshot;
        this._snapshotId = latestSnapshotId;

        this._isReported = false;
        this._diffId = null;
    }

    get logger() {
        return this._logger;
    }

    get isReported() {
        return this._isReported;
    }

    get snapshotId() {
        return this._snapshotId;
    }

    run()
    {
        this._logger.info("[run] ");
        return this._execute();
    }

    private _execute() : Promise<any>
    {
        this.logger.info("[_execute]");
        return Promise.resolve()
            .then(() => {
                if (this._isReported)
                {
                    return;
                }

                if (this._snapshotId)
                {
                    return this._reportAsDiff();
                }
                else
                {
                    return this._reportAsSnapshot();
                }
            });
    }

    private _reportAsSnapshot() : Promise<any>
    {
        this.logger.info("[_reportAsSnapshot]");
        return Promise.resolve()
            .then(() => this._createSnapshot())
            .then(() => this._publishSnapshotItems())
            .then(() => this._activateSnapshot())
            .then(() => this._execute())
            ;
    }

    private _createSnapshot() : Promise<any>
    {
        this.logger.info("[_createSnapshot]");
        var body = {
            version: VERSION,
            date: this._snapshot.date.toISOString()
        }
        return this._request('/snapshot', body)
            .then((result : any) => {
                this._snapshotId = result.id;
                this.logger.info("[_createSnapshot] id: %s", this._snapshotId);
            })
    }

    private _publishSnapshotItems() : Promise<any> | void
    {
        if (!this._snapshotId) {
            return;
        }
        this.logger.info("[_publishSnapshotItems]");
        var reportableItems = this._snapshot.extractSnapshot();
        return Promise.serial(reportableItems, this._publishSnapshotItem.bind(this));
    }

    private _publishSnapshotItem(item : any) : Promise<any> | void
    {
        if (!this._snapshotId) {
            return;
        }

        this.logger.verbose("[_publishSnapshotItem] hash: %s", item.hash);
        this.logger.silly("[_publishSnapshotItem] item: ", item);

        var data = {
            snapshot_id: this._snapshotId,
            items: [item]
        }
        return this._request('/snapshot/items', data)
            .then((result : any) => {
                this.logger.silly("[_publishSnapshotItem] result: ", result);

                if (result.new_snapshot) {
                    this.logger.info("[_publishSnapshotItem] resetting snapshot.");
                    this._snapshotId = null;
                }
            });
    }

    private _activateSnapshot() : Promise<any> | void
    {
        if (!this._snapshotId) {
            return;
        }

        this.logger.info("[_activateSnapshot]");

        var data = {
            snapshot_id: this._snapshotId
        }
        return this._request('/snapshot/activate', data)
            .then((result : any) => {
                this.logger.info("[_activateSnapshot] result: ", result);

                if (result.new_snapshot) {
                    this.logger.info("[_activateSnapshot] resetting snapshot.");
                    this._snapshotId = null;
                } else {
                    this.logger.info("[_activateSnapshot] activated: %s", this._snapshotId);
                    this._isReported = true;
                }
            });
    }

    private _reportAsDiff()
    {
        this.logger.info("[_reportAsDiff]");
        return Promise.resolve()
            .then(() => this._createDiff())
            .then(() => this._publishDiffItems())
            .then(() => this._activateDiff())
            .then(() => this._execute())
    }

    private _createDiff() : Promise<any> | void
    {
        if (!this._snapshotId) {
            return;
        }
        this.logger.info("[_createDiff]");

        var body = {
            date: this._snapshot.date.toISOString(),
            snapshot_id: this._snapshotId
        }
        return this._request('/diff', body)
            .then((result : any) => {
                this.logger.info("[_createDiff] result: ", result);

                if (result.new_snapshot) {
                    this.logger.info("[_createDiff] resetting snapshot.");
                    this._snapshotId = null;
                } else {
                    this._diffId = result.id;
                    this.logger.info("[_createDiff] new diff: %s", this._diffId);
                }
            })
    }

    private _publishDiffItems() : Promise<any> | void
    {
        if (!this._snapshotId) {
            return;
        }
        if (!this._diffId) {
            return;
        }

        this.logger.info("[_publishSnapshotItems]");
        var reportableItems = this._snapshot.extractDiff(this._latestSnapshot!);
        return Promise.serial(reportableItems, this._publishDiffItem.bind(this));
    }

    private _publishDiffItem(item : any) : Promise<any> | void
    {
        if (!this._snapshotId) {
            return;
        }
        if (!this._diffId) {
            return;
        }

        this.logger.verbose("[_publishDiffItem] hash: %s", item.hash);
        this.logger.silly("[_publishDiffItem] item: ", item);

        var data = {
            diff_id: this._diffId,
            items: [item]
        }
        return this._request('/diff/items', data)
            .then((result : any) => {
                this.logger.silly("[_publishDiffItem] result: ", result);

                if (result.new_snapshot) {
                    this.logger.info("[_publishDiffItem] resetting snapshot.");
                    this._snapshotId = null;
                }
            });
    }

    private _activateDiff() : Promise<any> | void
    {
        if (!this._snapshotId) {
            return;
        }
        if (!this._diffId) {
            return;
        }

        this.logger.info("[_activateDiff]");

        var data = {
            diff_id: this._diffId
        }
        return this._request('/diff/activate', data)
            .then((result : any) => {
                this.logger.info("[_activateDiff] result: ", result);

                if (result.new_snapshot) {
                    this.logger.info("[_activateDiff] resetting snapshot.");
                    this._snapshotId = null;
                    this._diffId = null;
                } else {
                    this._snapshotId = result.id;
                    this._isReported = true;
                    this.logger.info("[_activateDiff] activated: %s. new snapshot id: %s.", this._diffId, this._snapshotId);
                }
            });
    }

    private _request(url : string, data : any)
    {
        this.logger.verbose("[_request] url: %s", url);
        this.logger.silly("[_request] url: %s, data: ", url, data);
        return this._reporterTarget.request(url, data);
    }
}