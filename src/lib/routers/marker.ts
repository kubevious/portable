import _ from 'the-lodash';
import { Context } from '../context';
import { Router } from '@kubevious/helper-backend'
import Joi from 'joi';

export default function (router: Router, context: Context) {

    router.url('/api/v1');

    /**** Marker Configuration ***/

    // List Makers
    router.get('/markers/', function (req, res) {
        var result = context.markerCache.queryMarkerList();
        result = result.map(x => ({
            name: x.name,
            shape: x.shape,
            color: x.color
        }));
        return result;
    })

    // Get Marker
    router.get('/marker/:name', function (req, res) {
        var result = context.markerCache.queryMarker(req.params.name);
        return result;
    })

    // Create Marker
    router.post('/marker/:name', function (req, res) {
        var newMarker : any;
        return context.markerAccessor
            .createMarker(req.body, { name: req.params.name })
            .then(result => {
                newMarker = result;
            })
            .finally(() => context.markerCache.triggerUpdate())
            .then(() => {
                return newMarker;
            })
    })

    // Delete Marker
    router.delete('/marker/:name', function (req, res) {
        return context.markerAccessor
            .deleteMarker(req.params.name)
            .finally(() => context.markerCache.triggerUpdate())
            .then(() => {
                return {};
            });
    })

    // Export Makers
    router.get('/markers/export', function (req, res) {
        return context.markerAccessor
            .exportMarkers();
    })

    // Import Makers
    router.post('/markers/import', function (req, res) {
        return context.markerAccessor
            .importMarkers(req.body.data, req.body.deleteExtra)
            .finally(() => context.markerCache.triggerUpdate())
            .then(() => {
                return {};
            });
    })
    .bodySchema(
        Joi.object({
            kind: Joi.string().valid('markers').required(),
            deleteExtra: Joi.boolean().optional(),
            items: Joi.array().required().items(
                Joi.object()
            )
        })
    )

    /**** Marker Operational ***/

    // List Marker Statuses
    router.get('/markers-statuses', function (req, res) {
        var result = context.markerCache.getMarkersStatuses()
        return result;
    })
    
    // Get Marker Result
    router.get('/marker-result/:name', function (req, res) {
        var result = context.markerCache.getMarkerResult(req.params.name)
        return result;
    })

}