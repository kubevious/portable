import _ from 'the-lodash';
import { PropertyValueWithUnit } from '../helpers/resources';
import { LogicParser } from '../parser-builder';

export default LogicParser()
    .order(32)
    .target({
        path: ["ns"]
    })
    .handler(({ scope, item, logger, helpers }) => {

        let usedResourcesProps : Record<string, PropertyValueWithUnit>  = {
        }
        let clusterConsumptionProps : Record<string, PropertyValueWithUnit>  = {};
        let appsByConsumptionTable = {
            headers: <any[]>[
                {
                    id: 'dn',
                    label: 'Application',
                    kind: 'shortcut'
                }
            ],
            rows: <any[]>[]
        }
        let appsByConsumptionDict : Record<string, {
            dn: string,
            max: number,
            metrics: Record<string, number>
        }>  = {};
        for(let metric of helpers.resources.METRICS) {
            usedResourcesProps[metric + ' ' + 'request'] = {
                value: 0,
                unit: helpers.resources.METRIC_UNITS[metric]
            }
            clusterConsumptionProps[metric] = {
                value: 0,
                unit: '%'
            };
            appsByConsumptionTable.headers.push(metric);
        }

        for(let app of item.getChildrenByKind('app'))
        {
            let appResourcesProps = app.getProperties('resources');
            if (appResourcesProps)
            {
                let appResources = <Record<string, PropertyValueWithUnit>>appResourcesProps.config;
                for(let metric of helpers.resources.METRICS)
                {
                    let value = _.get(appResources, metric + ' ' + 'request');
                    if (value)
                    {
                        usedResourcesProps[metric + ' ' + 'request'].value += value!.value;
                    }
                }
            }

            let appUsedResourcesProps = app.getProperties('cluster-consumption');
            if (appUsedResourcesProps)
            {
                let appUsedResources : Record<string, PropertyValueWithUnit> = appUsedResourcesProps.config;
                for(let metric of helpers.resources.METRICS)
                {
                    let value = appUsedResources[metric];
                    if (value)
                    {
                        clusterConsumptionProps[metric].value += value.value;

                        if (!appsByConsumptionDict[app.dn]) {
                            appsByConsumptionDict[app.dn] = {
                                dn: app.dn,
                                max: 0,
                                metrics: {}
                            }
                        }
                        appsByConsumptionDict[app.dn].metrics[metric] = value.value;
                    }
                }
            }
        }

        item.addProperties({
            kind: "key-value",
            id: "resources",
            title: "Resources",
            order: 6,
            config: usedResourcesProps
        });

        item.addProperties({
            kind: "key-value",
            id: "cluster-consumption",
            title: "Cluster Consumption",
            order: 7,
            config: clusterConsumptionProps
        });

        /********/

        for(let appConsumption of _.values(appsByConsumptionDict))
        {
            for(let metric of helpers.resources.METRICS)
            {
                if (_.isNullOrUndefined(appConsumption.metrics[metric]))
                {
                    appConsumption.metrics[metric] = 0;
                }
            }
            appConsumption.max = _.max(helpers.resources.METRICS.map(metric => appConsumption.metrics[metric]))!;
        }

        appsByConsumptionTable.rows = _.orderBy(_.values(appsByConsumptionDict), x => x.max, 'desc').map(x => {
            let row : Record<string, any> = {
                dn: x.dn
            }
            for(let metric of helpers.resources.METRICS)
            {
                let value = x.metrics[metric];
                if (!value) {
                    value = 0;
                }
                row[metric] = {
                    value: value,
                    unit: '%'
                };
            }
            return row;
        });
        
        item.addProperties({
            kind: "table",
            id: "app-consumption",
            title: "Application Consumption",
            order: 8,
            config: appsByConsumptionTable
        });

    })
    ;