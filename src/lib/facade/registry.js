const Promise = require('the-promise');
const _ = require('lodash');
const RegistryState = require('kubevious-helpers').RegistryState;
const ParserAlertsPreprocessor = require('../processing/parser-alerts-preprocessor');
const AlertCountProcessor = require('../processing/alert-count-processor');
const HierarchyAlertCountProcessor = require('../processing/hierarchy-alert-count-processor');
const ChildrenCountProcessor = require('../processing/children-count-processor');

class FacadeRegistry
{
    constructor(context)
    {
        this._context = context;
        this._logger = context.logger.sublogger("FacadeRegistry");

        this._configMap = {};
        this._latestSnapshot = null;

        this._setupSnapshots()
    }

    get logger() {
        return this._logger;
    }

    _setupSnapshots() {
        const ParserContext = require('../../parser/context');

        const context = new ParserContext(this._logger, this._context);
        var mockDirName = 'mock/data';
        var myArgs = process.argv.slice(2);
        if (myArgs.length > 0) {
            mockDirName = myArgs[0];
        }
        const MockLoader = require('../../parser/k8s-mock');
        var loader = new MockLoader(context, mockDirName);
        context.addLoader(loader);

        context.run();
    }

    acceptCurrentSnapshot(snapshotInfo)
    {
        this._latestSnapshot = snapshotInfo;
        this._triggerProcess();
    }

    _triggerProcess()
    {
        this._logger.verbose('[_triggerProcess] Begin');

        if (this._processTimer) {
            this._logger.verbose('[_triggerProcess] Timer scheduled...');
            return;
        }
        if (this._isProcessing) {
            this._logger.verbose('[_triggerProcess] Is Processing...');
            return;
        }

        this._processTimer = setTimeout(() => {
            this._logger.verbose('[_triggerProcess] Timer Triggered...');

            this._processTimer = null;
            if (!this._latestSnapshot) {
                this._logger.verbose('[_triggerProcess] No Latest snapshot...');
                return;
            }
            var snapshot = this._latestSnapshot;
            this._latestSnapshot = null;
            this._isProcessing = true;
            return this._processCurrentSnapshot(snapshot)
                .catch(reason => {
                    this._logger.error('[_triggerProcess] failed: ', reason);
                })
                .finally(() => {
                    this._isProcessing = false;
                });

        }, 5000);
    }

    _processCurrentSnapshot(snapshotInfo)
    {
        return this._context.tracker.scope("FacadeRegistry::process", (tracker) => {

            var registryState = null;
            var bundle = null;
            return Promise.resolve()
                .then(() => this._makeState(snapshotInfo, tracker))
                .then(result => {
                    registryState = result;
                })
                .then(() => this._runPreProcessors(registryState, tracker))
                .then(() => this._runPostProcessors(registryState, tracker))
                .then(() => {
                    return tracker.scope("buildBundle", () => {
                        bundle = registryState.buildBundle();
                    });
                })
                .then(() => {
                    return tracker.scope("acceptBundle", () => {
                        return this._acceptBundle(bundle);
                    });
                })
                .then(() => this._runFinalize(registryState, tracker))
        });

    }

    _makeState(snapshotInfo, tracker)
    {
        return tracker.scope("_makeState", () => {
            var registryState = new RegistryState(snapshotInfo)
            return registryState;
        });
    }

    _runPreProcessors(registryState, tracker)
    {
        return tracker.scope("_runPreProcessors", (childTracker) => {
            return this._runProcessors(registryState,
                [
                    ParserAlertsPreprocessor
                ],
                childTracker);
        });
    }

    _runPostProcessors(registryState, tracker)
    {
        return tracker.scope("_runPostProcessors", (childTracker) => {
            return this._runProcessors(registryState,
                [
                    AlertCountProcessor,
                    HierarchyAlertCountProcessor,
                    ChildrenCountProcessor
                ],
                childTracker);
        });
    }

    _runProcessors(registryState, processors, tracker)
    {
        return Promise.serial(processors, x => {
            return tracker.scope(x.name, () => {
                var processor = new x(this.logger, registryState);
                return processor.execute();
            })
        })
    }

    _acceptBundle(bundle)
    {
        {
            var items = [];
            for(var x of bundle.nodes)
            {
                items.push({
                    target: { dn: x.dn },
                    value: _.cloneDeep(x.config),
                    value_hash: x.config_hash,
                });
            }
            this._context.websocket.updateScope({ kind: 'node' }, items);
        }

        {
            var items = [];
            for(var x of bundle.children)
            {
                items.push({
                    target: { dn: x.dn },
                    value: _.cloneDeep(x.config),
                    value_hash: x.config_hash,
                });
            }
            this._context.websocket.updateScope({ kind: 'children' }, items);
        }

        {
            var items = [];
            for(var x of bundle.assets)
            {
                items.push({
                    target: { dn: x.dn },
                    value: _.cloneDeep(x.config),
                    value_hash: x.config_hash,
                });
            }
            this._context.websocket.updateScope({ kind: 'assets' }, items);
        }
    }

    _runFinalize(registryState, tracker)
    {
        return Promise.resolve()
            .then(() => {
                return tracker.scope("registry-accept", () => {
                    return this._context.registry.accept(registryState);
                });
            })
            .then(() => {
                return tracker.scope("search-accept", () => {
                    return this._context.searchEngine.accept(registryState);
                });
            })
    }

}

module.exports = FacadeRegistry;
