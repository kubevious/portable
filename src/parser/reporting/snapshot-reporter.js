const Promise = require('the-promise');
const _ = require('lodash');

class SnapshotReporter
{
    constructor(reporterTarget, logger, snapshot, latestSnapshot, latestSnapshotId)
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

    _execute()
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

    _reportAsSnapshot()
    {
        this.logger.info("[_reportAsSnapshot]");
        return Promise.resolve()
            .then(() => this._createSnapshot())
            .then(() => this._publishSnapshotItems())
            .then(() => this._activateSnapshot())
            .then(() => this._execute())
            ;
    }

    _createSnapshot()
    {
        this.logger.info("[_createSnapshot]");
        var body = {
            date: this._snapshot.date.toISOString()
        }
        return this._request('createSnapshot', body)
            .then(result => {
                this._snapshotId = result.id;
                this.logger.info("[_createSnapshot] id: %s", this._snapshotId);
            })
    }

    _publishSnapshotItems()
    {
        if (!this._snapshotId) {
            return;
        }
        this.logger.info("[_publishSnapshotItems]");
        var reportableItems = this._snapshot.extractSnapshot();
        return Promise.serial(reportableItems, this._publishSnapshotItem.bind(this));
    }

    _publishSnapshotItem(item)
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
        return this._request('publishSnapshotItem', data)
            .then(result => {
                this.logger.silly("[_publishSnapshotItem] result: ", result);

                if (result.new_snapshot) {
                    this.logger.info("[_publishSnapshotItem] resetting snapshot.");
                    this._snapshotId = null;
                }
            });
    }

    _activateSnapshot()
    {
        if (!this._snapshotId) {
            return;
        }

        this.logger.info("[_activateSnapshot]");

        var data = {
            snapshot_id: this._snapshotId
        }
        return this._request('activateSnapshot', data)
            .then(result => {
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

    _reportAsDiff()
    {
        this.logger.info("[_reportAsDiff]");
        return Promise.resolve()
            .then(() => this._createDiff())
            .then(() => this._publishDiffItems())
            .then(() => this._activateDiff())
            .then(() => this._execute())
    }

    _createDiff()
    {
        if (!this._snapshotId) {
            return;
        }
        this.logger.info("[_createDiff]");

        var body = {
            date: this._snapshot.date.toISOString(),
            snapshot_id: this._snapshotId
        }
        return this._request('diff', body)
            .then(result => {
                this.logger.info("[_createDiff] result: ", result);

                console.log('result!!!!', result)
                if (result.new_snapshot) {
                    this.logger.info("[_createDiff] resetting snapshot.");
                    this._snapshotId = null;
                } else {
                    this._diffId = result.id;
                    this.logger.info("[_createDiff] new diff: %s", this._diffId);
                }
            })
    }

    _publishDiffItems()
    {
        if (!this._snapshotId) {
            return;
        }
        if (!this._diffId) {
            return;
        }

        this.logger.info("[_publishSnapshotItems]");
        var reportableItems = this._snapshot.extractDiff(this._latestSnapshot);
        return Promise.serial(reportableItems, this._publishDiffItem.bind(this));
    }

    _publishDiffItem(item)
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
        return this._request('publishDiffItem', data)
            .then(result => {
                this.logger.silly("[_publishDiffItem] result: ", result);

                if (result.new_snapshot) {
                    this.logger.info("[_publishDiffItem] resetting snapshot.");
                    this._snapshotId = null;
                }
            });
    }

    _activateDiff()
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
        return this._request('activateDiff', data)
            .then(result => {
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

    _request(action, data)
    {
        this.logger.verbose("[_request] action: %s", action);
        this.logger.silly("[_request] action: %s, data: ", action, data);
        return this._reporterTarget.request(action, data);
    }
}

module.exports = SnapshotReporter;
