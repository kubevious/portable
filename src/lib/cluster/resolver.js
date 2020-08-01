const Promise = require('the-promise');
const fs = require('fs');
const Path = require('path');
const _ = require('the-lodash');

const OS_DEFAULT = 'default';
const OS_MAC = 'Mac OS X';
const OS_LINUX = 'Linux';
const OS_WIN = 'Windows';
const OS_LIST = [ OS_MAC, OS_LINUX, OS_WIN ];

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
                imageTag: 'do',
                mappings: {
                    '/root/.config/doctl/config.yaml': {
                        needWrite: false,
                        os: {
                            [OS_DEFAULT]: '~/.config/doctl/config.yaml',
                            [OS_MAC]: '~/Library/Application\\ Support/doctl/config.yaml',
                            [OS_WIN]: '%USERPROFILE%/AppData/Local/doctl/config/config.yaml'
                        }
                    } 
                }
            },
            gcloud: {
                imageTag: 'gcp',
                mappings: {
                    '/root/.config/gcloud': {
                        needWrite: true,
                        os: {
                            [OS_DEFAULT]: '~/.config/gcloud',
                            [OS_WIN]: '%USERPROFILE%/AppData/Roaming/gcloud'
                        }
                    }
                }
            },
            aws: {
                imageTag: 'aws',
                mappings: {
                    '/root/.aws/credentials': {
                        needWrite: false,
                        os: {
                            [OS_DEFAULT]: '~/.aws/credentials',
                            [OS_WIN]: '%USERPROFILE%/.aws/credentials'
                        }
                    }
                }
            }
        }

        this._toolConfigs['gcloud.cmd'] = this._toolConfigs['gcloud']

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
        this._config.fileMappings[filePath] = {
            needWrite: false,
            os: {
                [OS_DEFAULT]: srcFilePath
            }
        };

        _.set(this._config, location, filePath);

        var exists = fs.existsSync(filePath)
        if (!exists) {
            this._reportError('"' + filePath + '" not found.');
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

        var toolConfig = this._toolConfigs[toolName];
        if (toolConfig) {
            if (!this._config.imageTag) {
                if (toolConfig.imageTag) {
                    this._config.imageTag = toolConfig.imageTag;
                }
            }
        }

        var filePath = this._mapFile(toolName, '/tools');
        var exists = fs.existsSync(filePath)
        if (!exists) {
            this._reportError('Tool not found: "' + toolName + '"');
        }

        return this._valideToolConfig(toolName, toolConfig);
    }

    _valideToolConfig(toolName, toolConfig)
    {
        if (!toolConfig) {
            return;
        }

        this.logger.info('[_valideToolConfig] %s:', toolName, toolConfig);

        for(var configPath of _.keys(toolConfig.mappings) )
        {
            this._config.fileMappings[configPath] = toolConfig.mappings[configPath];

            var exists = fs.existsSync(configPath)
            if (!exists) {
                this._reportError(toolName + ' config not found: "' + configPath + '"');
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

    _reportError(msg)
    {
        this._config.ready = false;
        if (this._config.messages.length == 0) {
            this._config.messages.push('Some configuration files or tools were not found.');
        }
        this._config.messages.push(msg);
    }
}

module.exports = ClusterResolver;

module.exports.OS_MAC = OS_MAC;
module.exports.OS_LINUX = OS_LINUX;
module.exports.OS_WIN = OS_WIN;
module.exports.OS_DEFAULT = OS_DEFAULT;
module.exports.OS_LIST = OS_LIST;