import BaseService from './BaseService'
const _ = require('the-lodash');

class MiscService extends BaseService {

    constructor(client, sharedState, socket)
    {
        super(client, sharedState, socket)

        this._setupWebSocket();
    }

    fetchAbout(cb) {
        let info = [];

        info.push({
            name: 'UI Version',
            value: require('../version')
        })

        return Promise.resolve()
            .then(() => {
                return this._client.get('/api/v1/version')
                    .then(result => {
                        return result.data.version;
                    })
                    .catch(reason => {
                        return "unknown";
                    });
            })
            .then(result => {
                info.push({
                    name: 'Backend Version',
                    value: result
                })
            })
            .then(() => {
                return this._client.get('/api/v1/metrics')
                    .then(result => {
                        info = _.concat(info, result.data.metrics);
                    })
                    .catch(reason => {
                        console.error(reason);
                    });
            })
            .then(() => {
                cb(info);
            });
    }

    fetchNotifications(cb) {
        return this._client.get('/api/v1/support/notifications')
            .then(result => {
                cb(result.data)
            })
    }

    submitFeedback(data, cb) {
        return this._client.post('/api/v1/support/feedback', data)
            .then(result => {
                cb(result.data)
            })
    }

    submitSnooze(data, cb) {
        return this._client.post('/api/v1/support/notification/snooze', data)
            .then(result => {
                cb(result.data)
            })
    }

    _setupWebSocket()
    {
        this._subscribeSocketToSharedState(
            'notifications_info',
            { kind: 'notifications-info' },
            { count: 0 });

        this._subscribeSocketToSharedState(
            'notifications',
            { kind: 'notifications' },
            { notifications: []});            
    }
}

export default MiscService
