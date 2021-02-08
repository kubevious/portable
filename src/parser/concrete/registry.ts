import _ from "the-lodash";
import { Promise } from "the-promise";
import { ILogger } from "the-logger";

import { Context } from "../context";

import { EventDampener } from "@kubevious/helpers/dist/event-dampener";

import { ConcreteItem } from "./item";
import { ItemId } from "../../lib/types";

export class ConcreteRegistry {
  private _context: Context;
  private _logger: ILogger;

  private _flatItemsDict: Record<any, ConcreteItem> = {};
  private _itemsKindDict: Record<any, Record<any, ConcreteItem>> = {};

  private _changeEvent: any;

  constructor(context: Context) {
    this._logger = context.logger.sublogger("ConcreteRegistry");
    this._context = context;

    this._changeEvent = new EventDampener(this.logger);

    this.onChanged(() => {
      return this.debugOutputToFile();
    });
  }

  get logger(): ILogger {
    return this._logger;
  }

  get allItems(): ConcreteItem[] {
    return _.values(this._flatItemsDict);
  }

  reset() {
    this._flatItemsDict = {};
    this._itemsKindDict = {};
    this._triggerChange();
  }

  add(id: ItemId, obj: any) {
    this.logger.verbose("[add] ", id);

    let rawId = this._makeDictId(id);
    let item = new ConcreteItem(this, id, obj);

    this._flatItemsDict[rawId] = item;

    if (!this._itemsKindDict[item.groupKey]) {
      this._itemsKindDict[item.groupKey] = {};
    }
    this._itemsKindDict[item.groupKey][rawId] = item;

    this._triggerChange();
  }

  remove(id: ItemId) {
    this.logger.verbose("[remove] %s", id);

    let rawId = this._makeDictId(id);

    let item = this._flatItemsDict[rawId];
    if (item) {
      const groupDict = this._itemsKindDict[item.groupKey];
      if (groupDict) {
        delete groupDict[rawId];
        if (_.keys(groupDict).length !== 0) {
          delete this._itemsKindDict[item.groupKey];
        }
      } else {
        this.logger.warn(
          "[remove] Failed to remove kind group key %s for %s",
          item.groupKey,
          rawId
        );
      }

      delete this._flatItemsDict[rawId];

      this._triggerChange();
    }
  }

  _triggerChange() {
    this.logger.debug("[_triggerChange]");
    this._changeEvent.trigger();
  }

  findById(id: ItemId): ConcreteItem | null {
    let rawId = this._makeDictId(id);
    let item = this._flatItemsDict[rawId];
    if (item) {
      return item;
    }
    return null;
  }

  filterItems(idFilter: any): ConcreteItem[] {
    let result: ConcreteItem[] = [];
    for (let item of this.allItems) {
      if (item.matchesFilter(idFilter)) {
        result.push(item);
      }
    }
    return result;
  }

  _makeDictId(id: ItemId): string {
    if (_.isString(id)) {
      return id;
    }
    return _.stableStringify(id);
  }

  onChanged(cb: any) {
    return this._changeEvent.on(cb);
  }

  extractCapacity() {
    let cap = [];
    for (let groupKey of _.keys(this._itemsKindDict)) {
      cap.push({
        name: groupKey,
        count: _.keys(this._itemsKindDict[groupKey]).length,
      });
    }
    cap = _.orderBy(cap, ["count", "name"], ["desc", "asc"]);
    return cap;
  }

  debugOutputCapacity() {
    this.logger.info("[concreteRegistry] >>>>>>>");
    this.logger.info(
      "[concreteRegistry] Total Count: %s",
      _.keys(this._flatItemsDict).length
    );

    const counters = this.extractCapacity();
    for (let x of counters) {
      this.logger.info("[concreteRegistry] %s :: %s", x.name, x.count);
    }

    this.logger.info("[concreteRegistry] <<<<<<<");

    this._context.worldvious.acceptCounters(counters);
  }

  debugOutputToFile() {
    let writer = this.logger.outputStream("dump-concrete-registry");
    if (!writer) {
      return Promise.resolve();
    }

    this.logger.info("[debugOutputToFile] BEGIN");

    let ids = _.keys(this._flatItemsDict);
    ids.sort();
    for (let id of ids) {
      writer.write("-) " + id);
      let item = this._flatItemsDict[id];
      item.debugOutputToFile(writer);
      writer.newLine();
    }

    writer.newLine();
    writer.newLine();
    writer.write("******************************************");
    writer.write("******************************************");
    writer.write("******************************************");
    writer.newLine();
    writer.newLine();

    return Promise.resolve(writer.close()).then(() => {
      this.logger.info("[debugOutputToFile] END");
    });
  }

  dump() {
    let result: Record<any, any> = {};
    let ids = _.keys(this._flatItemsDict);
    ids.sort();
    for (let id of ids) {
      let item = this._flatItemsDict[id];
      result[id] = item.dump();
    }
    return result;
  }
}
