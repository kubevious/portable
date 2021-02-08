import BaseService from './BaseService'

class ClustersService extends BaseService {
    constructor(client, sharedState, socket) {
        super(client, sharedState, socket)

        this._setupWebSocket()
    }

    fetchClusters(cb) {
        return this._client.get('/').then((result) => {
            cb(result.data)
        })
    }

    activateCluster(data, cb) {
        return this._client.post('/active', {
            name: data.name
        }).then((result) => {
            cb(result.data)
        })
    }

    createCustomConfig(data, cb) {
        return this._client
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

export default ClustersService
