import _ from "the-lodash";
import { Promise } from "the-promise";
import { ILogger } from "the-logger";

import * as fs from "fs";
import * as Path from "path";

import { RegistryState } from "@kubevious/helpers/dist/registry-state";
import { RegistryBundleState } from "@kubevious/helpers/dist/registry-bundle-state";
import { ProcessorBuilder } from "./builder";
import { Snapshot } from "../../parser/facade/snapshot";

import { Context } from "../context";
import { ProcessingTrackerScoper } from "@kubevious/helpers/dist/processing-tracker";
import { Handler } from "../types";

interface ProcessorEntry {
  name: string;
  order: number;
  handler: Handler;
}

export class SnapshotProcessor {
  private _logger: ILogger;
  private _context: Context;

  private _processors: ProcessorEntry[] = [];

  constructor(context: Context) {
    this._context = context;
    this._logger = context.logger.sublogger("SnapshotProcessor");

    this._extractProcessors();
  }

  get logger() {
    return this._logger;
  }

  private _extractProcessors() {
    var location = "processors";
    const processorsDir = Path.join(__dirname, location);
    this.logger.info("[_extractProcessors] from %s", processorsDir);
    var files = fs.readdirSync(processorsDir);
    files = _.filter(files, (x) => x.endsWith(".d.ts"));

    for (let fileName of files) {
      let moduleName = fileName.replace(".d.ts", "");
      let modulePath = location + "/" + moduleName;
      this._logger.info(
        "Loading processor %s from %s...",
        moduleName,
        modulePath
      );

      const processorModule = require("./" + modulePath);
      const processorBuilder = <ProcessorBuilder>processorModule.default;
      const processorInfo = processorBuilder._export();

      if (!processorInfo.isDisabled) {
        this._processors.push({
          name: modulePath,
          order: processorInfo.order,
          handler: processorInfo.handler!,
        });
      }
    }
    this._processors = _.orderBy(this._processors, (x) => x.order);

    for (var processor of this._processors) {
      this._logger.info(
        "[_extractProcessors] HANDLER: %s :: %s",
        processor.order,
        processor.name
      );
    }
  }

  process(snapshotInfo: Snapshot, tracker: ProcessingTrackerScoper) {
    if (!tracker) {
      tracker = this._context.tracker;
    }

    return tracker.scope(
      "SnapshotProcessor::process",
      (innerTracker: ProcessingTrackerScoper) => {
        var registryState: RegistryState;
        var bundle: RegistryBundleState;
        return (
          Promise.resolve()
            .then(() => this._makeState(snapshotInfo, tracker))
            .then((result) => {
              registryState = result;
            })
            .then(() => this._runProcessors(registryState, tracker))
            // .then(() => {
            //     return tracker.scope("finalizeState", () => {
            //         registryState.finalizeState(); // this function now is not exist on the "@kubevious/helpers/dist/registry-state"
            //     });
            // })
            .then(() => {
              return innerTracker.scope("buildBundle", () => {
                bundle = registryState!.buildBundle();
              });
            })
            .then(() => {
              return {
                registryState: registryState,
                bundle: bundle,
              };
            })
        );
      }
    );
  }

  private _makeState(snapshotInfo: Snapshot, tracker: ProcessingTrackerScoper) {
    return tracker.scope("_makeState", () => {
      var registryState = new RegistryState(snapshotInfo);
      return registryState;
    });
  }
  private _runProcessors(
    registryState: RegistryState,
    tracker: ProcessingTrackerScoper
  ) {
    return tracker.scope("handlers", (procTracker) => {
      return Promise.serial(this._processors, (processor) => {
        return procTracker.scope(processor.name, (innerTracker) => {
          var params = {
            logger: this.logger,
            context: this._context,
            state: registryState,
            tracker: innerTracker,
          };

          return processor.handler(params);
        });
      });
    });
  }
}
