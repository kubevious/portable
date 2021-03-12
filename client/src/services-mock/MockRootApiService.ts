import _ from "the-lodash"

import { MockDiagramService } from "./MockDiagramService"
import { MockWebSocketService } from "./MockWebSocketService"
import { MockMiscService } from "./MockMiscService"
import { MockClustersService } from './MockClustersService'

import { app } from "@kubevious/ui-framework"

export class MockRootApiService {
    constructor() {
        const sharedState = app.sharedState

        app.registerService({ kind: "socket" }, () => {
            return new MockWebSocketService(this, sharedState)
        })

        app.registerService({ kind: "diagram" }, () => {
            return new MockDiagramService(this, sharedState)
        })

        app.registerService({ kind: "misc" }, () => {
            return new MockMiscService(this, sharedState)
        })

        app.registerService({ kind: 'clusters' }, () => {
            return new MockClustersService(this, sharedState)
        })
    }

    socketService() {
        return app.serviceRegistry.resolveService<MockWebSocketService>({
            kind: "socket",
        })
    }

    diagramService(params) {
        let info
        if (params) {
            info = _.clone(params)
        } else {
            info = {}
        }
        info.kind = "diagram"
        return app.serviceRegistry.resolveService<MockDiagramService>(info)
    }

    miscService() {
        return app.serviceRegistry.resolveService<MockMiscService>({
            kind: "misc",
        })
    }
}

export default MockRootApiService
