const Promise = require('the-promise');
const _ = require('lodash');
const JobDampener = require('../utils/job-dampener');

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
        return this._context.reporter.acceptLogicItems(date, items);
    }

    _handleConcreteRegistryChange()
    {
        this._logger.info("[_handleConcreteRegistryChange] BEGIN");

        if (this._context.areLoadersReady) {
            this._context.logicProcessor.process();
        }

        this._logger.info("[_handleConcreteRegistryChange] END");
    }

    handleAreLoadersReadyChange()
    {
        this._logger.info("[handleAreLoadersReadyChange] ");
        this._handleConcreteRegistryChange();
    }
}

module.exports = FacadeRegistry;
