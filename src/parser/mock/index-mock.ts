import { Backend } from '@kubevious/helper-backend'
import { Context } from '../context'
import { K8sMockLoader } from './k8s-mock'

const backend = new Backend("parser");

backend.initialize(() => {

    const context = new Context(backend);

    var mockDirName = 'mock-data/data';
    var myArgs = process.argv.slice(2);
    if (myArgs.length > 0) {
        mockDirName = myArgs[0];
    }
    var loader = new K8sMockLoader(context, mockDirName);
    context.addLoader(loader);

    return context.run();
    
});