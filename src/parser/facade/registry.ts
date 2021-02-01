import _ from "the-lodash";
import { Promise } from "the-promise";
import { ILogger } from "the-logger";

import { Context } from "../context";

import { LogicItem } from "../logic/item";

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
  }

  get logger() {
    return this._logger;
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
}
