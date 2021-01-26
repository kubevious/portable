import { ILogger } from 'the-logger';
import { Promise } from 'the-promise';

import { Backend, TimerFunction } from '@kubevious/helper-backend'

import { ProcessingTracker } from '@kubevious/helpers/dist/processing-tracker';

import { ConcreteRegistry } from './concrete/registry';

import { K8sParser } from './parsers/k8s';
import { FacadeRegistry } from './facade/registry';
import { WorldviousClient } from '@kubevious/worldvious-client';

import { LogicProcessor } from './logic/processor';
import { SnapshotReporter } from './reporting/reporter';
import { DebugObjectLogger } from './utils/debug-object-logger';
import { WebServer } from './server';

import VERSION from './version'

export class Context
{
    private _backend : Backend;
    private _logger : ILogger;
    private _tracker: ProcessingTracker;
    private _loaders: any[] = [];
    private _concreteRegistry: ConcreteRegistry;
    private _k8sParser: K8sParser;
    private _logicProcessor: LogicProcessor;
    private _reporter: SnapshotReporter;
    private _facadeRegistry: FacadeRegistry;
    private _debugObjectLogger: DebugObjectLogger;
    private _worldvious: WorldviousClient;
    private _server: WebServer;
    private _areLoadersReady = false;

    constructor(backend : Backend)
    {
        this._backend = backend;
        this._logger = backend.logger.sublogger('Context');

        this._tracker = new ProcessingTracker(this.logger.sublogger("Tracker"));

        this._concreteRegistry = new ConcreteRegistry(this);
        this._k8sParser = new K8sParser(this);
        this._logicProcessor = new LogicProcessor(this);
        this._reporter = new SnapshotReporter(this);

        this._facadeRegistry = new FacadeRegistry(this);

        this._debugObjectLogger = new DebugObjectLogger(this);
        
        this._worldvious = new WorldviousClient(this._logger, 'parser', VERSION);

        this._server = new WebServer(this);

        this.backend.registerErrorHandler((reason) => {
            return this.worldvious.acceptError(reason);
        });
    }

    get backend() {
        return this._backend;
    } 

    get logger() : ILogger {
        return this._logger;
    }

    get tracker() {
        return this._tracker;
    }

    get concreteRegistry() : ConcreteRegistry {
        return this._concreteRegistry;
    }

    get facadeRegistry() : FacadeRegistry {
        return this._facadeRegistry;
    }

    get k8sParser() : K8sParser {
        return this._k8sParser;
    }

    get logicProcessor() : LogicProcessor {
        return this._logicProcessor;
    }

    get reporter() : SnapshotReporter {
        return this._reporter;
    }

    get areLoadersReady() : boolean {
        return this._areLoadersReady;
    }

    get debugObjectLogger() : DebugObjectLogger {
        return this._debugObjectLogger;
    }

    get worldvious() : WorldviousClient {
        return this._worldvious;
    }

    addLoader(loader : any)
    {
        var loaderInfo = {
            loader: loader,
            isReady: false,
            readyHandler: (value : any) => {
                loaderInfo.isReady = value;
                this._logger.debug("[readyHandler] %s", value);
                this._checkLoadersReady();
            }
        }
        loader.setupReadyHandler(loaderInfo.readyHandler);
        this._loaders.push(loaderInfo);
    }

    run()
    {
        this._setupTracker();
        
        return Promise.resolve()
            .then(() => this._worldvious.init())
            .then(() => this._processLoaders())
            .then(() => this._server.run());
    }

    private _setupTracker()
    {
        if (process.env.NODE_ENV == 'development')
        {
            this.tracker.enablePeriodicDebugOutput(10);
        }
        else
        {
            this.tracker.enablePeriodicDebugOutput(30);
        }

        this.tracker.registerListener((extractedData : any) => {
            this._worldvious.acceptMetrics(extractedData);
        })
    }

    private _processLoaders()
    {
        return Promise.serial(this._loaders, x => {
            return x.loader.run();
        });
    }

    private _checkLoadersReady()
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

    private _calculateLoadersReady()
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