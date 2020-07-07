const _ = require('the-lodash');
const crypto = require('crypto');

class Snapshot
{
    constructor(date)
    {
        this._date = date;
        this._items = {};
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

    hasKey(id) {
        if (this._items[id]) {
            return true;
        }
        return false;
    }

    getById(id) {
        var item = this._items[id];
        if (item) {
            return item;
        }
        return null;
    }

    setDate(date) {
        this._date = date;
    }
    
    addItem(item)
    {
        var hash = this._makeHash(item);
        this._items[hash] = item;
    }

    extractSnapshot()
    {
        return this.keys.map(x => ({
            hash: x,
            data: this._items[x]
        }))
    }

    extractDiff(snapshot)
    {
        var result = [];

        for(var newKey of this.keys)
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

        for(var oldKey of snapshot.keys)
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

    _makeHash(item)
    {
        var str = _.stableStringify(item);

        const sha256 = crypto.createHash('sha256');
        sha256.update(str);
        var value = sha256.digest('hex');
        return value;
    }

}

module.exports = Snapshot;