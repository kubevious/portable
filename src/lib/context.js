/*** UNDER NO CIRCUMSTANCES DO NOT SnapshotReporterEDIT THIS FILE. THIS FILE IS COPIED                                    ***/
/*** FROM OSS UI. ANY CHANGES TO BE MADE IN KUBEVIOUS OSS UI.                                             ***/
/*** SOURCE: ../kubevious/src/lib/context.js                                                              ***/

const Promise = require('the-promise');
const ProcessingTracker = require("kubevious-helpers").ProcessingTracker;
const FacadeRegistry = require('./facade/registry');
const SearchEngine = require('./search/engine');
const Registry = require('./registry/registry');
const Collector = require('./collector/collector');
const ClusterLeaderElector = require('./cluster/leader-elector')
const DebugObjectLogger = require('./utils/debug-object-logger');
const WebSocketServer = require('./websocket/server');

const SERVER_PORT = 5001;

class Context
{
    constructor(logger)
    {
        this._logger = logger.sublogger("Context");
        this._tracker = new ProcessingTracker(logger.sublogger("Tracker"));
        this._searchEngine = new SearchEngine(this);
        this._collector = new Collector(this);
        this._registry = new Registry(this);

        this._facadeRegistry = new FacadeRegistry(this);

        this._debugObjectLogger = new DebugObjectLogger(this);

        this._websocket = new WebSocketServer(this);

        this._server = null;
        this._k8sClient = null;
        this._clusterLeaderElector = null;
    }

    get logger() {
        return this._logger;
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

    get collector() {
        return this._collector;
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

    setupServer()
    {
        const Server = require("./server");
        this._server = new Server(this, SERVER_PORT);
    }

    setupK8sClient(client)
    {
        this._k8sClient = client;
        if (this._k8sClient) 
        {
            this._clusterLeaderElector = new ClusterLeaderElector(this, this._k8sClient);
        }
    }

    run()
    {
        if (process.env.NODE_ENV === 'development')
        {
            this.tracker.enablePeriodicDebugOutput(5);
        }
        else
        {
            this.tracker.enablePeriodicDebugOutput(10);
        }

        return Promise.resolve()
            .then(() => this._runServer())
            .then(() => this._setupWebSocket())
            .catch(reason => {
                console.log("***** ERROR *****");
                console.log(reason);
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
