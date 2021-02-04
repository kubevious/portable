import _ from "the-lodash";
import { ILogger } from "the-logger";

import { Context } from "../../../context";

import { LogicProcessor } from "../";

import { LogicScope } from "../../scope";

import { ConcreteItem } from "../../../concrete/item";

import {
  BaseParserExecutor,
  ConcreteParserInfo,
  ConcreteProcessorVariableArgs,
  ConcreteProcessorRuntimeData,
} from "../../../types";

import { constructArgs } from "./handler-args";

export class ConcreteParserExecutor implements BaseParserExecutor {
  private _context: Context;
  private _processor: LogicProcessor;
  private _logger: ILogger;
  public path: string;

  private _parserInfo: ConcreteParserInfo;

  constructor(
    processor: LogicProcessor,
    path: string,
    parserInfo: ConcreteParserInfo
  ) {
    this.path = path;
    this._processor = processor;
    this._logger = processor.logger;
    this._context = processor.context;
    this._parserInfo = parserInfo;
  }

  get name(): string {
    return this.path;
  }

  get order(): number {
    return this._parserInfo.order;
  }

  get targetInfo(): string {
    if (!this._parserInfo.target) {
      return "";
    }
    return _.stableStringify(this._parserInfo.target);
  }

  execute(scope: LogicScope) {
    let items = this._context.concreteRegistry.filterItems(
      this._parserInfo.target
    );

    for (var item of items) {
      this._processHandler(scope, item);
    }
  }

  _processHandler(scope: LogicScope, item: ConcreteItem) {
    this._logger.silly(
      "[_processHandler] ConcreteHandler: %s, Item: %s",
      this.path,
      item.id
    );

    let variableArgs: ConcreteProcessorVariableArgs = {};

    let runtimeData: ConcreteProcessorRuntimeData = {
      createdItems: [],
      createdAlerts: [],
    };

    try {
      this._preprocessHandler(scope, item, variableArgs);

      let handlerArgs = constructArgs(
        this._processor,
        this._parserInfo,
        scope,
        item,
        variableArgs,
        runtimeData
      );

      this._parserInfo.handler!(handlerArgs);

      this._postProcessHandler(runtimeData);
    } catch (reason) {
      this._logger.error("Error in %s parser. ", this.path, reason);
    }
  }

  private _preprocessHandler(
    scope: LogicScope,
    item: ConcreteItem,
    variableArgs: ConcreteProcessorVariableArgs
  ) {
    variableArgs.namespaceName = null;
    if (this._parserInfo.needNamespaceScope || this._parserInfo.needAppScope) {
      if (this._parserInfo.namespaceNameCb) {
        variableArgs.namespaceName = this._parserInfo.namespaceNameCb(item);
      } else {
        variableArgs.namespaceName = item.config.metadata.namespace;
      }
      if (_.isNotNullOrUndefined(variableArgs.namespaceName)) {
        variableArgs.namespaceScope = scope.getNamespaceScope(
          variableArgs.namespaceName!
        );
      }
    }

    variableArgs.appName = null;
    if (this._parserInfo.appNameCb) {
      variableArgs.appName = this._parserInfo.appNameCb(item);
    }
    if (variableArgs.namespaceName && variableArgs.namespaceScope) {
      if (this._parserInfo.needAppScope && variableArgs.appName) {
        let appScope = variableArgs.namespaceScope.getAppAndScope(
          variableArgs.appName!,
          this._parserInfo.canCreateAppIfMissing!
        );

        if (appScope) {
          variableArgs.appScope = appScope;
          variableArgs.app = appScope.item;
        }
      }
    }
  }

  private _postProcessHandler(runtimeData: ConcreteProcessorRuntimeData) {
    for (var alertInfo of runtimeData.createdAlerts) {
      for (var createdItem of runtimeData.createdItems) {
        createdItem.addAlert(alertInfo.kind, alertInfo.severity, alertInfo.msg);
      }
    }
  }
}
