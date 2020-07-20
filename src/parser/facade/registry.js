const Promise = require('the-promise');
const _ = require('lodash');
const JobDampener = require('../utils/job-dampener');
const Snapshot = require('./snapshot')

class FacadeRegistry
{
    constructor(context)
    {
        this._context = context;
        this._logger = context.logger.sublogger("ParserFacadeRegistry");
        this._jobDampener = new JobDampener(this._logger.sublogger("FacadeDampener"), this._processItems.bind(this));

        this._context.concreteRegistry.onChanged(this._handleConcreteRegistryChange.bind(this));
    }

    get logger() {
        return this._logger;
    }

    acceptLogicItems(items)
    {
        this._logger.info("[acceptLogicItems] item count: %s", items.length);
        this._jobDampener.acceptJob(new Date(), items);
    }

    _processItems(date, items)
    {
        this._logger.info("[_processItems] Date: %s. item count: %s", date.toISOString(), items.length);
        var snapshot = this._transformItems(date, items);
        return this._context._appContext.facadeRegistry.acceptCurrentSnapshot(snapshot)
    }

    _transformItems(date, items) {
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

    _handleConcreteRegistryChange()
    {
        this._logger.info("[_handleConcreteRegistryChange] BEGIN");

        this._context.logicProcessor.process();

        this._logger.info("[_handleConcreteRegistryChange] END");
    }
}

module.exports = FacadeRegistry;
