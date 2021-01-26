import { Backend } from '@kubevious/helper-backend'
import { Context } from './context'

const backend = new Backend("backend");

backend.initialize(() => {
    const context = new Context(backend);
    return context.run();
});