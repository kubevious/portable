import { CONTEXTS } from '../boot/contextsMockData';

class MockClustersService {
    constructor(sharedState) {
        this._sharedState = sharedState;
    }

    fetchContexts(cb) {
        cb(CONTEXTS)
    }
}

export default MockClustersService
