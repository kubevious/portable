import _ from 'the-lodash'

import BaseRootApiService from '../BaseRootApiService'

import DiagramService from './MockDiagramService'
import WebSocketService from './MockWebSocketService'
import MiscService from './MockMiscService';
import ClustersService from './MockClustersService';

class MockRootApiService extends BaseRootApiService
{
    constructor(sharedState)
    {
        super(sharedState);

        this.registerService({ kind: 'socket' }, () => {
            return new WebSocketService(sharedState);
        });

        this.registerService({ kind: 'diagram' }, ({ info }) => {
            return new DiagramService(sharedState);
        });

        this.registerService({ kind: 'misc' }, () => {
            return new MiscService(this);
        });

        this.registerService({ kind: 'clusters' }, () => {
            return new ClustersService(sharedState);
        });
    }
    
    socketService() {
        return this.resolveService({kind: 'socket'});
    }

    diagramService(params) {
        var info;
        if (params) {
            info = _.clone(params);
        } else {
            info = {}
        }
        info.kind = 'diagram';
        return this.resolveService(info);
    }

    miscService() {
        return this.registerService({ kind: 'misc' })
    }

    clustersService() {
        return this.registerService({ kind: 'clusters' })
    }
}

export default MockRootApiService

