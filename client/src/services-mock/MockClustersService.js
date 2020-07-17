import { CLUSTERS } from '../boot/clustersMockData';

class MockClustersService {
    constructor(sharedState) {
        this._sharedState = sharedState;
    }

    fetchClusters(cb) {
        cb(CLUSTERS)
    }
}

export default MockClustersService
