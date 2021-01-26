import _ from 'the-lodash';
import { Promise } from 'the-promise';
import { ILogger } from 'the-logger' ;

import { Context } from '../context';

import { ExecutionContext } from './execution-context';

export type UserRule = Record<string, any>;

export type RuleStatus = Record<string, any>;
export type RuleResult = Record<string, any>;

export class RuleCache
{
    private _logger : ILogger;
    private _context : Context;

    private _userRules : any[] = [];
    private _ruleConfigDict : Record<string, any> = {};

    private _listRuleStatuses : any[] = [];
    private _ruleExecResultDict : Record<string, any> = {};
    private _ruleResultsDict : Record<string, any> = {};

    constructor(context : Context)
    {
        this._context = context;
        this._logger = context.logger.sublogger("RuleCache");

        context.database.onConnect(this._onDbConnected.bind(this));
    }

    get logger() {
        return this._logger;
    }

    private _onDbConnected()
    {
        this._logger.info("[_onDbConnected] ...");

        return Promise.resolve()
            .then(() => this._refreshRuleConfigs())
            .then(() => this._refreshExecutionStatuses())
            .then(() => this._recalculateRuleList())
            .then(() => this._notifyRuleResults())
    }

    triggerListUpdate()
    {
        return Promise.resolve()
            .then(() => this._refreshRuleConfigs())
            .then(() => this._recalculateRuleList())
            .then(() => this._notifyRuleResults())
    }

    private _refreshRuleConfigs()
    {
        return this._context.ruleAccessor.queryAll()
            .then(result => {
                this._ruleConfigDict = _.makeDict(result, x => x.name, x => x);
            })
            ;
    }

    private _recalculateRuleList()
    {
        this._userRules = this._buildRuleList();
        this._listRuleStatuses = this._buildRuleStatusList();

        this._context.websocket.update({ kind: 'rules-statuses' }, this.queryRuleStatusList());
    }

    queryRuleList()
    {
        return this._userRules;
    }

    queryRuleStatusList()
    {
        return this._listRuleStatuses;
    }

    queryRule(name: string) : UserRule | null
    {
        var rule = this._ruleConfigDict[name];
        if (!rule) {
            return null;
        }
        var userRule = this._buildRuleConfig(rule);
        return userRule;
    }

    private _buildRuleList() : UserRule[]
    {
        var userRules : UserRule[] = [];
        for(var rule of _.values(this._ruleConfigDict))
        {
            var userRule = {
                name: rule.name
            }
            userRules.push(userRule);
        }
        userRules = _.orderBy(userRules, x => x.name);
        return userRules;
    }

    private _buildRuleStatusList() : RuleStatus[]
    {
        var userRules = [];
        for(var rule of _.values(this._ruleConfigDict))
        {
            var userRule = this._buildRuleStatus(rule.name);
            userRules.push(userRule);
        }

        userRules = _.orderBy(userRules, x => x.name);

        return userRules;
    }

    private _refreshExecutionStatuses()
    {
        let executionContext : ExecutionContext = {
            ruleStatuses: {},
            ruleItems: [],
            ruleLogs: [],
            markerItems: []
        }

        return Promise.all([
            this._context.ruleAccessor.queryAllRuleStatuses()
                .then(result => {
                    executionContext.ruleStatuses = _.makeDict(result, x => x.rule_id, x => x);
                }),
            this._context.ruleAccessor.queryAllRuleItems()
                .then(result => {
                    executionContext.ruleItems = result;
                }),
            this._context.ruleAccessor.queryAllRuleLogs()
                .then(result => {
                    executionContext.ruleLogs = result;
                })
        ])
        .then(() => this._acceptExecutionContext(executionContext));
    }

    acceptExecutionContext(executionContext: ExecutionContext)
    {
        this._acceptExecutionContext(executionContext);
        this._recalculateRuleList();
        this._notifyRuleResults();
    }

    private _acceptExecutionContext(executionContext: ExecutionContext)
    {
        this._ruleExecResultDict = {};

        for(var status of _.values(executionContext.ruleStatuses))
        {
            this._fetchRuleExecResult(status.rule_name).status = status;
            status.hash = status.hash.toString('hex');
            delete status.rule_name;
        }
        for(var item of executionContext.ruleItems)
        {
            this._fetchRuleExecResult(item.rule_name).items.push(item);
            delete item.rule_name;
        }
        for(var log of executionContext.ruleLogs)
        {
            this._fetchRuleExecResult(log.rule_name).logs.push(log);
            delete log.rule_name;
        }
    }

    private _notifyRuleResults()
    {
        this._ruleResultsDict = {};
        for(var ruleResult of _.values(this._ruleExecResultDict))
        {
            this._ruleResultsDict[ruleResult.name] = this._buildRuleResult(ruleResult.name);
        }

        var data = _.values(this._ruleResultsDict).map(x => ({
            target: { name: x.name },
            value: x
        }));

        return this._context.websocket.updateScope({ kind: 'rule-result' }, data);
    }

    getRuleResult(name: string)
    {
        if (this._ruleResultsDict[name]) {
            return this._ruleResultsDict[name];
        }
        return null;
    }

    private _fetchRuleExecResult(name: string)
    {
        if (!this._ruleExecResultDict[name]) {
            this._ruleExecResultDict[name] = {
                name: name,
                status: null,
                items: [],
                logs: []
            }
        }
        return this._ruleExecResultDict[name];
    }

    private _buildRuleConfig(rule: any) : UserRule
    {
        var userRule = {
            name: rule.name,
            target: rule.target,
            script: rule.script,
            enabled: rule.enabled
        }
        return userRule;
    }

    private _buildRuleStatus(name: string) : RuleStatus
    {
        var info = this._buildRuleInfo(name);
        delete info.items;
        delete info.logs;
        return info;
    }

    private _buildRuleResult(name: string) : RuleResult
    {
        var info = this._buildRuleInfo(name);
        delete info.item_count;
        return info;
    }

    private _buildRuleInfo(name: string) : any
    {
        var info : any = {
            name: name,
            enabled: false,
            is_current: false,
            error_count: 0,
            item_count: 0,
            items: [],
            logs: []
        };

        var ruleConfig = this._ruleConfigDict[name];
        if (ruleConfig)
        {
            info.enabled = ruleConfig.enabled;
            if (ruleConfig.enabled)
            {
                var ruleExecResult = this._ruleExecResultDict[name];
                if (ruleExecResult)
                {
                    var status = ruleExecResult.status;
                    if (status)
                    {
                        if (ruleConfig.hash == status.hash) {
                            info.is_current = true;
                        }
                        info.error_count = status.error_count;
                        info.item_count = status.item_count;
                    }
    
                    info.items = ruleExecResult.items;
                    info.logs = ruleExecResult.logs;
                }
            }
            else
            {
                info.is_current = true;
            }
        }

        return info;
    }
}