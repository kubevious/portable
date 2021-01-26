import _ from 'the-lodash';
import { ConcreteParser } from '../parser-builder';

export default ConcreteParser()
    .order(10)
    .target({
        api: "v1",
        kind: "Namespace"
    })
    .kind('ns')
    .handler(({ scope, item, createK8sItem }) => {
        createK8sItem(scope.root);

        let labels = _.get(item.config, 'metadata.labels');
        scope.registerNamespaceLabels(item.config.metadata.name, labels);
    })
    ;