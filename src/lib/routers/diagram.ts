import _ from 'the-lodash';
import { Context } from '../context';
import { Router } from '@kubevious/helper-backend';
import Joi from 'joi';
import { SearchQuery } from '../types';

export default function (router: Router, context: Context) {

    router.url('/api/v1/diagram');

    router
        .get('/node', function (req, res) {
            const dn : string = <string>req.query.dn;
            var state = context.registry.getCurrentState();
            const node = state.getNodeItem(dn);
            if (node) {
                return node.config;
            }
            return null;
        })
        .querySchema(
            Joi.object({
                dn: Joi.string().required()
            })
        );

    router
        .get('/children', function (req, res) {
            const dn: string = <string>req.query.dn;
            var state = context.registry.getCurrentState();
            return state.getChildren(dn);
        })
        .querySchema(
            Joi.object({
                dn: Joi.string().required(),
            })
        );

    router
        .get('/props', function (req, res) {
            const dn : string = <string>req.query.dn;
            var state = context.registry.getCurrentState();
            var nodeItem = state.getNodeItem(dn);
            if (!nodeItem) {
                return [];
            }
            return _.values(nodeItem?.propertiesMap);
        })
        .querySchema(
            Joi.object({
                dn: Joi.string().required(),
            })
        );

    router
        .get('/alerts', function (req, res) {
            const dn : string = <string>req.query.dn;
            var state = context.registry.getCurrentState();
            var nodeItem = state.getNodeItem(dn);
            if (!nodeItem) {
                return [];
            }
            return nodeItem?.hierarchyAlerts;
        })
        .querySchema(
            Joi.object({
                dn: Joi.string().required(),
            })
        );


    /*************************/

    router
        .post('/search', function (req, res) {
            const criteria: SearchQuery = <SearchQuery>req.body;
            return context.searchEngine.search(criteria);
        })
        .bodySchema(
            Joi.object({
                criteria: Joi.string(),
                kind: Joi.string(),
                error: Joi.object(),
                warn: Joi.object(),
                markers: Joi.array().items(Joi.string()),
                labels: Joi.array().items(Joi.object()),
                annotations: Joi.array().items(Joi.object()),
            }),
        );
}
