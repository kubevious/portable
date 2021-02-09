import _ from "the-lodash";
import { Promise } from "the-promise";
import { ILogger } from "the-logger";

import { Context } from "../context";
import { JobDampener } from "@kubevious/helpers";

import { ConcreteRegistry } from "../concrete/registry";

export class FacadeRegistry {
  private _context: Context;
  private _logger: ILogger;

  private _jobDampener: JobDampener<ConcreteRegistry>;

  constructor(context: Context) {
    this._context = context;
    this._logger = context.logger.sublogger("FacadeRegistry");

    this._jobDampener = new JobDampener<ConcreteRegistry>(
      this._logger.sublogger("ParserDampener"),
      this._processConcreteRegistry.bind(this)
    );
  }

  get logger() {
    return this._logger;
  }

  private _processConcreteRegistry(data: ConcreteRegistry, date: Date) {
    this._logger.info(
      "[_processConcreteRegistry] Date: %s. item count: %s",
      date.toISOString(),
      data.allItems.length
    );
    return this._context.appContext.facadeRegistry.processConcreteRegistry(
      data,
      date
    );
  }

  private _handleConcreteRegistryChange() {
    this._logger.info("[_handleConcreteRegistryChange] BEGIN");
    this._jobDampener.acceptJob(this._context.concreteRegistry, new Date());
  }

  handleAreLoadersReadyChange() {
    this._logger.info("[handleAreLoadersReadyChange] ");
    this._handleConcreteRegistryChange();
  }

  init() {
    this._context.concreteRegistry.onChanged(
      this._handleConcreteRegistryChange.bind(this)
    );
  }
}
