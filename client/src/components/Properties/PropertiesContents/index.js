import React from 'react'
import PropertiesCounters from '../PropertiesCounters'
import PropertiesObjectList from '../PropertiesObjectList'
import PropertiesAlertList from '../PropertiesAlertList'
import KeyValueList from '../KeyValueList'
import DnList from '../DnList'
import Config from '../Config'
import PropertiesTable from '../PropertiesTable'

const PropertiesContents = ({ group, dn }) => {

    switch (group.kind) {
        case 'counters':
            return <PropertiesCounters config={group.config} />
        case 'object-list':
            return <PropertiesObjectList config={group.config} />
        case 'alert-target-list':
            return <PropertiesAlertList config={group.config} />
        case 'key-value':
            return <KeyValueList config={group.config} />
        case 'dn-list':
            return <DnList config={group.config} />
        case 'yaml':
            return <Config config={group.config} language={group.kind} dn={dn} />
        case 'table':
            return <PropertiesTable config={group.config} />
        default:
            return <div>No data presented</div>
    }
}

export default PropertiesContents
