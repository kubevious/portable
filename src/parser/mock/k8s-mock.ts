import _ from 'the-lodash';
import { ILogger } from 'the-logger';
import { Context } from '../context';

import { readdirSync, statSync, readFileSync } from 'fs';
 
import * as Path from 'path';
import * as yaml from 'js-yaml';

type ReadyHandler = (isReady: boolean) => void;

export class K8sMockLoader 
{
    private _context : Context;
    private _logger : ILogger;

    private _name : string;
    private _isReady : boolean = false;

    private _targets : Record<string, (string | null)[]> = {};
    private _readyHandler? : ReadyHandler;

    constructor(context : Context, name: string)
    {
        this._context = context;
        this._logger = context.logger.sublogger("K8sMockLoader");
        this._name = name;

        this.logger.info("Constructed");

        this._loadTargets();
    }

    get logger() {
        return this._logger;
    }

    setupReadyHandler(handler : ReadyHandler)
    {
        this._readyHandler = handler;
        if (this._isReady) {
            this._readyHandler(true);
        }
    }

    run()
    {
        var dirName = Path.resolve(__dirname, '..', '..', this._name);
        this.logger.info('[run] DataDir: %s', dirName);

        var files = this._getAllFiles(dirName);
        for(var fullPath of files)
        {
            var contents = readFileSync(fullPath, { encoding: 'utf8' });
            var obj : any = null;
            if (fullPath.endsWith('.json')) {
                obj = JSON.parse(contents);
            } else if (fullPath.endsWith('.yaml')) {
                obj = yaml.safeLoadAll(contents);
            }
            if (obj) {
                if (_.isArray(obj)) {
                    for(let x of obj) {
                        this._handle(true, x);
                    }
                } else {
                    this._handle(true, obj);
                }
            }
        }

        setTimeout(() => {
            this._isReady = true;
            if (this._readyHandler) {
                this._readyHandler!(true);
            }
        }, 3000);
    }

    _getAllFiles(dirPath: string, arrayOfFiles? : string[]) : string[] {
        let files = readdirSync(dirPath)
      
        arrayOfFiles = arrayOfFiles || []
      
        files.forEach((file : string) => {
            const childPath = Path.join(dirPath, file);
            if (statSync(childPath).isDirectory()) {
                arrayOfFiles = this._getAllFiles(childPath, arrayOfFiles)
            } else {
                arrayOfFiles!.push(childPath)
            }
        })
      
        return arrayOfFiles
    }

    _handle(isPresent: boolean, obj : any)
    {
        if (obj.kind == 'List')
        {
            for(var item of obj.items)
            {
                this._handle(isPresent, item);
            }
        }
        else
        {
            if (!this._isTrackedObject(obj)) {
                this._logger.warn("Object %s :: %s is not tracked.", obj.apiVersion, obj.kind);
                return;
            }

            this._logger.info("Handle: %s, present: %s", obj.kind, isPresent);
            this._context.k8sParser.parse(isPresent, obj);
        }
    }

    _isTrackedObject(obj : any)
    {
        if (!this._targets[obj.kind]) {
            return false;
        }

        var apiParts = obj.apiVersion.split('/');
        var api = null;
        if (apiParts.length == 2) {
            api = apiParts[0]
        } else {
            api = null;
        }

        return _.includes(this._targets[obj.kind], api);
    }

    _loadTargets()
    {
        this._targets = {};

        var groups = this._context.k8sParser.getAPIGroups();
        for(var group of groups)
        {
            for(var kind of group.kinds)
            {
                if (!this._targets[kind]) {
                    this._targets[kind] = [];
                }
                this._targets[kind].push(group.api);
            }
        }
        this.logger.info("Targets: ", this._targets);
    }
}