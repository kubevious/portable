import { MetaStore } from '@kubevious/easy-data-store';

export function setupMarkersMeta(meta: MetaStore) {
    meta
    .table('markers')
        .key('name')
            .settable()
        .field('shape')
        .field('color')
        .field('propagate')
            .from(value => value ? true : false)

    .table('marker_items')
        .key('id')
        .field('marker_name')
        .field('dn')
}