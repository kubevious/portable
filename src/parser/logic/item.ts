import _ from 'the-lodash';

import { LogicScope } from './scope';
import { NamespaceScope } from './scope/namespace';
import { AppScope } from './scope/app';
import { ItemScope } from './scope/item';

import { PropertiesBuilder } from './properties-builder';

import { Helpers } from './helpers';
const helpers = new Helpers();

import * as DocsHelper from '@kubevious/helpers/dist/docs';

import { Alert, SnapshotNodeConfig, SnapshotPropsConfig } from '@kubevious/helpers/dist/snapshot/types'

import { DumpWriter } from 'the-logger';

export class LogicItem
{
    private _logicScope : LogicScope;
    private _parent : LogicItem | null = null;
    private _kind : string;
    private _naming : any;

    // private _itemScope? : ItemScope;
    // private _namespaceScope? : NamespaceScope;
    private _appScope? : AppScope;

    private _rn : any;
    private _config : Record<string, any> = {};
    private _order = 100;
    private _children : Record<string, LogicItem> = {};
    private _properties : Record<string, SnapshotPropsConfig> = {};
    private _alerts : Record<string, Alert> = {};
    private _flags : Record<string, any> = {};
    private _usedBy : Record<string, any> = {};
    private _dn : string;

    private _namingArray : string[] = [];

    constructor(logicScope: LogicScope, parent: LogicItem | null, kind: any, naming: any)
    {
        this._logicScope = logicScope;
        this._kind = kind;
        this._naming = naming;
        this._rn = LogicItem._makeRn(kind, naming);

        if (parent) {
            this._parent = parent;
            this._parent._children[this.rn] = this;
            
            this._dn = this._parent.dn + '/' + this.rn;

            this._namingArray = _.clone(this._parent.namingArray);
            this._namingArray.push(this.naming);
        } else {
            this._parent = null;
            
            this._dn = this.rn;

            this._namingArray = [this.naming];
        }
 
        this._logicScope._acceptItem(this);
    }

    get kind() {
        return this._kind;
    }

    get prettyKind() {
        return DocsHelper.prettyKind(this.kind);
    }

    get naming() {
        return this._naming;
    }

    get namingArray() {
        return this._namingArray;
    }
    
    get rn() {
        return this._rn;
    }
    
    get config() {
        return this._config;
    }

    get flags() {
        return this._flags;
    }

    get parent() : LogicItem | null {
        return this._parent;
    }

    get dn() {
        return this._dn;
    }

    get id() {
        return this.dn;
    }

    get order() {
        return this._order;
    }

    set order(value) {
        this._order = value;
    }

    // get scope() : ItemScope {
    //     return this._itemScope!;
    // }

    get appScope() : AppScope {
        return this._appScope!;
    }

    // get namespaceScope() : NamespaceScope {
    //     return this._namespaceScope!;
    // }

    // associateScope(scope: ItemScope) {
    //     this._itemScope = scope;
    // }

    // associateNamespaceScope(scope: NamespaceScope) {
    //     this._namespaceScope = scope;
    // }

    associateAppScope(scope: AppScope) {
        this._appScope = scope;
    }

    setPropagatableFlag(name: string)
    {
        return this.setFlag(name, { propagatable: true });
    }

    setFlag(name: string, params?: any)
    {
        if (params) {
            params = _.clone(params);
        } else {
            params = {}
        }
        params.name = name;
        this._flags[name] = params;
    }

    hasFlag(name: string)
    {
        if (this._flags[name])
            return true;
        return false;
    }

    getFlags()
    {
        return _.values(this._flags);
    }

    setUsedBy(dn: string)
    {
        this._usedBy[dn] = true;
    }

    setConfig(value: any) 
    {
        this._config = value;
    }    

    getChildren() : LogicItem[] {
        return _.values(this._children);
    }

    getChildrenByKind(kind: string) : LogicItem[] {
        return _.values(this._children).filter(x => x.kind == kind);
    }

    remove() {
        if (!this._parent) {
            return;
        }
        this._logicScope._dropItem(this);
        delete this._parent._children[this.rn];
        this._parent = null;
    }

    findByNaming(kind: string, naming: any)
    {
        var rn = LogicItem._makeRn(kind, naming);
        return this.findByRn(rn);
    }

