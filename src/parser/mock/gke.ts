import { Promise } from 'the-promise';
import { ILogger } from 'the-logger';

import { Context } from '../context';

import { K8sLoader, ReadyHandler } from '../loaders/k8s';

const K8sClient = require('k8s-super-client');

export class GKELoader 
{
    private _context : Context;
    private _logger : ILogger;

    private _credentials: any;
    private _loader : any;
    private _readyHandler? : ReadyHandler;
    private _name: string;
    private _region: string;

    constructor(context: Context, credentials: any, name: string, region: string)
    {
        this._context = context;
        this._logger = context.logger.sublogger("GKELoader");
        this._credentials = credentials;
        this._name = name;
        this._region = region;
        this._loader = null;

        this.logger.info("Constructed");
    }

    get logger() {
        return this._logger;
    }

    setupReadyHandler(handler : ReadyHandler)
    {
        this._readyHandler = handler;
        if (this._loader) {
            this._loader.setupReadyHandler(this._readyHandler);
        }
    }
    
    run()
    {
        return K8sClient.connectToGKE(this._logger, this._credentials, this._name, this._region)
            .then((client : any) => {
                var info = {
                    infra: "gke",
                    project: this._credentials.project_id,
                    cluster: this._name,
                    region: this._region
                }
        
                this._loader = new K8sLoader(this._context, client, info);
                this._loader.setupReadyHandler(this._readyHandler);
                return this._loader.run();
            })
    }
}
