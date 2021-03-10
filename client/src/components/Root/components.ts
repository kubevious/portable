import { Alerts } from '@kubevious/ui-alerts';
import { Diagram } from '@kubevious/ui-diagram';
import { RuleEditor, MarkerEditor } from '@kubevious/ui-rule-engine'
import { Properties, Summary } from '@kubevious/ui-properties'
import { Timeline } from '@kubevious/ui-time-machine'
import { GoldenLayoutLocation } from '../../types';

export const components = [
    {
        name: "Summary",
        component: Summary,
        location: GoldenLayoutLocation.main,
        title: "Summary",
        allowVerticalScroll: false,
    },
    {
        name: "Universe",
        component: Diagram,
        location: GoldenLayoutLocation.main,
        title: "Universe",
        skipClose: true,
    },
    {
        name: "Rule Editor",
        component: RuleEditor,
        location: GoldenLayoutLocation.main,
        title: "Rule Editor",
    },
    {
        name: "Marker Editor",
        component: MarkerEditor,
        location: GoldenLayoutLocation.main,
        title: "Marker Editor",
    },
    {
        name: "Properties",
        component: Properties,
        location: GoldenLayoutLocation.right,
        title: "Properties",
        width: 25,
        allowVerticalScroll: true,
    },
    {
        name: "Alerts",
        component: Alerts,
        location: GoldenLayoutLocation.bottom,
        title: "Alerts",
        allowVerticalScroll: true,
    },
    {
        name: "Timeline",
        component: Timeline,
        location: GoldenLayoutLocation.bottom,
        title: "Timeline",
        allowVerticalScroll: false,
    }]
