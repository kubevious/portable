const yaml = require('js-yaml');
const fs = require('fs');
const { exec } = require('child_process')

class ClusterEngine {
    constructor(context) {
        this._context = context;
        this._logger = context.logger.sublogger('ProviderEngine');
        this._config = {};
        this._token = null;
        this._caData = null;
    }

    fetchContext() {
        return this.parseConfig().then(result => {
            return result.contexts
        })
    }

    activateCluster(context) {
        const user = this._config.users.find(user => user.name === context.context.user)
        this._caData = this._config.clusters.find(cluster => cluster.name === context.name).cluster['certificate-authority-data']

        this.setToken(user)
            .then((token) => {
                this._token = token

                this._context._facadeRegistry._setupSnapshots(this._token, this._caData)
            })
    }

    setToken(user) {
        return new Promise((resolve, reject) => {
            if (user.user.token) {
                resolve(user.user.token)
            } else {
                exec(this.generateCommand(user.user.exec), (error, stdout, stderr) => {
                    resolve(JSON.parse(stdout).status.token)
                })
            }
        })
    }

    parseConfig() {
        return new Promise((resolve, reject) => {
            try {
                const doc = yaml.safeLoad(fs.readFileSync(process.env.KUBECONFIG, 'utf8'));
                this._config = doc
                resolve(doc)
            } catch (e) {
                console.log(e);
                reject(e)
            }
        })
    }

    generateCommand(params) {
        return params.command + ' ' + params.args.join(' ')
    }
}

module.exports = ClusterEngine
