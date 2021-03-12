import _ from 'the-lodash'

import { WebSocketService } from './WebSocketService'
import { DiagramService } from './DiagramService'
import { MiscService } from './MiscService'
import { ClustersService } from './ClustersService'

import { app } from '@kubevious/ui-framework';

export class RootApiService {
    constructor() {

        app.initHttpClient('');

        const sharedState = app.sharedState;

        app.registerService({ kind: 'socket' }, () => {
            return new WebSocketService();
        });

        app.registerService({ kind: 'clusters' }, () => {
            const client = app.httpClient('/api/clusters');
            return new ClustersService(
                client,
                sharedState,
                this.socketService()
            )
        })

        app.registerService({ kind: 'diagram' }, () => {
            const client = app.httpClient('/api/v1');
            return new DiagramService(client, sharedState, this.socketService());
        });

        app.registerService({ kind: 'misc' }, () => {
            const client = app.httpClient('');
            return new MiscService(client, sharedState, this.socketService());
        });
    }

    socketService() {
        return app.serviceRegistry.resolveService<WebSocketService>({ kind: 'socket' });
    }

    diagramService(params) {
        let info;
        if (params) {
            info = _.clone(params);
        } else {
            info = {}
        }
        info.kind = 'diagram';
        return app.serviceRegistry.resolveService<DiagramService>(info);
    }

    miscService() {
        return app.serviceRegistry.resolveService<MiscService>({ kind: 'misc' });
    }

    clustersService() {
        return app.serviceRegistry.resolveService<ClustersService>({ kind: 'clusters' });
    }
}
