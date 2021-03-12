import { MockRootApiService } from './services-mock/MockRootApiService'
import { RootApiService } from './services/RootApiService'
import KubeviousHandler from './state/kubevious-handler'

import { app } from "@kubevious/ui-framework"
export const sharedState = app.sharedState

app.sharedState.register("diagram_expanded_dns", {
    skipCompare: true,
    skipValueOutput: true,
})
app.sharedState.register("visible_windows", {
    skipCompare: true,
})

function apiFactory(): MockRootApiService | RootApiService {
    const factory =
        process.env.REACT_APP_MOCKED_DATA === "true"
            ? MockRootApiService
            : RootApiService
    return new factory()
}

export const api = apiFactory()

new KubeviousHandler(api)
