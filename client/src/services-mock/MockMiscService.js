class MockMiscService {
    constructor(parent) {
        this._parent = parent
    }

    fetchAbout(cb) {
        var info = {}

        return Promise.resolve()
            .then(() => {
                return Promise.resolve()
                    .then(() => {
                        info['version'] = 'v1.2.3';
                    })
                    .catch(() => {
                        info['version'] = 'unknown';
                    });
            })
            .then(() => {
                cb(info)
            })
    }

}

export default MockMiscService
