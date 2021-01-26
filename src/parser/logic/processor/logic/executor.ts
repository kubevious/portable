import _ from 'the-lodash';
import { ILogger } from 'the-logger';

import { Context } from '../../../context';

import { LogicProcessor } from '../';

import { LogicScope } from "../../scope";

import { LogicParserInfo } from './builder'

import { BaseParserExecutor } from '../base/executor';
import { LogicItem } from '../../item';
import { constructArgs, LogicProcessorHandlerArgs, LogicProcessorRuntimeData, LogicProcessorVariableArgs } from './handler-args';

export class LogicParserExecutor implements BaseParserExecutor
{
    private _context : Context;
    private _processor : LogicProcessor;
    private _logger : ILogger;
    public path : string;

    private _parserInfo : LogicParserInfo;

    constructor(processor : LogicProcessor, path : string, parserInfo : LogicParserInfo)
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
        const path = _.clone(this._parserInfo.target!.path);
        const items = this._extractTreeItems(scope, path);

        for(var item of items)
        {
            this._processHandler(scope, item);
        }
    }

    _processHandler(scope : LogicScope, item: LogicItem)
    {
        this._logger.silly("[_processHandler] LogicHandler: %s, Item: %s", 
            this.path, 
            item.dn);

        let variableArgs : LogicProcessorVariableArgs =
        {
        };

        let runtimeData : LogicProcessorRuntimeData = {
            createdItems : [],
            createdAlerts : []
        };

        try
        {
            this._preprocessHandler(scope, item, variableArgs);

            let handlerArgs = constructArgs(
                this._processor,
                this._parserInfo,
                scope,
                item,
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

    private _preprocessHandler(scope : LogicScope, item: LogicItem, variableArgs : LogicProcessorVariableArgs)
    {
        variableArgs.namespaceName = null;
        if (this._parserInfo.needNamespaceScope || this._parserInfo.needAppScope)
        {
            if (this._parserInfo.namespaceNameCb) {
                variableArgs.namespaceName = this._parserInfo.namespaceNameCb(item);
            } else {
                variableArgs.namespaceName = _.get(item.config, 'metadata.namespace');
            }
            if (_.isNotNullOrUndefined(variableArgs.namespaceName))
            {
                variableArgs.namespaceScope = scope.getNamespaceScope(variableArgs.namespaceName!);
            }
        }

        variableArgs.appName = null;
        if (this._parserInfo.appNameCb) {
            variableArgs.appName = this._parserInfo.appNameCb(item);
        }
        if (variableArgs.namespaceName && variableArgs.namespaceScope)
        {
            if (this._parserInfo.needAppScope && variableArgs.appName)
            {
                let appScope = variableArgs.namespaceScope.getAppAndScope(
                    variableArgs.appName!,
                    this._parserInfo.canCreateAppIfMissing!);

                if (appScope) {
                    variableArgs.appScope = appScope;
                    variableArgs.app = appScope.item;
                }
            }
        }
    }

    private _postProcessHandler(runtimeData : LogicProcessorRuntimeData)
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


    private _extractTreeItems(scope : LogicScope, path : string[]) : LogicItem[]
    {
        var items : LogicItem[] = [];
        this._visitTree(scope.root, 0, path, item => {
            items.push(item);
        });
        return items;
    }

    private _visitTree(item : LogicItem, index: number, path : string[], cb : (item : LogicItem) => void)
    {
        this._logger.silly("[_visitTree] %s, path: %s...", item.dn, path);

        if (index >= path.length)
        {
            cb(item);
        }
        else
        {
            var top = path[index];
            var children = item.getChildrenByKind(top);
            for(var child of children)
            {
                this._visitTree(child, index + 1, path, cb);
            }
        }
    }
}
