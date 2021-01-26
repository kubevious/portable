import _ from 'the-lodash';
import { Context } from '../context';
import { Router } from '@kubevious/helper-backend'
import Joi from 'joi';
import { ILogger } from 'the-logger/dist';

export default function (router: Router, context: Context, logger: ILogger) {

    router.url('/api/v1/collect');
    
    router.post('/snapshot', function (req, res) {
        var date = new Date(req.body.date);
        var parserVersion = req.body.version;
        logger.info("New snapshot reporting started. Date %s. ParserVersion: %s.", date.toISOString(), parserVersion);
        return context.collector.newSnapshot(date, parserVersion);
    })
    .bodySchema(
        Joi.object({
            date: Joi.string().required()
        }).unknown(true)
    );

    router.post('/snapshot/items', function (req, res) {
        return context.collector.acceptSnapshotItems(req.body.snapshot_id, req.body.items);
    })
    .bodySchema(
        Joi.object({
            snapshot_id: Joi.string().required(),
            items: Joi.array().required().items(Joi.object())
        })
    );

    router.post('/snapshot/activate', function (req, res) {
        return context.collector.activateSnapshot(req.body.snapshot_id);
    })
    .bodySchema(
        Joi.object({
            snapshot_id: Joi.string().required()
        })
    );

    router.post('/diff', function (req, res) {
        var date = new Date(req.body.date);
        return context.collector.newDiff(req.body.snapshot_id, date);
    })
    .bodySchema(
        Joi.object({
            snapshot_id: Joi.string().required(),
            date: Joi.string().required()
        })
    );

    router.post('/diff/items', function (req, res) {
        return context.collector.acceptDiffItems(req.body.diff_id, req.body.items);
    })
    .bodySchema(
        Joi.object({
            diff_id: Joi.string().required(),
            items: Joi.array().required().items(Joi.object())
        })
    );

    router.post('/diff/activate', function (req, res) {
        return context.collector.activateDiff(req.body.diff_id);
    })
    .bodySchema(
        Joi.object({
            diff_id: Joi.string().required()
        })
    );

}
