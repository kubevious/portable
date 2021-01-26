import _ from 'the-lodash';
import { MetaStore } from '@kubevious/easy-data-store';

export function setupNotificationsMeta(meta: MetaStore) {
    meta
    .table('notification_snooze')
        .key('kind')
            .settable()
        .key('feedback')
            .settable()
        .field('snooze')
}