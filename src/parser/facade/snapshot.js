const _ = require('the-lodash');

class Snapshot {
    constructor(date) {
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

    addItem(item) {
        this._items.push(item)
    }
}

module.exports = Snapshot;
