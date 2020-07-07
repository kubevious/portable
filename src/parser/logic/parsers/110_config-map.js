const _ = require("the-lodash");

module.exports = {
    target: {
        api: "v1",
        kind: "ConfigMap"
    },

    kind: 'configmap',

    order: 110,

    needNamespaceScope: true,

    handler: ({logger, scope, item, createK8sItem, createAlert, namespaceScope, determineSharedFlag}) =>
    {
        var configMapScope = namespaceScope.items.get(item.config);

        determineSharedFlag(configMapScope);

        if (configMapScope.isNotUsed)
        {
            var rawContainer = scope.fetchRawContainer(item, "ConfigMaps");
            createK8sItem(rawContainer);
            createAlert('Unused', 'warn', 'ConfigMap not used.');
        }
    }
}