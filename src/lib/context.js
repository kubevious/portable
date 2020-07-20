const Promise = require('the-promise');
const ProcessingTracker = require("kubevious-helpers").ProcessingTracker;
const FacadeRegistry = require('./facade/registry');
const SearchEngine = require('./search/engine');
const Registry = require('./registry/registry');
const DebugObjectLogger = require('./utils/debug-object-logger');
const WebSocketServer = require('./websocket/server');
const SnapshotProcessor = require('./snapshot-processor')
const ClusterEngine = require('./cluster/engine')
const ParserContext = require('../parser/context');

const SERVER_PORT = 5001;

class Context
{
    constructor(logger)
    {
        console.log("Launching Kubevious Portable...")
        require('./art');
        
        this._logger = logger.sublogger("Context");
        this._tracker = new ProcessingTracker(logger.sublogger("Tracker"));
        this._searchEngine = new SearchEngine(this);
        this._registry = new Registry(this);

        this._facadeRegistry = new FacadeRegistry(this);

        this._debugObjectLogger = new DebugObjectLogger(this);

        this._websocket = new WebSocketServer(this);

        this._snapshotProcessor = new SnapshotProcessor(this);

        this._clusterEngine = new ClusterEngine(this);

        this._parserContext = new ParserContext(this._logger, this);

        this._server = null;
    }

    get logger() {
        return this._logger;
    }

    get parserContext() {
        return this._parserContext;
    }

    get tracker() {
        return this._tracker;
    }

    get facadeRegistry() {
        return this._facadeRegistry;
    }

    get searchEngine() {
        return this._searchEngine;
    }

    get registry() {
        return this._registry;
    }

    get debugObjectLogger() {
        return this._debugObjectLogger;
    }

    get websocket() {
        return this._websocket;
    }

    get snapshotProcessor() {
        return this._snapshotProcessor;
    }

    get clusterEngine() {
        return this._clusterEngine;
    }

    setupServer()
    {
        const Server = require("./server");
        this._server = new Server(this, SERVER_PORT);
    }

    setupK8sClient(client)
    {
    }

    run()
    {
        if (process.env.NODE_ENV === 'development')
        {
            this.tracker.enablePeriodicDebugOutput(30);
        }
        else
        {
            this.tracker.enablePeriodicDebugOutput(60);
        }

        return Promise.resolve()
            .then(() => this._clusterEngine.init())
            .then(() => this.parserContext.init())
            .then(() => this._runServer())
            .then(() => this._setupWebSocket())
            .catch(reason => {
                this.logger.error(reason);
                process.exit(1);
            });
    }

    _runServer()
    {
        if (!this._server) {
            return;
        }

        this._server.run()
    }

    _setupWebSocket()
    {
        this._websocket.run(this._server.httpServer);
    }
}

module.exports = Context;
