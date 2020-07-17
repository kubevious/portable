const Promise = require('the-promise');
const K8sClient = require('k8s-super-client');
const K8sLoader = require('./k8s');

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
            caData: null
        };

        return Promise.resolve()
            .then(() => this._fetchEndpoint())
            .then(result => {
                k8sConfig.server = result;
            })
            .then(() => this._fetchCAData())
            .then(result => {
                k8sConfig.caData = result;
            })
            .then(() => this._fetchToken())
            .then(result => {
                k8sConfig.token = result;
            })
            .then(() => {
                this.logger.info("[run] Connecting to:", k8sConfig);
                return K8sClient.connect(this._logger, null, k8sConfig)
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

    _fetchCAData()
    {
        var data = this._config.cluster['certificate-authority-data'];
        let buff = new Buffer(data, 'base64');
        let text = buff.toString('ascii');
        return text;
    }

    _fetchToken()
    {
        return this._config.user['token'];
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
