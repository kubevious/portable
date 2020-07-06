import MockRootApiService from './services-mock/MockRootApiService'
import RootApiService from './services/RootApiService'
import SharedState from './state/shared-state'
import KubeviousHandler from './state/kubevious-handler'

export const sharedState = new SharedState();

function apiFactory() {
    const factory = process.env.REACT_APP_MOCKED_DATA === 'true' ? MockRootApiService : RootApiService;
    return new factory(sharedState);
}

export const api = apiFactory();

new KubeviousHandler(api, { kind: 'diagram' });