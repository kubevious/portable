import Path from "path";
import { ILogger } from "the-logger";
import { Server } from "@kubevious/helper-backend";
import { Context } from "../context";
import express, { Express } from "express";
import { Promise } from "the-promise";
import morgan from "morgan";
import fs from "fs";
import { Helpers } from "../../parser/logic/helpers";

export class WebServer {
  private _logger: ILogger;
  private server: Server<Context, Helpers>;
  private helpers: Helpers;
  private _httpServer: any;
  private _isDev: boolean;
  private _app: Express;
  private _context: Context;

  constructor(context: Context, port?: any) {
    this._port = port || 5001;
    this._context = context;
    this._logger = context.logger.sublogger("Server");
    this._app = express();
    this._httpServer = null;
    this._isDev = process.env.NODE_ENV === "development";
    this.helpers = new Helpers();
    this.server = new Server(
      this.logger,
      context,
      5001,
      Path.join(__dirname, "..", "routers"),
      this.helpers
    );
    this.server.initializer((app) => {
      app.set("trust proxy", true);
    });
  }
  get logger() {
    return this._logger;
  }

  get httpServer() {
    return this._httpServer;
  }

  run() {
    if (this._isDev) {
      this._app.use(morgan("tiny"));
    }

    this._app.use(express.json({ limit: "10mb" }));

    this._loadRouters();

    this._app.use((req, res, next) => {
      const body = {
        message: "Not Found",
        status: 404,
      };
      res.status(body.status).json(body);
    });

    this._app.use((error: any, req: any, res: any, next: any) => {
      var status = 500;
      this._logger.error("[server::error] ", error);

      res.status(status).json({
        status: status,
        message: error.message || "Internal Server Error",
        stack: this._isDev ? error.stack : "",
      });
    });

    this._httpServer = this._app.listen(this._port, () => {
      this.logger.info("listening on port %s", this._port);
      console.log("Ready at http://localhost:" + this._port);
    });
  }
  _port(_port: any, arg1: () => void): any {
    throw new Error("Method not implemented.");
  }

  _loadRouters() {
    var pattern = new RegExp(".js$");
    var routerNames = fs.readdirSync(Path.join(__dirname, "..", "routers"));
    routerNames = routerNames.filter(
      (val) => val.match(pattern) && val !== "index.js"
    );
    routerNames = routerNames.map((x: any) => Path.parse(x).name);
    for (var x of routerNames) {
      this._loadRouter(x);
    }
  }

  _loadRouter(name: string) {
    this.logger.info("Loading router %s...", name);
    const routerModule = require("../routers/" + name);

    const router = express.Router();

    const wrappedRouter = {
      get: (url: string, handler: any) => {
        router.get(url, (req, res) => {
          this._handleRoute(req, res, handler);
        });
      },

      post: (url: string, handler: any) => {
        router.post(url, (req, res) => {
          this._handleRoute(req, res, handler);
        });
      },

      put: (url: string, handler: any) => {
        router.put(url, (req, res) => {
          this._handleRoute(req, res, handler);
        });
      },

      delete: (url: string, handler: any) => {
        router.delete(url, (req, res) => {
          this._handleRoute(req, res, handler);
        });
      },
    };

    var routerContext = {
      logger: this.logger.sublogger("Router" + name),
      router: wrappedRouter,
      app: this._app,
      context: this._context,
      reportError: (statusCode: number, message: string) => {
        throw new RouterError(message, statusCode);
      },
      reportUserError: (message: string) => {
        throw new RouterError(message, 400);
      },
    };

    routerModule.setup(routerContext);

    if (routerModule.url) {
      this._app.use(routerModule.url, router);
    }
  }

  _handleRoute(req: any, res: any, handler: any) {
    try {
      var result = handler(req, res);
      Promise.resolve(result)
        .then((result) => {
          res.json(result);
        })
        .catch((reason) => {
          this._handleError(res, reason);
        });
    } catch (reason) {
      this._handleError(res, reason);
    }
  }

  _handleError(res: any, reason: any) {
    if (reason instanceof RouterError) {
      if (this._isDev) {
        res
          .status(reason.statusCode)
          .json({ message: reason.message, stack: reason.stack });
      } else {
        res.status(reason.statusCode).json({ message: reason.message });
      }
    } else {
      var status = 500;
      this._logger.error("[_handleError] ", reason);
      if (this._isDev) {
        res
          .status(status)
          .json({ message: reason.message, stack: reason.stack });
      } else {
        res.status(status).json({ message: reason.message });
      }
    }
  }
}

class RouterError extends Error {
  statusCode() {
    throw new Error("Method not implemented.");
  }
  constructor(message: string, statusCode: number) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
    this.statusCode();
  }
}
