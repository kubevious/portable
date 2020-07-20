class ClustersService {
    constructor(client, sharedState, socketService) {
        this._client = client;
        this.sharedState = sharedState;
        socketService._subscribe({ kind: 'active-cluster' }, (value) => {
            this.sharedState.set('selected_cluster', value);
        }) 
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
