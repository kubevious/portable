import _ from 'the-lodash'

import BaseRootApiService from '../BaseRootApiService'
import BackendClient from './BackendClient'

import WebSocketService from './WebSocketService'
import DiagramService from './DiagramService'
import MiscService from './MiscService'
import ClustersService from './ClustersService';

class RootApiService extends BaseRootApiService {
    constructor(sharedState) {
        super(sharedState);

        this.registerService({ kind: 'socket' }, () => {
            return new WebSocketService(sharedState);
        });

        this.registerService({ kind: 'diagram' }, () => {
            var client = new BackendClient('/api', sharedState);
            return new DiagramService(client, sharedState, this.socketService());
        });

        this.registerService({ kind: 'misc' }, () => {
            var client = new BackendClient(null, sharedState);
            return new MiscService(client);
        });

        this.registerService({ kind: 'clusters' }, () => {
            var client = new BackendClient('/api/clusters', sharedState)
            return new ClustersService(client, sharedState, this.socketService())
        });
    }

    socketService() {
        return this.resolveService({ kind: 'socket' });
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
        return this.resolveService({ kind: 'misc' });
    }

    clustersService() {
        return this.resolveService({ kind: 'clusters' })
    }
}

export default RootApiService

