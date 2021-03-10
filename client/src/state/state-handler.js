import _ from 'the-lodash'
import { FieldsSaver } from '../utils/save-fields';

import * as DnUtils from '@kubevious/helpers/dist/dn-utils';

class StateHandler {
    constructor(sharedState, diagramService) {
        if (!sharedState) {
            throw new Error("SharedState not provided");
        }
        if (!diagramService) {
            throw new Error("DiagramService not provided");
        }

        this._isTimeMachineDateSetScheduled = false;
        this._isTimeMachineDateDirty = false;

        this.sharedState = sharedState.user();
        this._service = diagramService;
        this._fieldsSaver = new FieldsSaver('Diagram')
        this._setup();
    }

    close()
    {
        this._service.close();
        this.sharedState.close();
    }

    _setup() {
        this.sharedState.set('is_loading', false)
        this.sharedState.set('is_error', false)
        this.sharedState.set('error', null)
        this.sharedState.set('diagram_expanded_dns', { 'root': true });


        this._handleDefaultParams()
        this._handleSelectedDnAutoExpandChange()
        this._handleSelectedDnChange()
        this._handleSelectedAlertsChange()
    }

    _handleDefaultParams() {
        const params = new URLSearchParams(window.location.search)

        const fields = this._fieldsSaver.decodeParams(params)

        const { sd, tme, tmtd, tmdt, tmd } = fields

        if (sd) {
            this.sharedState.set('selected_dn', sd)
            this.sharedState.set('auto_pan_to_selected_dn', true);
        }

        if (tme) {
            this.sharedState.set('time_machine_enabled', tme === 'true')
            if (!tmtd) {
                this.sharedState.set('time_machine_target_date', Date.parse(new Date()));
            }
        }

        if (tmtd) {
            const date = typeof tmtd === 'string' ? tmtd : Date.parse(tmtd)
            this.sharedState.set('time_machine_target_date', date)
        }

        if (tmdt) {
            const date = typeof tmdt === 'string' ? tmdt : Date.parse(tmdt)
            this.sharedState.set('time_machine_date_to', date)
        } else {
            this.sharedState.set('time_machine_date_to', null);
        }

        if (tmd) {
            this.sharedState.set('time_machine_duration', tmd)
        }
    }

    _handleSelectedDnAutoExpandChange()
    {
        this.sharedState.subscribe('selected_dn',
            ( selected_dn ) => {
                if (selected_dn) {
                    var dict = this.sharedState.get('diagram_expanded_dns');
                    var parts = DnUtils.splitDn(selected_dn);
                    var dn = parts[0];
                    for(var i = 1; i < parts.length - 1; i++)
                    {
                        dn = dn + '/' + parts[i];
                        dict[dn] = true;
                    }
                    this.sharedState.set('diagram_expanded_dns', dict);
                }
            });
    }

    _handleTimeMachineChange() {
        this.sharedState.subscribe(['time_machine_target_date'],
            () => {

                if (this._isTimeMachineDateSetScheduled) {
                    this._isTimeMachineDateDirty = true;
                    return;
                }

                this._triggerTimeMachine();
            })

        this.sharedState.subscribe(['time_machine_enabled', 'time_machine_date'],
            ({ time_machine_enabled, time_machine_date }) => {
                if (time_machine_enabled && time_machine_date) {
                    this._service.fetchHistorySnapshot(time_machine_date, (sourceData) => {

                        if (this.sharedState.get('time_machine_enabled') &&
                            (this.sharedState.get('time_machine_date') === time_machine_date ))
                        {
                            this.sharedState.set('diagram_data', sourceData);
                        }
                    })
                }
            })
    }

    _triggerTimeMachine()
    {
        this._isTimeMachineDateDirty = false;

        setTimeout(() => {
            const value = this.sharedState.get('time_machine_target_date');
            this.sharedState.set('time_machine_date', value);

            this._isTimeMachineDateSetScheduled = false;
            if (this._isTimeMachineDateDirty) {
                this._triggerTimeMachine();
            }

        }, 250);
    }

    _handleSelectedDnChange() {

        this.sharedState.subscribe(['selected_dn', 'time_machine_enabled', 'time_machine_date'],
            ({ selected_dn, time_machine_enabled, time_machine_date }) => {

                if (selected_dn) {
                    if (time_machine_enabled && time_machine_date) {
                        this._service.fetchHistoryProps(selected_dn, time_machine_date, (config) => {
                            this.sharedState.set('selected_object_props', config);
                        })

                        this._service.fetchHistoryAlerts(selected_dn, time_machine_date, (config) => {
                            this.sharedState.set('selected_raw_alerts', config);
                        })
                    }
                } else {
                    this.sharedState.set('selected_object_props', null);
                    this.sharedState.set('selected_raw_alerts', null);
                }
            });

    }

    _handleSelectedAlertsChange() {
        this.sharedState.subscribe(['selected_raw_alerts', 'selected_dn'],
            ({selected_raw_alerts, selected_dn}) => {
                if (selected_raw_alerts && selected_dn) {

                    var alerts = _.cloneDeep(selected_raw_alerts);

                    if (_.isPlainObject(alerts))
                    {
                        var newAlerts = [];
                        for(var dn of _.keys(alerts))
                        {
                            for(var alert of alerts[dn])
                            {
                                alert.dn = dn;
                                newAlerts.push(alert);
                            }
                        }
                        alerts = newAlerts
                    }
                    else
                    {
                        for(var alert of alerts)
                        {
                            if (!alert.dn)
                            {
                                alert.dn = selected_dn;
                            }
                        }
                    }

                    alerts = _.orderBy(alerts, ['dn', 'severity', 'msg']);

                    for(var alert of alerts)
                    {
                        alert.uiKey = alert.dn + '-' + alert.severity + '-' + alert.id + '-' + alert.msg;
                    }

                    this.sharedState.set('selected_object_alerts', alerts);
                } else {
                    this.sharedState.set('selected_object_alerts', null);
                }
            });
    }
    
}

export default StateHandler;
