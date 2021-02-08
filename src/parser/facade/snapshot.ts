import { SnapshotItemInfo } from "@kubevious/helpers/dist/snapshot/types";
import _ from "the-lodash";
import { LogicItem } from "../logic/item";

export class Snapshot {
  _date: Date;
  _items: SnapshotItemInfo[];
  constructor(date: Date) {
    this._date = date;
    this._items = [];
  }

  get date() {
    return this._date;
  }

  get count() {
    return this._items.length;
  }

  get items() {
    return this._items;
  }

  addItem(item: any) {
    this._items.push(item);
  }
}
