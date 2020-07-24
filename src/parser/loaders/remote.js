const Promise = require('the-promise');
const _ = require("the-lodash");
const K8sClient = require('k8s-super-client');
const K8sLoader = require('./k8s');
const fs = require('fs').promises;
const Path = require('path');
const base64 = require("base-64");
const { exec } = require('child_process');

class RemoteLoader 
{
    constructor(context, config)
    {
        this._context = context;
        this._logger = context.logger.sublogger("RemoteLoader");
        this._loader = null;
        this._config = config;
        this._errorMessages = [];

        this.logger.info("Constructed");
    }

    get logger() {
        return this._logger;
    }

    get errorMessages() {
        return this._errorMessages;
    }

    run()
    {
        this.logger.info("[run] ", this._config);

        this._errorMessages = [];

        var k8sConfig = {
            server: null,
            token: null,
            httpAgent: {}
        };

        return Promise.resolve()
            .then(() => this._setup())
            .then(() => this._fetchEndpoint())
            .then(result => {
                k8sConfig.server = result;
            })
            .then(() => this._fetchCertificateAuthority())
            .then(result => {
                if (result) {
                    k8sConfig.httpAgent.ca = result;
                }
            })
            .then(() => this._fetchClientCertificate())
            .then(result => {
                if (result) {
                    k8sConfig.httpAgent.cert = result;
                }
            })            
            .then(() => this._fetchClientKey())
            .then(result => {
                if (result) {
                    k8sConfig.httpAgent.key = result;
                }
            })     
            .then(() => this._fetchToken())
            .then(result => {
                if (result) {
                    k8sConfig.token = result;
                }
            })
            .then(() => this._finalizeSetup(k8sConfig))
            .then(() => {
                if (this._errorMessages.length > 0) {
                    throw {
                        messages: this._errorMessages
                    }
                }
                return this._tryConnect(k8sConfig);
            })
    }

    stop()
    {
        if (this._loader) {
            this._loader.stop();
            this._loader = null;
        }
    }

    _tryConnect(k8sConfig)
    {
        return Promise.resolve()
            .then(() => {
                this.logger.info("[run] Connecting to:", k8sConfig);
                return K8sClient.connect(this._logger, k8sConfig)
            })
            .then(client => {
                var info = {
                    infra: "local"
                }
                this._loader = new K8sLoader(this._context, client, info);
                return this._loader.run();
            })
    }

    _setup()
    {
        this.logger.info("[_setup] Config: ", this._config);
        return Promise.resolve();
    }

    _fetchEndpoint()
    {
        return this._config.cluster.server;
    }

    _fetchCertificateAuthority()
    {
        if (this._config.cluster['certificate-authority-data'])
        {
            var data = this._config.cluster['certificate-authority-data'];
            return base64.decode(data);
        }
        if (this._config.cluster['certificate-authority'])
        {
            var filePath = this._config.cluster['certificate-authority'];
            return this._readFromFile(filePath);
        }
        return null;
    }

    _fetchToken()
    {
        if (this._config.user.token) {
            return this._config.user.token;
        }

        if (this._config.user.exec) {
            if (this._config.user.exec.command) {
                return this._executeTool(this._config.user.exec.command,
                                         this._config.user.exec.args,
                                         this._config.user.exec.env)
                    .then(result => {
                        var doc = JSON.parse(result);
                        return doc.status.token;
                    });
            }
        }

        if (this._config.user['auth-provider']) {
            if (this._config.user['auth-provider']['config']) {
                var authConfig = this._config.user['auth-provider']['config']
                if (authConfig['cmd-path'])
                {
                    return this._executeTool(authConfig['cmd-path'],
                                             authConfig['cmd-args'])
                        .then(result => {
                            var doc = JSON.parse(result);
                            var tokenKey = authConfig['token-key'];
                            tokenKey = _.trim(tokenKey, "{}.");
                            var token = _.get(doc, tokenKey);
                            return token;
                        });
                }

                if (authConfig['access-token']) {
                    return authConfig['access-token'];
                }
            }
        }
    }

    _fetchClientCertificate()
    {
        if (this._config.user['client-certificate-data'])
        {
            var data = this._config.user['client-certificate-data'];
            return base64.decode(data);
        }
        if (this._config.user['client-certificate'])
        {
            var filePath = this._config.user['client-certificate'];
            return this._readFromFile(filePath);
        }
        return null;
    }

    _fetchClientKey()
    {
        if (this._config.user['client-key-data'])
        {
            var data = this._config.user['client-key-data'];
            return base64.decode(data);
        }
        if (this._config.user['client-key'])
        {
            var filePath = this._config.user['client-key'];
            return this._readFromFile(filePath);
        }
        return null;
    }

    _readFromFile(filePath)
    {
        this.logger.info('Loading from: %s', filePath);
        return fs.readFile(filePath, 'utf8')
            .catch(reason => {
                this.logger.error('Failed to load from: %s. Details: ', filePath, reason);
                this._errorMessages.push('Failed to load from: ' + filePath);
                return null;
            });
    }

    _finalizeSetup(k8sConfig)
    {
        if (this._config.cluster['insecure-skip-tls-verify'])
        {
            k8sConfig.httpAgent.rejectUnauthorized = false;
        }

        if (this._config.hostOverride) {
            k8sConfig.httpAgent.servername = this._config.hostOverride;
        }
    }

    _executeTool(toolPath, args, envArray)
    {
        var toolName = Path.basename(toolPath);
        var envDict = {}; 
        if (envArray) {
            envDict = _.makeDict(envArray, x => x.name, x => x.value);
        }
        return this._executeCommand(toolName, args, envDict);
    }

    _executeCommand(program, args, envDict)
    {
        var options = {};
        options.timeout = 20 * 1000;
        if (_.isArray(args)) {
            args = args.join(' ');
        }
        var cmd = program;
        if (args && (args.length > 0)) {
            cmd = program + ' ' + args;
        }
        if (envDict) {
            envDict = _.defaults(envDict, process.env);
            options.env = envDict;
        }
        this.logger.info('[_executeCommand] running: %s, options:', cmd, options)
        return new Promise((resolve, reject) => {
            exec(cmd, options, (error, stdout, stderr) => {
                if (error) {
                    this.logger.error('[_executeCommand] failed: %s', error.message);
                    this.logger.error('[_executeCommand] cmd: %s', error.cmd);
                    this.logger.error('[_executeCommand] killed: %s', error.killed);
                    this.logger.error('[_executeCommand] signal: %s', error.signal);
                    this.logger.error('[_executeCommand] code: %s', error.code);
                    this.logger.error('[_executeCommand] stdout: %s', stdout);
                    this.logger.error('[_executeCommand] stderr: %s', stderr);
                    reject(error);
                } else {
                    this.logger.info('[_executeCommand] result: ', stdout);
                    resolve(stdout)
                }
            })
        })
    }

    // setToken(user) {
    //     return new Promise((resolve, reject) => {
    //         if (user.user.token) {
    //             resolve(user.user.token)
    //         } else {
    //             exec(this.generateCommand(user.user.exec), (error, stdout, stderr) => {
    //                 resolve(JSON.parse(stdout).status.token)
    //             })
    //         }
    //     })
    // }

    // generateCommand(params) {
    //     return params.command + ' ' + params.args.join(' ')
    // }


}

module.exports = RemoteLoader;
