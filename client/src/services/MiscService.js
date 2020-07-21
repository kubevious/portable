class MiscService {

    constructor(client) {
        this._client = client;
    }

    fetchAbout(cb) {
        var info = {}

        return Promise.resolve()
            .then(() => {
                return this._client.get('/version')
                    .then(result => {
                        info['version'] = result.data.version;
                    })
                    .catch(reason => {
                        info['version'] = 'unknown';
                    });
            })
            .then(() => {
                cb(info);
            });

    }
}

export default MiscService
