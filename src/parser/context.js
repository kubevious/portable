process.stdin.resume();
process.on('SIGINT', () => {
    console.log('Received SIGINT. Press Control-D to exit.');
    process.exit(0);
});

const Promise = require('the-promise');
const K8sParser = require('./parsers/k8s');
const ConcreteRegistry = require('./concrete/registry');
const FacadeRegistry = require('./facade/registry');
const LogicProcessor = require('./logic/processor');
const DebugObjectLogger = require('./utils/debug-object-logger');

const RemoteLoader = require('./loaders/remote');

class Context
{
    constructor(logger, appContext)
    {
        this._logger = logger.sublogger("ParserContext");
        this._appContext = appContext
        this._loaderInfo = null;
        this._concreteRegistry = new ConcreteRegistry(this);
        this._k8sParser = new K8sParser(this);
        this._logicProcessor = new LogicProcessor(this);

        this._facadeRegistry = new FacadeRegistry(this);

        this._debugObjectLogger = new DebugObjectLogger(this);

        this._k8sClient = null;
    }

    get logger() {
        return this._logger;
    }

    get concreteRegistry() {
        return this._concreteRegistry;
    }

    get facadeRegistry() {
        return this._facadeRegistry;
    }

    get k8sParser() {
        return this._k8sParser;
    }

    get logicProcessor() {
        return this._logicProcessor;
    }

    get debugObjectLogger() {
        return this._debugObjectLogger;
    }

    get appContext() {
        return this._appContext
    }

    init()
    {
        return Promise.resolve()
            .then(() => this.facadeRegistry.init())
            ;
    }

    stopLoaders()
    {
        this._logger.debug("[stopLoaders]");
        this._k8sClient = null;
        if (this._loaderInfo) {
            this._loaderInfo.loader.stop();
            this.concreteRegistry.reset();
            this._loaderInfo = null;
        }
    }

    activateLoader(config)
    {
        this._logger.debug("[activateLoader]", config);
        var loader = new RemoteLoader(this, config);

        this._loaderInfo = {
            loader: loader
        }

        return Promise.resolve()
            .then(() => this._loaderInfo.loader.run())
            .then(() => {
                return {
                    success: true
                };
            })
            .catch(reason => {
                this.logger.error("Error connecting: ", reason);
                this.logger.error("Error connecting: ", reason.message);
                var messages = ['Unknown'];
                if (reason) {
                    if (reason.messages) {
                        messages = reason.messages;
                    } else if (reason.message) {
                        messages = [ reason.message ];
                    }
                }
                return {
                    success: false,
                    messages: messages
                }
            });
    }

    setupK8sClient(client)
    {
        this._k8sClient = client;
    }

}

module.exports = Context;