    findByRn(rn: string)
    {
        var child = this._children[rn];
        if (child) {
            return child;
        }
        return null;
    }

    fetchByNaming(kind: string, naming: any) : LogicItem
    {
        var rn = LogicItem._makeRn(kind, naming);
        var child = this._children[rn];
        if (child) {
            return child;
        }
        child = new LogicItem(this._logicScope, this, kind, naming);
        return child;
    }

    addProperties(params: any)
    {
        if (!params) {
            params.order = 10;
        }
        this._properties[params.id] = params;
    }

    getProperties(id: string)
    {
        if (this._properties[id]) {
            return this._properties[id];
        }
        return null;
    }

    buildProperties()
    {
        var builder = new PropertiesBuilder(this.config, (props: Record<string, any>) => {
            this.addProperties({
                kind: "key-value",
                id: "properties",
                title: "Properties",
                order: 5,
                config: props
            });
            return props;
        });
        return builder;
    }

    addAlert(kind: string, severity: string, msg: string)
    {
        var info : Alert = {
            id: kind,
            severity: severity,
            msg: msg
        }
        var key = _.stableStringify(info);
        this._alerts[key] = info;
    }

    cloneAlertsFrom(other: LogicItem)
    {
        for(var x of _.values(other._alerts)) {
            this._alerts[x.id] = x;
        }
    }

    extractProperties() : SnapshotPropsConfig[] {
        var myProps = _.values(this._properties);

        // if (_.keys(this._flags).length > 0) {
        //     myProps.push({
        //         kind: "key-value",
        //         id: "flags",
        //         title: "Flags",
        //         order: 1,
        //         config: this._flags
        //     });   
        // }

        if (_.keys(this._usedBy).length > 0) {
            myProps.push({
                kind: "dn-list",
                id: "shared-with",
                title: "Shared With",
                order: 5,
                config: _.keys(this._usedBy)
            });   
        }

        // for (var i = 0; i < myProps.length; i++)
        // {
        //     var props = myProps[i];
        //     props = _.clone(props);

        //     if (props.kind == "resources")
        //     {
        //         props.kind = "key-value";

        //         var config = props.config;
        //         props.config = {};
        //         for(var metric of _.keys(config))
        //         {
        //             for(var metricKind of _.keys(config[metric]))
        //             {
        //                 var value = config[metric][metricKind];
        //                 props.config[metric + ' ' + metricKind] = helpers.resources.stringify(metric, value);
        //             }
        //         }
        //     } 
            
        //     if (props.kind == "percentage")
        //     {
        //         props.kind = "key-value";

        //         var config = props.config;
        //         props.config = {};
        //         for(var key of _.keys(config))
        //         {
        //             var value = config[key];
        //             props.config[key] = helpers.resources.percentage(value);
        //         }
        //     }

        //     myProps[i] = props;
        // }

        myProps = _.deepClean(myProps);

        return myProps;
    }

    extractAlerts() : Alert[] {
        var alerts = _.values(this._alerts);
        alerts = _.deepClean(alerts);
        return alerts;
    }

    debugOutputToFile(writer : DumpWriter, options? : any)
    {
        writer.write('-) ' + this.dn);
       
        writer.indent();

        writer.write('Order: ' + this.order);
        // writer.write('RN: ' + this.rn);
     
        if (options && options.includeConfig) {
            if (this.config && (_.keys(this.config).length > 0))
            {
                writer.write('Config:');
                writer.indent();
                writer.write(this.config);
                writer.unindent();
            }
        }

        writer.unindent();

        for(var child of this.getChildren())
        {
            child.debugOutputToFile(writer, options);
        }
    }

    exportNode() : SnapshotNodeConfig
    {
        let node = {
            rn: this.rn,
            name: this.naming,
            kind: this.kind,
            order: this.order,
            flags: this._flags
        };
        return _.deepClean(node);
    }

    static constructTop(scope: LogicScope) : LogicItem {
        return new LogicItem(scope, null, "root", null);
    }

    static _makeRn(kind: string, naming: any) {
        if (naming && naming.length > 0)  {
            return kind + '-[' + naming + ']'; 
        }
        return kind;
    }
}

