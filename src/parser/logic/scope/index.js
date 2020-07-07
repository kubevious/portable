const _ = require('the-lodash');
const InfraScope = require('./infra');
const NamespaceScope = require('./namespace');
const LogicItem = require('../item');

class LogicScope
{
    constructor(context)
    {
        this._context = context;
        this._logger = context.logger.sublogger("LogicScope");

        this._itemMap = {}
        this._root = LogicItem.constructTop(this);

        this._namespaceScopes = {};
        this._infraScope = new InfraScope(this);
    }

    get logger() {
        return this._logger;
    }

    get concreteRegistry() {
        return this._context.concreteRegistry;
    }

    get root() {
        return this._root;
    }

    _acceptItem(item) 
    {
        this._itemMap[item.dn] = item;
    }

    _dropItem(item) 
    {
        delete this._itemMap[item.dn];
    }

    extractItems() {
        return _.values(this._itemMap);
    }

    findItem(dn)
    {
        var item = this._itemMap[dn];
        if (!item) {
            item = null;
        }
        return item;
    }
    
    getInfraScope() {
        return this._infraScope;
    }

    getNamespaceScope(name) {
        if (!this._namespaceScopes[name]) {
            this._namespaceScopes[name] = new NamespaceScope(this, name);
        }
        return this._namespaceScopes[name];
    }

    getNamespaceScopes() {
        return _.values(this._namespaceScopes);
    }

    setK8sConfig(logicItem, config)
    {
        {
            logicItem.setConfig(config);
            logicItem.addProperties({
                kind: "yaml",
                id: "config",
                title: "Config",
                order: 10,
                config: config
            });
        }

        {
            var labels = _.get(config, 'metadata.labels');
            labels = this._normalizeDict(labels);
            logicItem.addProperties({
                kind: "key-value",
                id: "labels",
                title: "Labels",
                order: 8,
                config: labels
            });
        }

        {
            var annotations = _.get(config, 'metadata.annotations');
            annotations = this._normalizeDict(annotations);
            logicItem.addProperties({
                kind: "key-value",
                id: "annotations",
                title: "Annotations",
                order: 9,
                config: annotations
            });
        }
    }

    _normalizeDict(dict)
    {
        dict = dict || {};

        var res = {};
        for(var key of _.sortBy(_.keys(dict)))
        {
            res[key] = dict[key];
        }
        return res;
    }

    fetchInfraRawContainer()
    {
        var infra = this.root.fetchByNaming("infra", "Infrastructure");
        infra.order = 1000;
        return infra;
    }

    fetchRawContainer(item, name)
    {
        var nsName = item.config.metadata.namespace;
        return this.fetchNamespaceRawContainer(nsName, name)
    }

    fetchNamespaceRawContainer(nsName, name)
    {
        var namespace = this.root.fetchByNaming("ns", nsName);
        var rawContainer = namespace.fetchByNaming("raw", "Raw Configs");
        rawContainer.order = 1000;
        var container = rawContainer.fetchByNaming("raw", name);
        return container;
    }
    
    findAppItem(namespace, name)
    {
        return this._findItem([
            {
                kind: "ns",
                name: namespace
            },
            {
                kind: "app",
                name: name
            }
        ]);
    }

    _findItem(itemPath)
    {
        var item = this.root;
        for(var x of itemPath) {
            item = item.findByNaming(x.kind, x.name);
            if (!item) {
                return null;
            }
        }
        return item;
    }
}

module.exports = LogicScope;