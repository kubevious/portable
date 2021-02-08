import _ from 'the-lodash';
import { Context } from '../context';
import { Router } from '@kubevious/helper-backend'
import VERSION from '../../version';

export default function (router: Router, context: Context) {
    router.url('/');

    // router.get('/', (req, res) => {
    //     return {};
    // });

    router.get('/api/v1/version', (req, res) => {
        return {
            version: VERSION
        };
    });

    router.get('/api/v1/metrics', (req, res) => {
        let metrics : any[] = [];
        // metrics = _.concat(metrics, context. .collector.extractMetrics());

        return {
            metrics: metrics
        };
    });
}