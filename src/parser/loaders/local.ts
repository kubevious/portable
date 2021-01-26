import { Promise } from 'the-promise';
import { ILogger } from 'the-logger';

import { Context } from '../context';

import { K8sLoader, ReadyHandler } from './k8s';

import * as fs from 'fs';

const K8sClient = require('k8s-super-client');

export class LocalLoader 
{
    private _context : Context;
    private _logger : ILogger;

    private _loader : any;
    private _readyHandler? : ReadyHandler;

    constructor(context  : Context)
    {
        this._context = context;
        this._logger = context.logger.sublogger("LocalLoader");
        
        this.logger.info("Constructed");
    }

    get logger() : ILogger {
        return this._logger;
    }

    setupReadyHandler(handler : ReadyHandler)
    {
        this._readyHandler = handler;
        if (this._loader) {
            this._loader.setupReadyHandler(this._readyHandler);
        }
    }
    
    run() : Promise<any>
    {
        let k8sConfig = {
            server: 'https://' + process.env.KUBERNETES_SERVICE_HOST + ':' + process.env.KUBERNETES_SERVICE_PORT_HTTPS,
            token: fs.readFileSync('/var/run/secrets/kubernetes.io/serviceaccount/token', 'utf8'),
            httpAgent: {
                ca: fs.readFileSync('/var/run/secrets/kubernetes.io/serviceaccount/ca.crt', 'utf8')
            }
        };

        return Promise.resolve(K8sClient.connect(this._logger, k8sConfig))
            .then(client => {
                let info = {
                    infra: "local"
                }
                this._loader = new K8sLoader(this._context, client, info);
                this._loader.setupReadyHandler(this._readyHandler);
                return this._loader.run();
            })
    }
}