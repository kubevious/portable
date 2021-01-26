import _ from 'the-lodash';
import { Promise } from 'the-promise';
import { ILogger } from 'the-logger';

import { Context } from '../../context';

import { readdirSync } from 'fs' 
import * as path from 'path' 

import { LogicScope } from "../scope";

import { Helpers } from '../helpers';
import { LogicItem } from '../item';

import { BaseParserBuilder } from './base/builder'
import { ConcreteParserInfo } from './concrete/builder'
import { LogicParserInfo } from './logic/builder'
import { ScopeParserInfo } from './scope/builder';

import { BaseParserExecutor } from './base/executor';
import { ConcreteParserExecutor } from './concrete/executor';
import { LogicParserExecutor } from './logic/executor';
import { ScopeParserExecutor } from './scope/executor';


export class LogicProcessor 
{
    private _context : Context;
    private _logger : ILogger;

    private _helpers : Helpers = new Helpers();
    private _processors : BaseParserExecutor[] = [];

    constructor(context : Context)
    {
        this._context = context;
        this._logger = context.logger.sublogger("LogicProcessor");

        this._extractProcessors('parsers');
        this._extractProcessors('polishers');
    }

    get logger() {
        return this._logger;
    }

    get context() {
        return this._context;
    }

    get helpers() : Helpers {
        return this._helpers;
    }

    private _extractProcessors(location : string)
    {
        this.logger.info('[_extractProcessors] location: %s', location);
        let searchPath = path.resolve(__dirname, '..', location);
        this.logger.debug('[_extractProcessors] search path: %s', searchPath);
        let files : string[] = readdirSync(searchPath);
        files = _.filter(files, x => x.endsWith('.d.ts'));

        let processors : BaseParserExecutor[] = [];

        for(var fileName of files)
        {
            this.logger.debug('[_extractProcessors] %s', fileName);
            let moduleName = fileName.replace('.d.ts', '');
            this._loadProcessor(moduleName, location, processors);
        }

        processors = _.orderBy(processors, [
            x => x.order,
            x => x.name,
            x => x.targetInfo
        ]);

        for(var processor of processors)
        {
            this._logger.info("[_extractProcessors] HANDLER: %s -> %s, target:", 
                processor.order, 
                processor.name);

            this._processors.push(processor);
        }

    }

    private _loadProcessor(name : string, location : string, processors : BaseParserExecutor[])
    {
        this.logger.info('[_loadProcessor] %s...', name);

        const moduleName = location + '/' + name;
        const modulePath = '../' + moduleName;
        const parserModule = require(modulePath);

        let defaultExport = parserModule.default;
        if (!defaultExport) {
            this.logger.error("Invalid Parser: %s", modulePath);
            throw new Error("Invalid Parser: " + modulePath);
            return;
        }

        let baseParserBuilder = <BaseParserBuilder>defaultExport;
        let baseParserInfos = baseParserBuilder._extract();

        for (let baseParserInfo of baseParserInfos)
        {
            if (baseParserInfo.targetKind == 'concrete')
            {
                let parserInfo = <ConcreteParserInfo>baseParserInfo;
                let parserExecutor = new ConcreteParserExecutor(
                    this,
                    moduleName,
                    parserInfo)
                processors.push(parserExecutor);
            }
            else if (baseParserInfo.targetKind == 'logic')
            {
                let parserInfo = <LogicParserInfo>baseParserInfo;
                let parserExecutor = new LogicParserExecutor(
                    this,
                    moduleName,
                    parserInfo)
                processors.push(parserExecutor);
            }
            else if (baseParserInfo.targetKind == 'scope')
            {
                let parserInfo = <ScopeParserInfo>baseParserInfo;
                let parserExecutor = new ScopeParserExecutor(
                    this,
                    moduleName,
                    parserInfo)
                processors.push(parserExecutor);
            }
        }
    }

    process()
    {
        return this._context.tracker.scope("Logic::process", (tracker : any) => {

            var scope = new LogicScope(this._context);

            return Promise.resolve()
                .then(() => this._runLogic(scope, tracker))
                .then(() => this._report(scope, tracker))
                .then(() => this._dumpToFile(scope))

        })
        .catch((reason : any) => {
            this._logger.error("[process] ", reason);
        });
    }

