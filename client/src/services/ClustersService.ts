import _ from 'the-lodash'
import { IClustersService } from '@kubevious/ui-middleware';
import { HttpClient } from '@kubevious/http-client/dist';
import { SharedState } from '@kubevious/ui-framework/dist';
import { WebSocketService } from './WebSocketService';
import { BaseService } from './BaseService';

export class ClustersService extends BaseService  implements IClustersService {
    constructor(client: HttpClient, sharedState: SharedState, socket: WebSocketService) {
        super(client, sharedState, socket)

        this._setupWebSocket()
    }

    fetchClusters(cb) {
        return this.client.get('/').then((result) => {
            cb(result.data)
        })
    }

    activateCluster(data, cb) {
        return this.client.post('/active', {
            name: data.name
        }).then((result) => {
            cb(result.data)
        })
    }

    createCustomConfig(data, cb) {
        return this.client
            .post('/create-config', data)
            .then((result) => {
                cb(result.data)
            })
            .catch((err) => {
                cb(err.response.data)
            })
    }

    _setupWebSocket() {
        this._socketSubscribe({ kind: 'active-cluster' }, (value) => {
            this.sharedState.set('selected_cluster', value)
        })
    }
}
