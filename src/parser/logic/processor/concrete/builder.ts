import _ from 'the-lodash';
import { ConcreteItem } from '../../../concrete/item';

import { BaseParserInfo, BaseParserBuilder } from '../base/builder';

import { ConcreteProcessorHandlerArgs } from './handler-args';

export interface ConcreteParserInfo extends BaseParserInfo
{
    target: null | ConcreteTarget;

    needAppScope?: boolean;
    canCreateAppIfMissing? : boolean;
    appNameCb?: (item : ConcreteItem) => string;

    kind?: string | ((item: ConcreteItem) => string);

    needNamespaceScope?: boolean;
    namespaceNameCb? : (item : ConcreteItem) => string;

    handler? : (args : ConcreteProcessorHandlerArgs) => void;
}

interface ConcreteTarget {
    api: string,
    kind: string
}

export function ConcreteParser() : ConcreteParserBuilder
{
    return new ConcreteParserBuilder();
}

export class ConcreteParserBuilder implements BaseParserBuilder
{
    private _data : ConcreteParserInfo = {
        targetKind: 'concrete',
        order: 0,
        target: null
    };

    private _targets : (ConcreteTarget | null)[] = [];

    constructor()
    {
    }

    target(value : null | ConcreteTarget)
    {
        this._targets.push(value);
        return this;
    }

    order(value : number) : ConcreteParserBuilder
    {
        this._data.order = value;
        return this;
    }

    needAppScope(value : boolean) : ConcreteParserBuilder
    {
        this._data.needAppScope = value;
        return this;
    }

    canCreateAppIfMissing(value : boolean) : ConcreteParserBuilder
    {
        this._data.canCreateAppIfMissing = value;
        return this;
    }

    appNameCb(value : (item : ConcreteItem) => string) : ConcreteParserBuilder
    {
        this._data.appNameCb = value;
        return this;
    }

    kind(value : string | ((item: ConcreteItem) => string)) : ConcreteParserBuilder
    {
        this._data.kind = value;
        return this;
    }

    needNamespaceScope(value : boolean) : ConcreteParserBuilder
    {
        this._data.needNamespaceScope = value;
        return this;
    }

    namespaceNameCb(value : (item : ConcreteItem) => string) : ConcreteParserBuilder
    {
        this._data.namespaceNameCb = value;
        return this;
    }

    handler(value : (args : ConcreteProcessorHandlerArgs) => void)
    {
        this._data.handler = value;
        return this;
    }

    _extract() : ConcreteParserInfo[]
    {
        return this._targets.map(target => {
            let data = _.clone(this._data);
            data.target = target;
            return data;
        });
    }
}
