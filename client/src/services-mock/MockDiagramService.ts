import _ from "the-lodash"
import moment from "moment"

import { getRandomDnList } from "./utils"

import { ISharedState } from "@kubevious/ui-framework"

import { IDiagramService } from "@kubevious/ui-middleware"
import { MockRootApiService } from "./MockRootApiService"
import {
    SUMMARY_DATA,
    GRAPH_DATA,
    PROPERTIES_DATA,
    ALERTS_DATA,
    HISTORY_RANGE,
    HISTORY_GRAPH_DATA,
    HISTORY_PROPERTIES,
    HISTORY_ALERTS,
} from "../boot/diagramMockData"

export class MockDiagramService implements IDiagramService {
    private sharedState: ISharedState

    private dateInit: any
    private _intervals: any[] = []

    constructor(parent: MockRootApiService, sharedState: ISharedState) {
        this.dateInit = moment()
        this.sharedState = sharedState

        this.sharedState.set('summary', SUMMARY_DATA)

        this.sharedState.subscribe(
            ["selected_dn", "time_machine_enabled"],
            ({ selected_dn, time_machine_enabled }) => {
                if (selected_dn) {
                    if (!time_machine_enabled) {
                        this.fetchProperties(selected_dn, (data) => {
                            this.sharedState.set("selected_object_props", data)
                        })

                        this.fetchAlerts(selected_dn, (data) => {
                            this.sharedState.set("selected_raw_alerts", data)
                        })
                    }
                }
            }
        )
    }

    fetchHistoryTimeline() {}

    subscribeTimelinePreview() {}

    fetchHistoryTimelinePreview() {}

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

    fetchSearchResults(criteria, cb) {
        if (!criteria) {
            cb([])
            return
        }
        let res = getRandomDnList()
        let res2 = res.map((x) => ({
            dn: x,
        }))
        cb(res2)
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
            throw new Error("MISSING DATE")
        }
        dn !== "summary"
            ? cb(_.cloneDeep(HISTORY_PROPERTIES))
            : cb(_.cloneDeep(SUMMARY_DATA))
    }

    fetchHistoryAlerts(dn, date, cb) {
        if (!date) {
            throw new Error("MISSING DATE")
        }
        cb(_.cloneDeep(HISTORY_ALERTS))
    }

    fetchAutocompleteKeys(
        type: string,
        criteria: any,
        cb: (data: any) => any
    ): void {}

    fetchAutocompleteValues(
        type: string,
        criteria: any,
        cb: (data: any) => any
    ): void {}
}
