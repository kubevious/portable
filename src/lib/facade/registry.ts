import _ from "the-lodash";
import { Promise } from "the-promise";
import { ILogger } from "the-logger";

import { Context } from "../context";
import { RegistryBundleState } from "@kubevious/helpers/dist/registry-bundle-state";
import { ProcessingTrackerScoper } from "@kubevious/helpers/dist/processing-tracker";

export class FacadeRegistry {
  private _logger: ILogger;
  private _context: Context;
  _configMap: {};
  _latestSnapshot: ProcessingTrackerScoper | null;
  private _processTimer!: NodeJS.Timeout | null;
  private _isProcessing!: boolean;

  constructor(context: Context) {
    this._context = context;
    this._logger = context.logger.sublogger("FacadeRegistry");

    this._configMap = {};
    this._latestSnapshot = null;
  }

  get logger() {
    return this._logger;
  }

  get debugObjectLogger() {
    return this._context.debugObjectLogger;
  }

  acceptCurrentSnapshot(snapshotInfo: ProcessingTrackerScoper) {
    this._latestSnapshot = snapshotInfo;
    this._triggerProcess();
  }

  _triggerProcess() {
    this._logger.verbose("[_triggerProcess] Begin");

    this._processTimer = setTimeout(() => {
      this._logger.verbose("[_triggerProcess] Timer Triggered...");

      this._processTimer = null;
      if (!this._latestSnapshot) {
        this._logger.verbose("[_triggerProcess] No Latest snapshot...");
        return;
      }
      var snapshot = this._latestSnapshot;
      this._latestSnapshot = null;
      this._isProcessing = true;
      return this._processCurrentSnapshot(snapshot)
        .catch((reason) => {
          this._logger.error("[_triggerProcess] failed: ", reason);
        })
        .finally(() => {
          this._isProcessing = false;
        });
    }, 1000);

    if (this._processTimer) {
      this._logger.verbose("[_triggerProcess] Timer scheduled...");
      return;
    }
    if (this._isProcessing) {
      this._logger.verbose("[_triggerProcess] Is Processing...");
      return;
    }
  }

  _processCurrentSnapshot(snapshotInfo: ProcessingTrackerScoper) {
    return this._context.tracker.scope(
      "FacadeRegistry::_processCurrentSnapshot",
      (tracker) => {
        return this._context.snapshotProcessor
          .process(snapshotInfo, tracker)
          .then((result: any) => {
            return this._runFinalize(result.bundle, tracker);
          });
      }
    );
  }

  private _runFinalize(
    bundle: RegistryBundleState,
    tracker: ProcessingTrackerScoper
  ) {
    return Promise.resolve()
      .then(() => {
        return this._debugOutput(bundle);
      })
      .then(() => {
        this._produceCounters(bundle);
      })
      .then(() => {
        return tracker.scope("websocket-update", () => {
          return this._context.websocket.accept(bundle);
        });
      })
      .then(() => {
        return tracker.scope("registry-accept", () => {
          return this._context.registry.accept(bundle);
        });
      })
      .then(() => {
        return tracker.scope("autocomplete-builder-accept", () => {
          return this._context.autocompleteBuilder.accept(bundle);
        });
      })
      .then(() => {
        return tracker.scope("search-accept", () => {
          return this._context.searchEngine.accept(bundle);
        });
      });
  }

  private _debugOutput(bundle: RegistryBundleState) {
    return Promise.resolve().then(() => {
      const snapshotInfo = {
        date: bundle.date.toISOString(),
        items: <any[]>[],
      };

      for (let x of bundle.nodeItems) {
        snapshotInfo.items.push({
          dn: x.dn,
          config_kind: "node",
          config: x.config,
        });

        for (let propName of _.keys(x.propertiesMap)) {
          snapshotInfo.items.push({
            dn: x.dn,
            config_kind: "props",
            name: propName,
            config: x.propertiesMap[propName],
          });
        }

        if (x.selfAlerts.length > 0) {
          snapshotInfo.items.push({
            dn: x.dn,
            config_kind: "alerts",
            config: x.selfAlerts,
          });
        }
      }

      this.debugObjectLogger.dump("latest-bundle", 0, snapshotInfo);
    });
  }

  private _produceCounters(bundle: RegistryBundleState) {
    const counters = this._extractCounters(bundle);
    this.logger.info("[COUNTERS] BEGIN");
    for (let counter of counters) {
      this.logger.info("[COUNTERS] %s => %s", counter.name, counter.count);
    }
    this.logger.info("[COUNTERS] END");
    this._context.worldvious.acceptCounters(counters);
  }

  private _extractCounters(bundle: RegistryBundleState) {
    let nodeCountDict: Record<string, number> = {};
    for (let node of bundle.nodeItems) {
      if (!nodeCountDict[node.kind]) {
        nodeCountDict[node.kind] = 1;
      } else {
        nodeCountDict[node.kind]++;
      }
    }

    let nodeCounters = _.keys(nodeCountDict).map((x) => ({
      name: x,
      count: nodeCountDict[x],
    }));

    return nodeCounters;
  }
}
