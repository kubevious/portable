/*** UNDER NO CIRCUMSTANCES DO NOT EDIT THIS FILE. THIS FILE IS COPIED ***/ 
/*** FROM OSS UI. ANY CHANGES TO BE MADE IN KUBEVIOUS OSS UI. ***/ 
 
 const _ = require('the-lodash');
const ItemsScope = require('./items');
const AppScope = require('./app');

class NamespaceScope
{
    constructor(parent, name)
    {
        this._parent = parent;
        this._logger = parent.logger;
        this._name = name;

        this._item = this._parent.root.fetchByNaming("ns", name);

        this._appScopes = {};

        this._items = new ItemsScope(this);

        this.appLabels = [];
        this.appControllers = {};
        this.appOwners = {};
    }

    get logger() {
        return this._logger;
    }

    get name() {
        return this._name;
    }

    get item() {
        return this._item;
    }

    get items() {
        return this._items;
    }

    get appScopes() {
        return _.values(this._appScopes);
    }

    get appCount() {
        return this.appScopes.length;
    }

    getAppAndScope(name, createIfMissing)
    {
        var appScope = this._appScopes[name];
        if (!appScope)
        {
            if (!createIfMissing)
            {
                return null;
            }
        }

        var appScope = new AppScope(this, name);
        this._appScopes[name] = appScope;
        return appScope;
    }

    registerAppOwner(owner)
    {
        if (!this.appOwners[owner.config.kind]) {
            this.appOwners[owner.config.kind] = {};
        }
        if (!this.appOwners[owner.config.kind][owner.config.metadata.name]) {
            this.appOwners[owner.config.kind][owner.config.metadata.name] = [];
        }
        this.appOwners[owner.config.kind][owner.config.metadata.name].push(owner);
    }

    getAppOwners(kind, name)
    {
        if (!this.appOwners[kind]) {
            return []
        }
        if (!this.appOwners[kind][name]) {
            return []
        }
        return this.appOwners[kind][name];
    }

    findAppScopesByLabels(selector)
    {
        var result = [];
        for(var appLabelInfo of this.appLabels)
        {
            if (labelsMatch(appLabelInfo.labels, selector))
            {
                result.push(appLabelInfo.appScope);
            }
        }
        return result;
    }
}

function labelsMatch(labels, selector)
{
    for(var key of _.keys(selector)) {
        if (selector[key] != labels[key]) {
            return false;
        }
    }
    return true;
}

module.exports = NamespaceScope;