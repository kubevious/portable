require("./art");

import { Backend } from '@kubevious/helper-backend'
import { Context } from './lib/context'

const backend = new Backend("portable");

backend.initialize(() => {
    const context = new Context(backend);
    return context.run();
});