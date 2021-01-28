import Path from 'path';
import { ILogger } from 'the-logger';
import { Server } from '@kubevious/helper-backend';
import { Context } from '../context';

export interface Helpers 
{
}

export class WebServer
{
    private logger : ILogger;
    private server : Server<Context, Helpers>;
    private helpers : Helpers;

    constructor(context : Context)
    {
        this.logger = context.logger.sublogger('WebServer');
        this.helpers = {
        };
        this.server = new Server(this.logger, context, 5002, Path.join(__dirname, '..', 'routers'), this.helpers );
        this.server.initializer((app) => {
            app.set('trust proxy', true);
        })
    }

    run() : Promise<Server<Context, Helpers>>
    {
        return this.server.run();
    }

}
