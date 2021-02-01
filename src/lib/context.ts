import _ from "the-lodash";
import { Promise } from "the-promise";

import { Backend } from "@kubevious/helper-backend";
import { ProcessingTracker } from "@kubevious/helpers/dist/processing-tracker";

import { FacadeRegistry } from "./facade/registry";
import ClusterEngine from "./cluster/engine";
import { SearchEngine } from "./search/engine";
import { AutocompleteBuilder } from "./search/autocomplete-builder";
import { Registry } from "./registry/registry";
import { DebugObjectLogger } from "./utils/debug-object-logger";
import { SnapshotProcessor } from "./snapshot-processor";
import { NotificationsApp } from "./apps/notifications";
import { WorldviousClient } from "@kubevious/worldvious-client";
import { Context as ParserContext } from "../parser/context";

import { WebServer } from "./server";
import { WebSocket } from "./server/websocket";

import { SeriesResampler } from "@kubevious/helpers/dist/history/series-resampler";

import VERSION from "../version";

const SERVER_PORT = 5001;
export class Context {
  private _backend: Backend;
  private _logger: any; //  ILogger;
  /* Both of the 'DumpWriter' class (inside the-logger and worldvious-client/node_modules/the-logger)
    should have public _writer and _indent prorerties to be able to uncomment */
  private _tracker: ProcessingTracker;
  private _worldvious: WorldviousClient;

  private _server: WebServer;
  private _websocket: WebSocket;

  private _searchEngine: SearchEngine;
  private _registry: Registry;
  private _autocompleteBuilder: AutocompleteBuilder;

  private _facadeRegistry: FacadeRegistry;

  private _debugObjectLogger: DebugObjectLogger;

  private _snapshotProcessor: SnapshotProcessor;

  private _seriesResamplerHelper: SeriesResampler;

  private _notificationsApp: NotificationsApp;
  _clusterEngine: ClusterEngine;
  _parserContext: any;

  constructor(backend: Backend) {
    this._backend = backend;
    this._logger = backend.logger.sublogger("Context");

    this._logger.info("Version: %s", VERSION);
    require("./art");

    this._tracker = new ProcessingTracker(this.logger.sublogger("Tracker"));
    this._worldvious = new WorldviousClient(this.logger, "backend", VERSION);

    this._searchEngine = new SearchEngine(this);
    this._registry = new Registry(this);

    this._facadeRegistry = new FacadeRegistry(this);

    this._debugObjectLogger = new DebugObjectLogger(this);

    this._server = new WebServer(this);
    this._websocket = new WebSocket(this, this._server);

    this._snapshotProcessor = new SnapshotProcessor(this);

    this._clusterEngine = new ClusterEngine(this);

    this._parserContext = new ParserContext(this._logger, this);

    this._worldvious = new WorldviousClient(this.logger, "backend", VERSION);

    this._autocompleteBuilder = new AutocompleteBuilder(this);

    this._seriesResamplerHelper = new SeriesResampler(200)
      .column("changes", _.max)
      .column("error", _.mean)
      .column("warn", _.mean);

    this._notificationsApp = new NotificationsApp(this);
    backend.registerErrorHandler((reason) => {
      return this.worldvious.acceptError(reason);
    });
  }

  get backend() {
    return this._backend;
  }

  get parserContext() {
    return this._parserContext;
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

  get worldvious(): WorldviousClient {
    return this._worldvious;
  }

  get seriesResamplerHelper() {
    return this._seriesResamplerHelper;
  }

  get notificationsApp() {
    return this._notificationsApp;
  }

  get autocompleteBuilder() {
    return this._autocompleteBuilder;
  }

  get clusterEngine() {
    return this._clusterEngine;
  }

  setupServer() {
    const Server = require("./server");
    this._server = new Server(this, SERVER_PORT);
  }

  run() {
    // this._setupTracker();

    return Promise.resolve()
      .then(() => this._clusterEngine.init())
      .then(() => this.parserContext.init())
      .then(() => this._worldvious.init())
      .then(() => this._server.run())
      .then(() => this._websocket.run())
      .then(() => this._notificationsApp.init())
      .catch((reason) => {
        this.logger.error(reason);
        process.exit(1);
      });
  }

  _runServer() {
    if (!this._server) {
      return;
    }

    this._server.run();
  }

  private _setupTracker() {
    if (process.env.NODE_ENV === "development") {
      this.tracker.enablePeriodicDebugOutput(30);
    } else {
      this.tracker.enablePeriodicDebugOutput(60);
    }

    this.tracker.registerListener((extractedData) => {
      this._worldvious.acceptMetrics(extractedData);
    });
  }
}
