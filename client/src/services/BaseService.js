const _ = require('the-lodash');

class BaseService {
    constructor(client, sharedState, socket, options)
    {
        console.log('[BaseService] ' + this.constructor.name + ' :: create');

        options = options || {}
        this._options = options;

        this._client = client;
        this._sharedState = sharedState;
        this._socket = socket;

        if (!this.client) {
            throw new Error("Client not provided");
        }
        if (!this.sharedState) {
            throw new Error("SharedState not provided");
        }

        if (!this.socket) {
            if (!this._options.allowNoSocket)
            {
                throw new Error("Socket not provided");
            }
        }

        this._socketHandlers = [];
        this._socketScopes = [];
    }

    get client() {
        return this._client;
    }

    get sharedState() {
        return this._sharedState;
    }

    get socket() {
        return this._socket;
    }

    close()
    {
        console.log('[BaseService] ' + this.constructor.name + ' :: destroy');

        for(var handler of this._socketHandlers)
        {
            handler.stop();
        }
        for(var scope of this._socketScopes)
        {
            scope.close();
        }
    }

    _socketSubscribe(target, cb)
    {
        var handler = this.socket.subscribe(target, cb);
        this._socketHandlers.push(handler);
        return handler;
    }

    _subscribeSocketToSharedState(name, socketTarget, defaultValue)
    {
        this.sharedState.set(name, defaultValue);

        this._socketSubscribe(socketTarget, value => {
            if (_.isNullOrUndefined(value)) {
                value = defaultValue;
            }
            this.sharedState.set(name, value)
        });
    }

    _socketScope(cb)
    {
        var scope = this.socket.scope(cb);
        this._socketScopes.push(scope);
        return scope;
    }
}

export default BaseService
