import { SnapshotItemInfo } from '@kubevious/helpers/dist/snapshot/types';
import _ from 'the-lodash';

import * as HashUtils from '@kubevious/helpers/dist/hash-utils';

export class Snapshot
{
    private _date : Date;
    private _items : Record<string, SnapshotItemInfo> = {};

    constructor(date : Date)
    {
        this._date = date;
    }

    get date() {
        return this._date;
    }

    get count() {
        return _.keys(this._items).length;
    }

    get keys() {
        return _.keys(this._items);
    }

    get items() {
        return _.values(this._items);
    }

    hasKey(id : string) {
        if (this._items[id]) {
            return true;
        }
        return false;
    }

    getById(id: string) : SnapshotItemInfo | null {
        let item = this._items[id];
        if (item) {
            return item;
        }
        return null;
    }

    setDate(date: Date) {
        this._date = date;
    }
    
    addItem(item: SnapshotItemInfo)
    {
        let hash = HashUtils.calculateObjectHashStr(item);
        this._items[hash] = item;
    }

    extractSnapshot()
    {
        return this.keys.map(x => ({
            hash: x,
            data: this._items[x]
        }))
    }

    extractDiff(snapshot : Snapshot)
    {
        let result = [];

        for(let newKey of this.keys)
        {
            if (!snapshot.hasKey(newKey))
            {
                result.push({
                    hash: newKey,
                    present: true,
                    data: this.getById(newKey)
                });
            }
        }

        for(let oldKey of snapshot.keys)
        {
            if (!this.hasKey(oldKey))
            {
                result.push({
                    hash: oldKey,
                    present: false
                });
            }
        }

        return result;
    }

}