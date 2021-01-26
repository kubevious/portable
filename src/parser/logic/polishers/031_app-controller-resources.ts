import _ from 'the-lodash';
import { PropertyValueWithUnit } from '../helpers/resources';
import { LogicParser } from '../parser-builder';

export default LogicParser()
    .order(31)
    .target({
        path: ["ns", "app"]
    })
    .handler(({ item, infraScope, helpers }) => {

        let perPodResourcesProps : Record<string, PropertyValueWithUnit> = {
        }
        for(let metric of helpers.resources.METRICS) {
            perPodResourcesProps[metric + ' ' + 'request'] = {
                value: 0,
                unit: helpers.resources.METRIC_UNITS[metric]
            }
        }

        for(let container of item.getChildrenByKind('cont'))
        {
            let contResourceProps = container.getProperties('resources');
            if (contResourceProps)
            {
                let contResource = <Record<string, PropertyValueWithUnit>> contResourceProps.config;
                for(let metric of helpers.resources.METRICS)
                {
                    let value = _.get(contResource, metric + ' ' + 'request');
                    if (value)
                    {
                        perPodResourcesProps[metric + ' ' + 'request'].value += value.value;
                    }
                }
            }
        }

        item.addProperties({
            kind: "key-value",
            id: "resources-per-pod",
            title: "Resources Per Pod",
            order: 8,
            config: perPodResourcesProps
        });

        // ***

        let multiplier = 0;
        let launcher = _.head(item.getChildrenByKind("launcher"));
        if (launcher) 
        {
            if (launcher.config.kind == 'Deployment' || 
                launcher.config.kind == 'StatefulSet')
            {
                multiplier = _.get(launcher.config, "spec.replicas", 1);
            }
            else if (launcher.config.kind == 'DaemonSet')
            {
                multiplier = infraScope.nodeCount;
            }
        }
        
        let usedResourcesProps : Record<string, PropertyValueWithUnit> = { }
        for(let metric of helpers.resources.METRICS)
        {
            const perPod = perPodResourcesProps[metric + ' ' + 'request'];
            usedResourcesProps[metric + ' ' + 'request'] = { 
                value: perPod.value * multiplier,
                unit: perPod.unit
            };
        }

        item.addProperties({
            kind: "key-value",
            id: "resources",
            title: "Resources",
            order: 7,
            config: usedResourcesProps
        });

        // ***
        let myUsedResources : Record<string, PropertyValueWithUnit> = {};
        let availableResources : Record<string, PropertyValueWithUnit> | null = null;
        if (launcher) 
        {
            if (launcher.config.kind == 'Deployment' || 
                launcher.config.kind == 'StatefulSet')
            {
                for(let metric of helpers.resources.METRICS)
                {
                    myUsedResources[metric] = usedResourcesProps[metric + ' ' + 'request'];
                }
                availableResources = infraScope.clusterResources;
            }
            else if (launcher.config.kind == 'DaemonSet')
            {
                for(let metric of helpers.resources.METRICS)
                {
                    myUsedResources[metric] = perPodResourcesProps[metric + ' ' + 'request'];
                }
                availableResources = infraScope.nodeResources;
            }
        }

        if (availableResources)
        {
            let clusterConsumptionProps : Record<string, PropertyValueWithUnit> = {};
            for(let metric of _.keys(myUsedResources))
            {
                let usedValue = myUsedResources[metric];
                let availValue = availableResources[metric];
                let consumption: number;
                if (!availValue) {
                    consumption = 0;
                } else {
                    consumption = usedValue.value / availValue.value;
                }
                clusterConsumptionProps[metric] = {
                    value: consumption,
                    unit: '%'
                }
                ;
            }

            item.addProperties({
                kind: "key-value",
                id: "cluster-consumption",
                title: "Cluster Consumption",
                order: 9,
                config: clusterConsumptionProps
            });
        }

    })
    ;