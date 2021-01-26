import _ from 'the-lodash';
import { Context } from '../context';
import { Router } from '@kubevious/helper-backend'
import Joi from 'joi';

export default function (router: Router, context: Context) {

    router.url('/api/v1');

    /**** Rule Configuration ***/

    // List Rules
    router.get('/rules/', function (req, res) {
        var result = context.ruleCache.queryRuleList();
        return result;
    })

    // Get Rule
    router.get('/rule/:name', function (req, res) {
        var result = context.ruleCache.queryRule(req.params.name);
        return result;
    })

    // Create Rule
    router.post('/rule/:name', function (req, res) {
        var newRule : any;
        return context.ruleAccessor
            .createRule(req.body, { name: req.params.name })
            .then(result => {
                newRule = result;
            })
            .finally(() => context.ruleCache.triggerListUpdate())
            .then(() => {
                return newRule;
            })
    })

    // Delete Rule
    router.delete('/rule/:name', function (req, res) {
        return context.ruleAccessor
            .deleteRule(req.params.name)
            .finally(() => context.ruleCache.triggerListUpdate())
            .then(() => {
                return {};
            });
    })

    // Export Rules
    router.get('/rules/export', function (req, res) {
        return context.ruleAccessor
            .exportRules();
    })

    // Import Rules
    router.post('/rules/import', function (req, res) {
        return context.ruleAccessor
            .importRules(req.body.data, req.body.deleteExtra)
            .finally(() => context.ruleCache.triggerListUpdate())
            .then(() => {
                return {};
            });
    })
    .bodySchema(
        Joi.object({
            kind: Joi.string().valid('rules').required(),
            deleteExtra: Joi.boolean().optional(),
            items: Joi.array().required().items(
                Joi.object()
            )
        })
    )

    /**** Rule Operational ***/

    // List Rules Statuses
    router.get('/rules-statuses/', function (req, res) {
        var result = context.ruleCache.queryRuleStatusList();
        return result;
    })

    router.get('/rule-result/:name', function (req, res) {
        var result = context.ruleCache.getRuleResult(req.params.name);
        return result;
    })

}
