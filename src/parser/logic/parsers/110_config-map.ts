import _ from 'the-lodash';
import { ConcreteParser } from '../parser-builder';

export default ConcreteParser()
    .order(110)
    .target({
        api: "v1",
        kind: "ConfigMap"
    })
    .kind('configmap')
    .needNamespaceScope(true)
    .handler(({ logger, scope, item, createK8sItem, createAlert, namespaceScope, helpers }) => {

        var configMapScope = namespaceScope.items.getByConcrete(item)!;

        helpers.common.determineSharedFlag(configMapScope);

        if (configMapScope.isNotUsed)
        {
            var rawContainer = scope.fetchRawContainer(item, "ConfigMaps");
            createK8sItem(rawContainer);
            createAlert('Unused', 'warn', 'ConfigMap not used.');
        }

    })
    ;
    