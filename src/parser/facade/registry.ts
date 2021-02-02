import _ from "the-lodash";
import { Promise } from "the-promise";
import { ILogger } from "the-logger";

import { Context } from "../context";
import { JobDampener } from "../utils/job-dampener";

import { LogicItem } from "../logic/item";
import { Snapshot } from "./snapshot";

export class FacadeRegistry {
  private _context: Context;
  private _logger: ILogger;

  private _jobDampener: any;

  constructor(context: Context) {
    this._context = context;
    this._logger = context.logger.sublogger("FacadeRegistry");

    this._context.concreteRegistry.onChanged(
      this._handleConcreteRegistryChange.bind(this)
    );
    this._jobDampener = new JobDampener(
      this._logger.sublogger("FacadeDampener"),
      this._processItems.bind(this)
    );
  }

  get logger() {
    return this._logger;
  }

  init() {
    this._context.concreteRegistry.onChanged(
      this._handleConcreteRegistryChange.bind(this)
    );
  }
  acceptLogicItems(items: LogicItem[]) {
    this._logger.info("[acceptLogicItems] item count: %s", items.length);
    this._jobDampener.acceptJob(new Date(), items);
  }

  _handleConcreteRegistryChange() {
    this._logger.info("[_handleConcreteRegistryChange] BEGIN");

    return Promise.resolve()
      .then(() => {
        if (this._context.areLoadersReady) {
          this._context.logicProcessor.process();
        }
      })
      .then(() => {
        this._logger.info("[_handleConcreteRegistryChange] END");
      });
  }

  handleAreLoadersReadyChange() {
    this._logger.info("[handleAreLoadersReadyChange] ");
    this._handleConcreteRegistryChange();
  }

  _processItems(date: Date, items: LogicItem[]) {
    this._logger.info(
      "[_processItems] Date: %s. item count: %s",
      date.toISOString(),
      items.length
    );
    var snapshot = this._transformItems(date, items);
    return this._context._appContext.facadeRegistry.acceptCurrentSnapshot(
      snapshot
    );
  }

  _transformItems(date: Date, items: LogicItem[]) {
    var snapshot = new Snapshot(date);

    for (var item of items) {
      snapshot.addItem({
        dn: item.dn,
        kind: item.kind,
        config_kind: "node",
        config: item.exportNode(),
      });

      var alerts = item.extractAlerts();
      if (alerts.length > 0) {
        snapshot.addItem({
          dn: item.dn,
          kind: item.kind,
          config_kind: "alerts",
          config: alerts,
        });
      }

      var properties = item.extractProperties();
      for (var props of properties) {
        snapshot.addItem({
          dn: item.dn,
          kind: item.kind,
          config_kind: "props",
          name: props.id,
          config: props,
        });
      }
    }

    return snapshot;
  }
}