    private _runLogic(scope : LogicScope, tracker : any)
    {
        return tracker.scope("runLogic", () => {
            this._context.concreteRegistry.debugOutputCapacity();

            this._processParsers(scope);
            this._finalizeScope(scope);
            this._propagete(scope);

            scope.debugOutputCapacity();
        })
    }

    _report(scope : LogicScope, tracker : any)
    {
        return tracker.scope("report", () => {
            return this._context.facadeRegistry.acceptLogicItems(scope.extractItems());
        });
    }

    private _processParsers(scope : LogicScope)
    {
        for(var handlerInfo of this._processors)
        {
            this._processParser(scope, handlerInfo);
        }
    }

    private _processParser(scope: LogicScope, handlerInfo : BaseParserExecutor)
    {
        this._logger.debug("[_processParser] Handler: %s -> %s, target: %s :: ", 
            handlerInfo.order,
            handlerInfo.name);

        handlerInfo.execute(scope);

    //     } else if (handlerInfo.targetKind == 'scope') {
    //         if (handlerInfo.target.namespaced) {
    //             var items = scope.getNamespaceScopes();
    //             if (handlerInfo.target.scopeKind) {
    //                 items = _.flatten(items.map(x => x.items.getAll(handlerInfo.target.scopeKind)))
    //                 targets = items.map(x => ({ id: 'scope-item-' + x.kind + '-' + x.name, itemScope: x, item: x }));
    //             } else {
    //                 targets = items.map(x => ({ id: 'scope-ns-' + x.name, namespaceScope: x, item: x }));
    //             }
    //         } else {
    //             var items = scope.getInfraScope().items.getAll(handlerInfo.target.scopeKind);
    //             targets = items.map(x => ({ id: 'scope-item-' + x.kind + '-' + x.name, itemScope: x, item: x }));
    //         }
    //     }
    }

    private _finalizeScope(scope : LogicScope)
    {
        scope.getInfraScope().items.finalize();
        for(var nsScope of scope.getNamespaceScopes())
        {
            nsScope.items.finalize();
        }
    }

    _propagete(scope : LogicScope)
    {
        this._traverseTreeBottomsUp(scope, this._propagateFlags.bind(this));
    }

    _propagateFlags(node : LogicItem)
    {
        this.logger.silly("[_propagateFlags] %s...", node.dn)

        if (!node.parent) {
            return;
        }

        for(var flagInfo of node.getFlags())
        {
            if (flagInfo.propagatable)
            {
                node.parent.setFlag(flagInfo.name, flagInfo);
            }
        }
    }

    _traverseTree(scope : LogicScope, cb : (item : LogicItem) => void)
    {
        let col : LogicItem[] = [scope.root];
        while (col.length)
        {
            let node = col.shift()!;
            cb(node);
            col.unshift(...node.getChildren());
        }
    }

    _traverseTreeBottomsUp(scope : LogicScope, cb : (item : LogicItem) => void)
    {
        let col : LogicItem[] = [];
        this._traverseTree(scope, x => {
            col.push(x);
        })

        for(var i = col.length - 1; i >= 0; i--)
        {
            let node = col[i];
            cb(node);
        }
    }

    _dumpToFile(scope : LogicScope)
    {
        return Promise.resolve()
            .then(() => {
                let writer = this.logger.outputStream("dump-logic-tree");
                if (writer) {
                    scope.root.debugOutputToFile(writer);
                    return writer.close();
                }
            })
            .then(() => {
                var writer = this.logger.outputStream("dump-logic-tree-detailed");
                if (writer) {
                    scope.root.debugOutputToFile(writer, { includeConfig: true });
                    return writer.close();
                }
            })
            // .then(() => {
            //     var writer = this.logger.outputStream("exported-tree");
            //     if (writer) {
            //         writer.write(this._context.facadeRegistry.logicTree);
            //         return writer.close();
            //     }
            // });
    }

}

