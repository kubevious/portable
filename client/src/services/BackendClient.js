import axios from 'axios'
import RemoteTrack from '../utils/remote-track';

class BackendClient {
    constructor(urlBase, sharedState, headers)
    {
        this._urlBase = urlBase;
        this._remoteTrack = new RemoteTrack(sharedState);
        this._headers = headers || {};
    }

    get(url, params) {
        return this._execute('get', url, params, null);
    }

    delete(url, params) {
        return this._execute('delete', url, params, null);
    }

    post(url, data, params) {
        return this._execute('post', url, params, data);
    }

    put(url, data, params) {
        return this._execute('put', url, params, data);
    }

    _execute(method, url, params, data) {
        if (this._urlBase) {
            url = this._urlBase + url;
        }
        
        var options = {
            method: method,
            url: url,
            headers: this._headers
        };

        if (params) {
            options.params = params;
        }

        if (data) {
            options.data = data;
        }

        const operation = this._remoteTrack.start({
            action: `${options.method.toUpperCase()}::${options.url}`,
            options
        })

        return axios(options)
            .then(result => {
                operation.complete()
                return result;
            })
            .catch(reason => {
                let data = null;
                let status = null;
                if (reason.response) {
                    data = reason.response.data;
                    status = reason.response.status;
                } else {
                    data = reason.message;
                    status = 0;
                }
                operation.fail({ data: data, status: status })
                throw reason;
            });
    }
}

export default BackendClient;
