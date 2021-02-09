import _ from "the-lodash";
import { ILogger } from "the-logger";
import { ItemId } from "@kubevious/helper-logic-processor";
import { ApiGroup } from "./types";

import { Context } from "../context";

import { API_GROUPS } from "./api-groups";

export class K8sParser {
  private _context: Context;
  private _logger: ILogger;

  constructor(context: Context) {
    this._context = context;
    this._logger = context.logger.sublogger("K8sParser");
  }

  getAPIGroups(): ApiGroup[] {
    return _.cloneDeep(API_GROUPS);
  }

  parse(isPresent: boolean, obj: any) {
    let id = this._extractId(obj);

    if (isPresent) {
      this._context.concreteRegistry.add(id, obj);
    } else {
      this._context.concreteRegistry.remove(id);
    }
  }

  _extractId(obj: any): ItemId {
    let id: ItemId = {
      infra: "k8s",
      api: obj.apiVersion.split("/")[0],
      kind: obj.kind,
      name: obj.metadata.name,
    };
    if (obj.metadata.namespace) {
      id.namespace = obj.metadata.namespace;
    }
    return id;
  }
}
