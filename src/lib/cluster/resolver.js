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

        this._dataLocations = [
            "cluster['certificate-authority']",
            "user['client-certificate']",
            "user['client-key']"
        ]
        this._toolLocations = [
            "user.exec.command",
            "user['auth-provider'].config['cmd-path']",
        ]

        this._toolConfigs = {
            doctl: {
                '/root/.config/doctl/config.yaml': '$HOME/Library/Application Support/doctl/config.yaml'
            }
        }

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
                return Promise.serial(this._dataLocations, x => this._registerDataFile(x));
            })
            .then(() => {
                return Promise.serial(this._toolLocations, x => this._registerTool(x));
            })
    }

    _registerDataFile(location)
    {
        var srcFilePath = _.get(this._config, location);
        this.logger.info('[_registerFile] probe: %s => %s', location, srcFilePath);

        if (!srcFilePath) {
            return;
        }

        var filePath = this._mapFile(srcFilePath, '/data');
        this._config.fileMappings[srcFilePath] = filePath;

        _.set(this._config, location, filePath);

        var exists = fs.existsSync(filePath)
        if (!exists) {
            this._config.ready = false;
            this._config.messages.push('"' + filePath + '" not found.');
        }
    }

    _registerTool(location)
    {
        var toolPath = _.get(this._config, location);
        this.logger.info('[_registerTool] probe: %s => %s', location, toolPath);
        if (!toolPath) {
            return;
        }

        var toolName = Path.basename(toolPath);
        this.logger.info('[_registerTool] probe: %s => %s', location, toolName);

        if (this._isRunningOnHost) {
            return;
        }

        var filePath = this._mapFile(toolName, '/tools');
        var exists = fs.existsSync(filePath)
        if (!exists) {
            this._config.ready = false;
            this._config.messages.push('Tool not found: "' + toolName + '"');
        }

        return this._valideToolConfig(toolName);
    }

    _valideToolConfig(toolName)
    {
        var toolConfig = this._toolConfigs[toolName];
        if (!toolConfig) {
            return;
        }

        for(var configPath of _.keys(toolConfig) )
        {
            this._config.fileMappings[toolConfig[configPath]] = configPath;

            var exists = fs.existsSync(configPath)
            if (!exists) {
                this._config.ready = false;
                this._config.messages.push(toolName + ' config not found: "' + configPath + '"');
            }
        }
    }

    _mapFile(srcFilePath, rootDir)
    {
        if (this._isRunningOnHost) {
            return srcFilePath;
        }
        var filePath = Path.join(rootDir, srcFilePath);
        return filePath;
    }

}

module.exports = ClusterResolver;