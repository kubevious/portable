import _ from "the-lodash";
import { ILogger } from "the-logger";
import { Promise } from "the-promise";

import { Backend, TimerFunction } from "@kubevious/helper-backend";

import { ProcessingTracker } from "@kubevious/helpers/dist/processing-tracker";

import { FacadeRegistry } from "./facade/registry";
import { SearchEngine } from "./search/engine";
import { AutocompleteBuilder } from "./search/autocomplete-builder";
import { Registry } from "./registry/registry";
import { Collector } from "./collector/collector";
import { DebugObjectLogger } from "./utils/debug-object-logger";
import { SnapshotProcessor } from "./snapshot-processor";
import { NotificationsApp } from "./apps/notifications";
import { WorldviousClient } from "@kubevious/worldvious-client";

import { WebServer } from "./server";
import { WebSocket } from "./server/websocket";

import { SeriesResampler } from "@kubevious/helpers/dist/history/series-resampler";

import VERSION from "./version";

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
  private _collector: Collector;
  private _registry: Registry;
  private _autocompleteBuilder: AutocompleteBuilder;

  private _facadeRegistry: FacadeRegistry;

  private _debugObjectLogger: DebugObjectLogger;

  private _snapshotProcessor: SnapshotProcessor;

  private _seriesResamplerHelper: SeriesResampler;

  private _notificationsApp: NotificationsApp;

  constructor(backend: Backend) {
    this._backend = backend;
    this._logger = backend.logger.sublogger("Context");

    this._logger.info("Version: %s", VERSION);

    this._tracker = new ProcessingTracker(this.logger.sublogger("Tracker"));
    this._worldvious = new WorldviousClient(this.logger, "backend", VERSION);

    this._searchEngine = new SearchEngine(this);
    this._collector = new Collector(this);
    this._registry = new Registry(this);
    this._autocompleteBuilder = new AutocompleteBuilder(this);

    this._facadeRegistry = new FacadeRegistry(this);

    this._debugObjectLogger = new DebugObjectLogger(this);

    this._snapshotProcessor = new SnapshotProcessor(this);

    this._seriesResamplerHelper = new SeriesResampler(200)
      .column("changes", _.max)
      .column("error", _.mean)
      .column("warn", _.mean);

    this._notificationsApp = new NotificationsApp(this);

    this._server = new WebServer(this);
    this._websocket = new WebSocket(this, this._server);

    backend.registerErrorHandler((reason) => {
      return this.worldvious.acceptError(reason);
    });
  }

  get backend() {
    return this._backend;
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

  run() {
    this._setupTracker();

    return Promise.resolve()
      .then(() => this._worldvious.init())
      .then(() => this._server.run())
      .then(() => this._websocket.run())
      .then(() => this._notificationsApp.init());
  }

  private _setupTracker() {
    if (process.env.NODE_ENV == "development") {
      this.tracker.enablePeriodicDebugOutput(10);
    } else {
      this.tracker.enablePeriodicDebugOutput(30);
    }

    this.tracker.registerListener((extractedData) => {
      this._worldvious.acceptMetrics(extractedData);
    });
  }
}
