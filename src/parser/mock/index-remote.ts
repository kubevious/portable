

import { Backend } from '@kubevious/helper-backend'
import { Context } from '../context'
import { K8sLoader } from '../loaders/k8s'
const K8sClient = require('k8s-super-client');

const backend = new Backend("parser");

backend.initialize(() => {

    const context = new Context(backend);

    K8sClient.connect(backend.logger, {
        server: 'http://127.0.0.1',
        token: '',
        httpAgent: {

        }
    })
    .then((client: any) => {
        var loader = new K8sLoader(context,
            client,
            {});
        context.addLoader(loader);
    })
    .then(() => context.run())

});