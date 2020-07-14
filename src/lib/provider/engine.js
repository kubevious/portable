class ProviderEngine {
    constructor(context) {
        this._context = context;
        this._logger = context.logger.sublogger('ProviderEngine');

        // TODO: detect provider (GKE, DO, etc) ???
    }

    fetchContext() {
        return [
            {
                name: 'Development',
            },
            {
                name: 'Staging',
            },
            {
                name: 'Production',
            }
        ]
    }
}

module.exports = ProviderEngine
