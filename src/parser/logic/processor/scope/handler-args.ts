import _ from "the-lodash";

import { LogicProcessor } from "../";

import { LogicScope } from "../../scope";
import { NamespaceScope } from "../../scope/namespace";

import { LogicItem } from "../../item";

import { ItemScope } from "../../scope/item";
import {
  ScopeParserInfo,
  CreateScopeItemParams,
  ScopeProcessorVariableArgs,
  ScopeProcessorRuntimeData,
  ScopeProcessorHandlerArgs,
} from "../../../types";

export function constructArgs(
  processor: LogicProcessor,
  parserInfo: ScopeParserInfo,
  scope: LogicScope,
  itemScope: ItemScope,
  namespaceScope: NamespaceScope | null,
  variableArgs: ScopeProcessorVariableArgs,
  runtimeData: ScopeProcessorRuntimeData
): ScopeProcessorHandlerArgs {
  let createItem = (
    parent: LogicItem,
    name: string,
    params?: CreateScopeItemParams
  ) => {
    let kindX: string | ((item: ItemScope) => string) | undefined =
      parserInfo.kind;
    if (params) {
      if (params.kind) {
        kindX = params.kind;
      }
    }

    let kind: string;
    if (_.isFunction(kindX)) {
      kind = kindX(itemScope);
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

    itemScope: itemScope,

    infraScope: scope.getInfraScope(),

    helpers: processor.helpers,

    namespaceScope: namespaceScope!,

    hasCreatedItems: () => {
      return runtimeData.createdItems.length > 0;
    },

    createItem: createItem,

    createK8sItem: (parent: LogicItem, params?: any) => {
      params = params || {};
      var name = params.name || itemScope.config.metadata.name;
      var newObj = createItem(parent, name, params);
      scope.setK8sConfig(newObj, itemScope.config);
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
