import _ from "the-lodash";

import { LogicProcessor } from "../";
import { LogicScope } from "../../scope";
import { LogicItem } from "../../item";
import { ConcreteItem } from "../../../concrete/item";
import {
  ConcreteParserInfo,
  ConcreteProcessorHandlerArgs,
  ConcreteProcessorRuntimeData,
  ConcreteProcessorVariableArgs,
  CreateConcreteItemParams,
} from "../../../types";

export function constructArgs(
  processor: LogicProcessor,
  parserInfo: ConcreteParserInfo,
  scope: LogicScope,
  item: ConcreteItem,
  variableArgs: ConcreteProcessorVariableArgs,
  runtimeData: ConcreteProcessorRuntimeData
): ConcreteProcessorHandlerArgs {
  let createItem = (
    parent: LogicItem,
    name: string,
    params?: CreateConcreteItemParams
  ) => {
    let kindX: string | ((item: ConcreteItem) => string) | undefined =
      parserInfo.kind;
    if (params) {
      if (params.kind) {
        kindX = params.kind;
      }
    }

    let kind: string;
    if (_.isFunction(kindX)) {
      kind = kindX(item);
    } else {
      kind = kindX!;
    }

    if (!kind) {
      throw new Error("Missing handler or params kind.");
    }

    let newObj = parent.fetchByNaming(kind!, name);
    if (params && params.order) {
      newObj.order = params.order;
    }

    runtimeData.createdItems.push(newObj);
    return newObj;
  };

  return {
    logger: processor.logger,

    context: processor.context,

    scope: scope,

    item: item,

    infraScope: scope.getInfraScope(),

    helpers: processor.helpers,

    namespaceScope: variableArgs.namespaceScope!,

    namespaceName: variableArgs.namespaceName!,

    app: variableArgs.app!,

    appScope: variableArgs.appScope!,

    appName: variableArgs.appName!,

    hasCreatedItems: () => {
      return runtimeData.createdItems.length > 0;
    },

    createItem: createItem,

    createK8sItem: (parent: LogicItem, params?: any) => {
      params = params || {};
      var name = params.name || item.config.metadata.name;
      var newObj = createItem(parent, name, params);
      scope.setK8sConfig(newObj, item.config);
      return newObj;
    },

    createAlert: (kind: string, severity: string, msg: string) => {
      runtimeData.createdAlerts.push({
        kind,
        severity,
        msg,
      });
    },
  };
}
