const _ = require("the-lodash");

module.exports = {
    target: null,

    order: 1,

    handler: ({logger, scope, item, createK8sItem, infraScope, helpers}) =>
    {
        var itemScope = null;

        if (item.id.api == 'v1' && item.id.kind == 'Namespace')
        {
            itemScope = scope.getNamespaceScope(item.id.name);
        }
        else if (item.id.namespace)
        {
            var namespaceScope = scope.getNamespaceScope(item.id.namespace);
            itemScope = namespaceScope.items.register(item.config);
        } else {
            itemScope = scope.getInfraScope().items.register(item.config);
        }

        item.scope = itemScope;
    }
}