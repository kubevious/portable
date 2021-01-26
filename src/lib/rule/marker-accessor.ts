import _ from 'the-lodash';
import { Promise } from 'the-promise';
import { ILogger } from 'the-logger' ;

import { Context } from '../context';

import { DataStore } from '@kubevious/easy-data-store';

export class MarkerAccessor
{
    private _logger : ILogger;
    private _dataStore : DataStore;

    constructor(context : Context, dataStore: DataStore)
    {
        this._logger = context.logger.sublogger("MarkerAccessor");
        this._dataStore = dataStore;
    }

    get logger() {
        return this._logger;
    }

    queryAll()
    {
        return this._dataStore.table('markers')
            .queryMany();
    }

    exportMarkers()
    {
        return this.queryAll()
            .then(result => {
                return {
                    kind: 'markers',
                    items: result
                };
            });
    }

    getMarker(name: string)
    {
        return this._dataStore.table('markers')
            .querySingle({ name: name });
    }

    createMarker(config: any, target: any)
    {
        return Promise.resolve()
            .then((() => {
                if (target) {
                    if (config.name != target.name) {
                        return this._dataStore.table('markers')
                            .delete(target);
                    }
                }
            }))
            .then(() => {
                return this._dataStore.table('markers')
                    .createOrUpdate({ 
                        name: config.name,
                        shape: config.shape,
                        color: config.color,
                        propagate: config.propagate
                    })
            });
    }

    deleteMarker(name: string)
    {
        return this._dataStore.table('markers')
            .delete({ 
                name: name
            });
    }

    importMarkers(markers : { items: any[]}, deleteExtra: boolean)
    {
        return this._dataStore.table('markers')
            .synchronizer(null, !deleteExtra)
            .execute(markers.items)
    }

    getAllMarkersItems()
    {
        return this._dataStore.table('marker_items')
            .queryMany();
    }

    getMarkerItems(name: string)
    {
        return this._dataStore.table('marker_items')
            .queryMany({ marker_name: name });
    }

}
