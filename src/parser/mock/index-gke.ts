import { Backend } from '@kubevious/helper-backend'
import { Context } from '../context'
import { GKELoader  } from './gke'

import * as fs from 'fs';
import * as path from 'path';

const backend = new Backend("parser");

backend.initialize(() => {

    const context = new Context(backend);

    const credsPath = path.resolve(__dirname, '..', '..', process.env.GKE_CREDENTIALS_PATH!);
    const credentials = JSON.parse(fs.readFileSync(credsPath, 'utf8'));
    var loader = new GKELoader(context,
        credentials,
        process.env.GKE_K8S_CLUSTER!,
        process.env.GKE_REGION!);
    context.addLoader(loader);

    return context.run();

});

