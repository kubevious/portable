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
}

export default ClustersService
