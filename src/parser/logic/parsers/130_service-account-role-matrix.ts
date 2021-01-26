import _ from 'the-lodash';
import { ScopeParser } from '../parser-builder';


export default ScopeParser()
    .order(130)
    .target({
        namespaced: true,
        scopeKind: 'ServiceAccount'
    })
    .handler(({ itemScope, helpers }) => {

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

    })
    ;