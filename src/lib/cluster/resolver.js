const Promise = require('the-promise');
const fs = require('fs');
const Path = require('path');
const _ = require('the-lodash');

class ClusterResolver
{
    constructor(logger, config)
    {
        this._logger = logger;
        this._config = config;

        this._locations = [
            "cluster['certificate-authority']",
            "user['client-certificate']",
            "user['client-key']"
        ]

        this._isRunningOnHost = (process.env.KUBEVIOUS_ON_HOST == 'true');
    }

    get logger() {
        return this._logger;
    }

    resolve()
    {
        this._config.ready = true;
        this._config.messages = [];
        this._config.fileMappings = {};
        return Promise.resolve()
            .then(() => {
                if (this._isRunningOnHost) {
                    return;
                }
                var server = this._config.cluster.server;
                if (_.startsWith(server, 'https://127.0.0.1:')) {
                    this._config.cluster.server = server.replace('https://127.0.0.1:', 'https://host.docker.internal:');
                    this._config.hostOverride = '127.0.0.1';
                }
            })
            .then(() => {
                return Promise.serial(this._locations, x => this._registerFile(x));
            })
    }

    _registerFile(location)
    {
        this.logger.info('[_registerFile] probing: %s', location);
        var srcFilePath = _.get(this._config, location);
        this.logger.info('[_registerFile] probing: %s = %s', location, srcFilePath);

        if (!srcFilePath) {
            return;
        }

        var filePath = this._mapFile(srcFilePath);
        this._config.fileMappings[srcFilePath] = filePath;


        _.set(this._config, location, filePath);

        var exists = fs.existsSync(filePath)
        if (!exists) {
            this._config.ready = false;
            this._config.messages.push('"' + filePath + '" not found.');
        }
    }

    _mapFile(srcFilePath)
    {
        if (this._isRunningOnHost) {
            return srcFilePath;
        }
        var filePath = Path.join('/data/', srcFilePath);
        return filePath;
    }

}

module.exports = ClusterResolver;