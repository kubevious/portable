import _ from "the-lodash";
import { ILogger } from "the-logger";
import { PropertyValueWithUnit } from "../../../lib/types";

import { ItemsScope } from "./items";

export class InfraScope {
  private _parent: any;
  private _logger: ILogger;

  private _items: ItemsScope;

  private _nodeCount = 0;
  private _nodeResources: Record<string, PropertyValueWithUnit> = {};
  private _clusterResources: Record<string, PropertyValueWithUnit> = {};

  constructor(parent: any) {
    this._parent = parent;
    this._logger = parent.logger;
    this._nodeCount = 0;
    this._nodeResources = {};
    this._clusterResources = {};

    this._items = new ItemsScope(this);
  }

  get logger() {
    return this._logger;
  }

  get nodeCount() {
    return this._nodeCount;
  }

  get clusterResources() {
    return this._clusterResources;
  }

  get nodeResources() {
    return this._nodeResources;
  }

  get items() {
    return this._items;
  }

  increaseNodeCount() {
    this._nodeCount += 1;
  }

  setClusterResources(value: Record<string, PropertyValueWithUnit>) {
    this._clusterResources = value;
  }

  setNodeResources(value: Record<string, PropertyValueWithUnit>) {
    this._nodeResources = value;
  }
}
