const yaml = require('js-yaml');
const fs = require('fs');
const { exec } = require('child_process')

class ClusterEngine {
    constructor(context) {
        this._context = context;
        this._logger = context.logger.sublogger('ProviderEngine');
    }

    fetchContext() {
        return this.parseConfig().then(result => {
            return result.contexts
        })
    }

    activateCluster(context) {
        this.setContext(context).then(() => {
            this._logger.info('[activateCluster] context: ', context.name)
        })
    }

    setContext(context) {
        const cmd = `kubectl config use-context ${context.name}`

        return Promise.resolve(
            exec(cmd)
        )
    }

    parseConfig() {
        return new Promise((resolve, reject) => {
            try {
                const doc = yaml.safeLoad(fs.readFileSync(process.env.KUBECONFIG, 'utf8'));
                resolve(doc)
            } catch (e) {
                console.log(e);
                reject(e)
            }
        })
    }
}

module.exports = ClusterEngine
