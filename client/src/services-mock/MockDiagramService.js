import _ from 'the-lodash'
import moment from 'moment'
import {
    ALERTS_DATA,
    GRAPH_DATA,
    HISTORY_GRAPH_DATA,
    HISTORY_ALERTS,
    HISTORY_PROPERTIES,
    HISTORY_RANGE,
    PROPERTIES_DATA,
    DN_LIST,
    SUMMARY_DATA,
} from '../boot/diagramMockData'

class MockDiagramService {
    constructor(sharedState) {
        this.dateInit = moment()
        this.sharedState = sharedState

        this.sharedState.set('summary', SUMMARY_DATA)

        this.sharedState.subscribe(
            ['selected_dn', 'time_machine_enabled'],
            ({ selected_dn, time_machine_enabled }) => {
                if (selected_dn) {
                    if (!time_machine_enabled) {
                        this.fetchProperties(selected_dn, (data) => {
                            this.sharedState.set('selected_object_props', data)
                        })

                        this.fetchAlerts(selected_dn, (data) => {
                            this.sharedState.set('selected_raw_alerts', data)
                        })
                    }
                }
            }
        )
    }

    close() {
        for (let i of this._intervals) {
            clearInterval(i)
        }
        this._intervals = []
    }

    fetchDiagram(cb) {
        cb(GRAPH_DATA)
    }

    fetchProperties(dn, cb) {
        setTimeout(() => {
            cb(_.cloneDeep(PROPERTIES_DATA))
        }, 200)
    }

    fetchAlerts(dn, cb) {
        setTimeout(() => {
            cb(_.cloneDeep(ALERTS_DATA))
        }, 200)
    }

    getRandomDnList() {
        const count = this._randomInt(10) + 3
        var res = []

        for (var i = 0; i < count; i++) {
            var dn = DN_LIST[this._randomInt(DN_LIST.length)]
            res.push(dn)
        }
        return res
    }

    fetchSearchResults(criteria, cb) {
        if (!criteria) {
            cb([])
            return
        }
        var res = this.getRandomDnList()
        res = res.map((x) => ({
            dn: x,
        }))
        cb(res)
    }

    _randomInt(x) {
        return Math.floor(Math.random() * x)
    }

    fetchHistoryRange(cb) {
        cb(HISTORY_RANGE)
    }

    fetchHistorySnapshot(date, cb) {
        if (!date) {
            throw new Error('MISSING DATE')
        }
        cb(HISTORY_GRAPH_DATA)
    }

    fetchHistoryProps(dn, date, cb) {
        if (!date) {
            throw new Error('MISSING DATE')
        }
        dn !== 'summary'
            ? cb(_.cloneDeep(HISTORY_PROPERTIES))
            : cb(_.cloneDeep(SUMMARY_DATA))
    }

    fetchHistoryAlerts(dn, date, cb) {
        if (!date) {
            throw new Error('MISSING DATE')
        }
        cb(_.cloneDeep(HISTORY_ALERTS))
    }
}

export default MockDiagramService
