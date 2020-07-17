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
        this._loaders = [];
        this._concreteRegistry = new ConcreteRegistry(this);
        this._k8sParser = new K8sParser(this);
        this._logicProcessor = new LogicProcessor(this);

        this._facadeRegistry = new FacadeRegistry(this);

        this._debugObjectLogger = new DebugObjectLogger(this);

        this._areLoadersReady = false;

        this._server = null;
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

    get areLoadersReady() {
        return this._areLoadersReady;
    }

    get debugObjectLogger() {
        return this._debugObjectLogger;
    }

    get appContext() {
        return this._appContext
    }

    stopLoaders()
    {
        this._logger.debug("[stopLoaders]");
        this._areLoadersReady = false;
        this._k8sClient = null;
        for(var loader of this._loaders)
        {
            // loader.stop();
        }
        this._loaders = [];
    }

    activateLoader(config)
    {
        this._logger.debug("[activateLoader]", config);
        var loader = new RemoteLoader(this, config);
        this._addLoader(loader);
        this._run();
    }

    _addLoader(loader)
    {
        var loaderInfo = {
            loader: loader,
            isReady: false,
            readyHandler: (value) => {
                loaderInfo.isReady = value;
                this._logger.debug("[readyHandler] %s", value);
                this._checkLoadersReady();
            }
        }
        loader.setupReadyHandler(loaderInfo.readyHandler);
        this._loaders.push(loaderInfo);
    }

    setupK8sClient(client)
    {
        this._k8sClient = client;
    }

    _run()
    {
        return Promise.resolve()
            .then(() => this._processLoaders())
            .catch(reason => {
                console.log("***** ERROR *****");
                console.log(reason);
                this.logger.error(reason);
            });
    }

    _processLoaders()
    {
        return Promise.serial(this._loaders, x => {
            return x.loader.run();
        });
    }

    _checkLoadersReady()
    {
        var areLoadersReady = this._calculateLoadersReady();
        if (areLoadersReady != this._areLoadersReady) {
            this._areLoadersReady = areLoadersReady;
            this.logger.info("[_checkLoadersReady] areLoadersReady: %s", areLoadersReady);

            if (this._areLoadersReady)
            {
                this.facadeRegistry.handleAreLoadersReadyChange();
            }
        }
    }

    _calculateLoadersReady()
    {
        for(var loader of this._loaders)
        {
            if (!loader.isReady) {
                return false;
            }
        }
        return true;
    }
}

module.exports = Context;
