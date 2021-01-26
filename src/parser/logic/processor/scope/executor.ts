import _ from 'the-lodash';
import { ILogger } from 'the-logger';

import { Context } from '../../../context';

import { LogicProcessor } from '../';

import { LogicScope } from "../../scope";

import { ScopeParserInfo } from './builder'
import { ConcreteItem } from '../../../concrete/item';

import { constructArgs, ScopeProcessorHandlerArgs, ScopeProcessorVariableArgs, ScopeProcessorRuntimeData } from './handler-args';

import { BaseParserExecutor } from '../base/executor';
import { ItemScope } from '../../scope/item';
import { NamespaceScope } from '../../scope/namespace';

export class ScopeParserExecutor implements BaseParserExecutor
{
    private _context : Context;
    private _processor : LogicProcessor;
    private _logger : ILogger;
    public path : string;

    private _parserInfo : ScopeParserInfo;

    constructor(processor : LogicProcessor, path : string, parserInfo : ScopeParserInfo)
    {
        this.path = path;
        this._processor = processor;
        this._logger = processor.logger;
        this._context = processor.context;
        this._parserInfo = parserInfo;
    }

    get name() : string {
        return this.path;
    }

    get order() : number {
        return this._parserInfo.order;
    }

    get targetInfo() : string {
        if (!this._parserInfo.target) {
            return '';
        }
        return _.stableStringify(this._parserInfo.target);
    }

    execute(scope : LogicScope)
    {
        let targets : {
            id: string,
            itemScope: ItemScope,
            namespaceScope: NamespaceScope | null
        }[] = [];

        let targetInfo = this._parserInfo.target!;
        if (targetInfo.namespaced) {
            let namespaces = scope.getNamespaceScopes();
            for(let namespaceScope of namespaces)
            {
                for(let itemScope of namespaceScope.items.getAll(targetInfo.scopeKind))
                {
                    targets.push({
                        id: 'scope-item-' + itemScope.kind + '-' + itemScope.name,
                        itemScope: itemScope,
                        namespaceScope: namespaceScope 
                    })
                }
            }
        } else {
            for(let itemScope of scope.getInfraScope().items.getAll(targetInfo.scopeKind))
            {
                targets.push({
                    id: 'scope-item-' + itemScope.kind + '-' + itemScope.name,
                    itemScope: itemScope,
                    namespaceScope: null 
                })
            }
        }

        for(var target of targets)
        {
            this._processHandler(scope, target.id, target.itemScope, target.namespaceScope);
        }
    }

    _processHandler(scope : LogicScope, id: string, itemScope: ItemScope, namespaceScope: NamespaceScope | null)
    {
        this._logger.silly("[_processHandler] ConcreteHandler: %s, Item: %s", 
            this.path, 
            id);

        let variableArgs : ScopeProcessorVariableArgs =
        {
        };

        let runtimeData : ScopeProcessorRuntimeData = {
            createdItems : [],
            createdAlerts : []
        };

        try
        {
            let handlerArgs = constructArgs(
                this._processor,
                this._parserInfo,
                scope,
                itemScope,
                namespaceScope,
                variableArgs,
                runtimeData);

            this._parserInfo.handler!(handlerArgs);

            this._postProcessHandler(runtimeData);
        }
        catch(reason)
        {
            this._logger.error("Error in %s parser. ", this.path, reason);
        }

    }

    private _postProcessHandler(runtimeData : ScopeProcessorRuntimeData)
    {

        for(var alertInfo of runtimeData.createdAlerts)
        {
            for(var createdItem of runtimeData.createdItems)
            {
                createdItem.addAlert(
                    alertInfo.kind, 
                    alertInfo.severity, 
                    alertInfo.msg);
            }
        }

    }

}
