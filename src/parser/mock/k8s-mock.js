const _ = require('the-lodash');
const Promise = require('the-promise');
const Path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');

class K8sMockLoader 
{
    constructor(context, name)
    {
        this._context = context;
        this._logger = context.logger.sublogger("K8sMockLoader");

        this._name = name;
        this.logger.info("Constructed");
        this._isReady = false;

        this._targets = {};
        this._loadTargets();
    }

    get logger() {
        return this._logger;
    }

    setupReadyHandler(handler)
    {
        this._readyHandler = handler;
        if (this._isReady) {
            this._readyHandler(true);
        }
    }

    run()
    {
        var dirName = Path.resolve(__dirname, this._name);
        for(var name of fs.readdirSync(dirName))
        {
            var fname = Path.join(dirName, name);
            var contents = fs.readFileSync(fname);
            var obj = null;
            if (fname.endsWith('.json')) {
                obj = JSON.parse(contents);
            } else if (fname.endsWith('.yaml')) {
                obj = yaml.safeLoad(contents);
            }
            if (obj) {
                this._handle(true, obj);
            }
        }

        setTimeout(() => {
            this._isReady = true;
            this._readyHandler(true);
        }, 3000);
    }

    _handle(isPresent, obj)
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

    _isTrackedObject(obj)
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

module.exports = K8sMockLoader;