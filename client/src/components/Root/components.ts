import { Alerts } from '@kubevious/ui-alerts';
import { Diagram } from '@kubevious/ui-diagram';
import { Properties, Summary } from '@kubevious/ui-properties'

import { GoldenLayoutWindowInfo, GoldenLayoutLocation } from '@kubevious/ui-components';

export const components : GoldenLayoutWindowInfo[] = [
    {
        id: "summaryComponent",
        component: Summary,
        location: GoldenLayoutLocation.main,
        title: "Summary",
        skipClose: true,
        allowVerticalScroll: false,
    },
    {
        id: "universeComponent",
        component: Diagram,
        location: GoldenLayoutLocation.main,
        title: "Universe",
        skipClose: true,
    },
    {
        id: "propertiesComponent",
        component: Properties,
        location: GoldenLayoutLocation.right,
        title: "Properties",
        width: 25,
        allowVerticalScroll: true,
    },
    {
        id: "alertsComponent",
        component: Alerts,
        location: GoldenLayoutLocation.bottom,
        title: "Alerts",
        height: 20,
        allowVerticalScroll: true,
    }]
