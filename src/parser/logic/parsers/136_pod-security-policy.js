const _ = require("the-lodash");

module.exports = {
    targetKind: 'scope',

    target: {
        namespaced: false,
        scopeKind: 'PodSecurityPolicy'
    },

    kind: 'psp',

    order: 136,

    handler: ({scope, itemScope, createK8sItem, createAlert, determineSharedFlag }) =>
    {
        if (itemScope.isNotUsed)
        {
            var rawContainer = scope.fetchNamespaceRawContainer("", "PodSecurityPolicies");
            var logicItem = createK8sItem(rawContainer);
            itemScope.registerItem(logicItem);
            createAlert('Unused', 'warn', itemScope.kind + ' not used.');
        }

        itemScope.buildProperties()
            .fromConfig('Priviledged', 'spec.allowPrivilegeEscalation', false)
            .fromConfig('Capabilities', 'spec.allowedCapabilities')
            .fromConfig('seLinux', 'spec.seLinux.rule')
            .fromConfig('RunAsUser', 'spec.runAsUser.rule')
            .fromConfig('FSGroup', 'spec.fsGroup.rule')
            .fromConfig('Groups', 'spec.supplementalGroups.rule')
            .fromConfig('ReadOnlyRootFS', 'spec.readOnlyRootFilesystem', false)
            .fromConfig('Volumes', 'spec.volumes', [])
            .build()

        determineSharedFlag(itemScope);
        
    }
}