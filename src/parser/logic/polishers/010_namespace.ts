import { SSL_OP_DONT_INSERT_EMPTY_FRAGMENTS } from 'constants';
import _ from 'the-lodash';
import { LogicParser } from '../parser-builder';

export default LogicParser()
    .order(10)
    .target({
        path: ["ns"]
    })
    .needNamespaceScope(true)
    .namespaceNameCb((item) => {
        return item.naming;
    })
    .handler(({ item, namespaceScope }) => {

        item.buildProperties()
            .add('Applications', namespaceScope.appCount) 
            .add('Ingresses', namespaceScope.items.count('Ingress')) 
            .add('Secrets', namespaceScope.items.count('Secret')) 
            .build();
    })
    ;