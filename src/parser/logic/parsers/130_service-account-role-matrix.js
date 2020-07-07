const _ = require("the-lodash");

module.exports = {
    
    targetKind: 'scope',

    target: {
        namespaced: true,
        scopeKind: 'ServiceAccount'
    },

    order: 130,
    handler: ({ id, itemScope, logger, helpers }) =>
    {
        itemScope.data.rules = helpers.roles.makeRulesMap();

        var bindingScopes = itemScope.data.bindings;
        if (bindingScopes)
        {
            for(var bindingScope of bindingScopes)
            {
                itemScope.data.rules = helpers.roles.combineRulesMap(
                    itemScope.data.rules,
                    bindingScope.data.rules);
            }
        }
        itemScope.data.rules = helpers.roles.optimizeRulesMap(itemScope.data.rules);

        var propsConfig = helpers.roles.buildRoleMatrix(itemScope.data.rules);
        itemScope.addPropertyGroup(propsConfig);
    }
}
