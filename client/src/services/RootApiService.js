import _ from 'the-lodash'

import BaseRootApiService from '../BaseRootApiService'
import BackendClient from './BackendClient'

import WebSocketService from './WebSocketService'
import DiagramService from './DiagramService'
import MiscService from './MiscService'

class RootApiService extends BaseRootApiService {
    constructor(sharedState) {
        super(sharedState);
        console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&212312312')

        this.registerService({ kind: 'socket' }, () => {
            return new WebSocketService();
        });

        this.registerService({ kind: 'diagram' }, ({ info }) => {
            console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&')
            var client = new BackendClient('/api/v1', sharedState);
            return new DiagramService(client, sharedState, this.socketService());
        });

        this.registerService({ kind: 'misc' }, () => {
            var client = new BackendClient(null, sharedState);
            return new MiscService(client, sharedState, this.socketService());
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

    
}

export default RootApiService

