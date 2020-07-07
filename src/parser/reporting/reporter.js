const Promise = require('the-promise');
const _ = require('lodash');
const Snapshot = require('./snapshot');
const ReporterTarget = require('./target');

class SnapshotReporter {
    constructor(context) {
        this._context = context;
        this._logger = context.logger.sublogger('Reporter');
        this._determineCollectors();

        for (var collector of this._collectors) {
            collector.target = new ReporterTarget(this._logger, collector);
        }
    }

    get logger() {
        return this._logger;
    }

    _determineCollectors() {
        this._collectors = [{
            collector: this._context.appContext.collector,
        }]

        this.logger.info('[_determineCollectors] Collectors: ', this._collectors);
    }

    acceptLogicItems(date, items) {
        this._logger.info('[acceptLogicItems] item count: %s', items.length);
        var snapshot = this._transforItems(date, items);
        for (var key of snapshot.keys) {
            this._logger.silly('[acceptLogicItems] hash: %s', key);
        }
        this._logger.info('[acceptLogicItems] obj count: %s', snapshot.count);

        return Promise.serial(this._collectors, x => x.target.report(snapshot));
    }

    _transforItems(date, items) {
        var snapshot = new Snapshot(date);

        for (var item of items) {
            snapshot.addItem({
                dn: item.dn,
                kind: item.kind,
                config_kind: 'node',
                config: item.exportNode(),
            });

            var alerts = item.extractAlerts();
            if (alerts.length > 0) {
                snapshot.addItem({
                    dn: item.dn,
                    kind: item.kind,
                    config_kind: 'alerts',
                    config: alerts,
                });
            }

            var properties = item.extractProperties();
            for (var props of properties) {
                snapshot.addItem({
                    dn: item.dn,
                    kind: item.kind,
                    config_kind: 'props',
                    name: props.id,
                    config: props,
                })
            }
        }

        return snapshot;
    }

}

module.exports = SnapshotReporter;
