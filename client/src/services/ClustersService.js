class ClustersService {
    constructor(client) {
        this._client = client;
    }

    fetchContexts(cb) {
        return this._client.get('/contexts')
            .then(result => {
                cb(result.data)
            })
    }

    activateContext(data, cb) {
        return this._client.post('/activate', data)
            .then(result => {
                cb(result.data)
            })
    }
}

export default ClustersService
