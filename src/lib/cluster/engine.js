const yaml = require('js-yaml');
const fs = require('fs');

class ProviderEngine {
    constructor(context) {
        this._context = context;
        this._logger = context.logger.sublogger('ProviderEngine');
    }

    fetchContext() {
        return this.parseConfig().then(result => {
            return result.contexts
        })
    }

    parseConfig() {
        return new Promise((resolve, reject) => {
            try {
                const doc = yaml.safeLoad(fs.readFileSync(process.env.KUBE_CONFIG_PATH, 'utf8'));
                resolve(doc)
            } catch (e) {
                console.log(e);
                reject(e)
            }
        })
    }
}

module.exports = ProviderEngine
