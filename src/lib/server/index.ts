import Path from 'path';
import { ILogger } from 'the-logger';
import { Server, Express } from '@kubevious/helper-backend';
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

        const staticHostingPath = Path.resolve(__dirname, '..', '..', '..', 'static');
        this.logger.info("Static Path: %s", staticHostingPath);

        this.server = new Server(this.logger, context, 5001, Path.join(__dirname, '..', 'routers'), this.helpers, {
            staticHostingPath: staticHostingPath
        } );
        this.server.initializer((app) => {
            app.set('trust proxy', true);
        })
    }

    get httpServer() {
        return this.server.httpServer;
    }

    run() : Promise<Server<Context, Helpers>>
    {
        this.server.initializer(app => {
        })
        
        return this.server.run()
            .then(() => {
                console.log(`Running at http://localhost:${this.server.port}`)
                return this.server;
            });
    }

}
