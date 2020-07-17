const Promise = require('the-promise');
const K8sClient = require('k8s-super-client');
const K8sLoader = require('./k8s');
const fs = require('fs').promises;
const base64 = require("base-64");

class RemoteLoader 
{
    constructor(context, config)
    {
        this._context = context;
        this._logger = context.logger.sublogger("RemoteLoader");
        this._loader = null;
        this._config = config;

        this.logger.info("Constructed");
    }

    get logger() {
        return this._logger;
    }

    setupReadyHandler(handler)
    {
        this._readyHandler = handler;
        if (this._loader) {
            this._loader.setupReadyHandler(this._readyHandler);
        }
    }
    
    run()
    {
        this.logger.info("[run] ", this._config);

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
                this.logger.info("[run] Connecting to:", k8sConfig);
                return K8sClient.connect(this._logger, k8sConfig)
            })
            .then(client => {
                var info = {
                    infra: "local"
                }
                this._loader = new K8sLoader(this._context, client, info);
                this._loader.setupReadyHandler(this._readyHandler);
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
        return this._config.user['token'];
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
                return null;
            });
    }

    _finalizeSetup(k8sConfig)
    {
        if (this._config.cluster['insecure-skip-tls-verify'])
        {
            k8sConfig.httpAgent.rejectUnauthorized = false;
        }
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
