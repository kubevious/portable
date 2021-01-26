import _ from 'the-lodash';
import { Promise } from 'the-promise';
import { ILogger } from 'the-logger' ;

import { Context } from '../context';

import { DataStore } from '@kubevious/easy-data-store';

import * as HashUtils from '@kubevious/helpers/dist/hash-utils'
import { RuleObject } from './types';

export class RuleAccessor
{
    private _logger : ILogger;
    private _dataStore : DataStore;

    constructor(context : Context, dataStore: DataStore)
    {
        this._logger = context.logger.sublogger("RuleAccessor");
        this._dataStore = dataStore;
    }

    get logger() {
        return this._logger;
    }

    queryAll()
    {
        return this._dataStore.table('rules')
            .queryMany();
    }

    queryEnabledRules() : Promise<RuleObject[]>
    {
        return <Promise<RuleObject[]>>(<any>(this._dataStore.table('rules')
            .queryMany({ enabled: true })));
    }

    queryAllRuleStatuses()
    {
        return this._dataStore.table('rule_statuses')
            .queryMany();
    }

    queryAllRuleItems()
    {
        return this._dataStore.table('rule_items')
            .queryMany();
    }

    queryAllRuleLogs()
    {
        return this._dataStore.table('rule_logs')
            .queryMany();
    }

    getRule(name: string)
    {
        return this._dataStore.table('rules')
            .querySingle({ name: name });
    }

    createRule(config: any, target: any)
    {
        return Promise.resolve()
            .then((() => {
                if (target) {
                    if (config.name != target.name) {
                        return this._dataStore.table('rules')
                            .delete(target);
                    }
                }
            }))
            .then(() => {
                var ruleObj = this.makeDbRule(config);
                return this._dataStore.table('rules')
                    .createOrUpdate(ruleObj);
            });
    }

    deleteRule(name: string)
    {
        return this._dataStore.table('rules')
            .delete({ name: name });
    }

    exportRules()
    {
        return this.queryAll()
            .then(result => {
                return {
                    kind: 'rules',
                    items: result.map(x => ({
                        name: x.name,
                        script: x.script,
                        target: x.target,
                        enabled: x.enabled,
                    })),
                };
            });
    }

    importRules(rules: { items: any[]}, deleteExtra: boolean)
    {
        var items = rules.items.map(x => this.makeDbRule(x));
        return this._dataStore.table('rules')
            .synchronizer(null, !deleteExtra)
            .execute(items);
    }

    makeDbRule(rule: any)
    {
        var ruleObj : any = {
            name: rule.name,
            enabled: rule.enabled,
            target: rule.target,
            script: rule.script,
            date: new Date()
        }
        var hash = HashUtils.calculateObjectHash(ruleObj);
        ruleObj.hash = hash;
        return ruleObj;
    }

}