import _ from 'the-lodash';
import { ILogger } from 'the-logger';

import { Context } from '../../../context';

import { LogicProcessor } from '../';

import { LogicScope } from "../../scope";
import { InfraScope } from '../../scope/infra';
import { NamespaceScope } from '../../scope/namespace';
import { AppScope } from '../../scope/app';

import { Helpers } from '../../helpers';
import { LogicItem } from '../../item';

import { LogicParserInfo } from './builder'

import { AlertInfo } from '../types';

export interface CreateItemParams
{
    kind? : string | ((item: LogicItem) => string),
    order? : number
}

export interface LogicProcessorHandlerArgs
{
    readonly logger : ILogger;
    readonly context : Context;
    readonly scope : LogicScope;
    readonly item : LogicItem;
    readonly infraScope : InfraScope;
    readonly helpers : Helpers;
    readonly namespaceScope : NamespaceScope;
    readonly namespaceName : string;
    readonly app : LogicItem;
    readonly appScope : AppScope;
    readonly appName : string;

    hasCreatedItems() : boolean;
    createItem(parent : LogicItem, name : string, params? : CreateItemParams) : LogicItem;
    createAlert(kind : string, severity : string, msg : string) : void;
}

export interface LogicProcessorVariableArgs
{
    namespaceName? : string | null;
    namespaceScope? : NamespaceScope | null;

    appName? : string | null;
    appScope?: AppScope | null;
    app?: LogicItem | null;
}


export interface LogicProcessorRuntimeData
{
    createdItems : LogicItem[];
    createdAlerts : AlertInfo[];
}

export function constructArgs(
    processor : LogicProcessor,
    parserInfo : LogicParserInfo,
    scope : LogicScope,
    item: LogicItem,
    variableArgs : LogicProcessorVariableArgs,
    runtimeData : LogicProcessorRuntimeData) : LogicProcessorHandlerArgs
{

    let createItem = (parent : LogicItem, name : string, params? : CreateItemParams) =>
        {
            let kindX : string | ((item: LogicItem) => string) | undefined = parserInfo.kind;
            if (params)
            {
                if (params.kind) {
                    kindX = params.kind;
                }
            }

            let kind : string;
            if (_.isFunction(kindX)) {
                kind = kindX(item);
            } else {
                kind = kindX!;
            }

            if (!kind) {
                throw new Error("Missing handler or params kind.")
            }

            let newObj = parent.fetchByNaming(kind!, name);
            if (params && params.order) {
                newObj.order = params.order;
            }

            runtimeData.createdItems.push(newObj);
            return newObj;
        };


    return {

        logger: processor.logger,
    
        context: processor.context,
    
        scope: scope,
    
        item: item,
    
        infraScope: scope.getInfraScope(),
    
        helpers: processor.helpers,
    
        namespaceScope: variableArgs.namespaceScope!,
    
        namespaceName: variableArgs.namespaceName!,
    
        app: variableArgs.app!,
    
        appScope: variableArgs.appScope!,
    
        appName: variableArgs.appName!,

        hasCreatedItems : () => 
        {
            return runtimeData.createdItems.length > 0;
        },

        createItem : createItem,

        createAlert : (kind : string, severity : string, msg : string) => 
        {
            runtimeData.createdAlerts.push({
                kind,
                severity,
                msg
            });
        }

    }
}