const _ = require("the-lodash");

module.exports = {
    targetKind: 'scope',

    target: {
        namespaced: true,
        scopeKind: 'Pod'
    },

    order: 101,

    handler: ({ scope, itemScope}) =>
    {
        var volumes = _.get(itemScope.config, 'spec.volumes');
        if (volumes)
        {
            for(var volume of volumes)
            {
                var pvcName = _.get(volume, 'persistentVolumeClaim.claimName');
                if (pvcName)
                {
                    var pvcScope = itemScope.parent.items.get('PersistentVolumeClaim', pvcName);
                    if (pvcScope)
                    {
                        for(var podItem of itemScope.items)
                        {
                            var pvc = podItem.fetchByNaming("pvc", pvcScope.name);
                            scope.setK8sConfig(pvc, pvcScope.config);
                            pvcScope.registerItem(pvc);
                            pvcScope.markUsedBy(pvc);
                        }
                    }     
                }
            }
        }

    }
}