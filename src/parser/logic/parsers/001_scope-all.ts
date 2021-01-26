import _ from 'the-lodash';
import { ConcreteParser } from '../parser-builder';

export default ConcreteParser()
    .order(1)
    .target(null)
    .handler(({ logger, scope, item, createK8sItem, infraScope, helpers }) => {

        if (item.id.api == 'v1' && item.id.kind == 'Namespace')
        {
            scope.getNamespaceScope(item.id.name);
        }
        else if (item.id.namespace)
        {
            let namespaceScope = scope.getNamespaceScope(item.id.namespace);
            namespaceScope.items.register(item.config);
        } else {
            scope.getInfraScope().items.register(item.config);
        }

    })
    ;