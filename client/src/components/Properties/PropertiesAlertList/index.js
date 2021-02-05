import React from 'react'
import AlertView from '../../Alerts/AlertView'

import BaseComponent from '../../../HOC/BaseComponent'

class PropertiesAlertList extends BaseComponent {
    clickDn = (dn) => {
        this.sharedState.set('selected_dn', dn)
        this.sharedState.set('auto_pan_to_selected_dn', true)
    }

    configureAlerts() {
        const { config } = this.props
        let alerts = []

        config.map((elem) => {
            alerts = [
                ...alerts,
                ...elem.targets.map((dn) => ({
                    dn,
                    id: elem.alert.source.id || 'Missing',
                    msg: elem.alert.msg,
                    severity: elem.alert.severity,
                    source: elem.alert.source,
                    uiKey: `${dn}-${elem.alert.severity}-${elem.alert.source.id}-${elem.alert.msg}`,
                })),
            ]
        })

        return alerts
    }

    render() {
        const parsedAlerts = this.configureAlerts()

        return (
            <AlertView
                alerts={parsedAlerts}
                clickDn={this.clickDn}
                groupPreset='message'
            />
        )
    }
}

export default PropertiesAlertList
