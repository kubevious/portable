class ClustersService {
    constructor(client) {
        this._client = client;
    }

    fetchClusters(cb) {
        return this._client.get('/')
            .then(result => {
                cb(result.data)
            })
    }

    activateCluster(data, cb) {
        return this._client.post('/active', data)
            .then(result => {
                cb(result.data)
            })
    }
}

export default ClustersService
