const yaml = require('js-yaml');
const _ = require("the-lodash");

module.exports = {
    target: {
        api: "autoscaling",
        kind: "HorizontalPodAutoscaler"
    },

    order: 35,

    kind: 'hpa',

    needAppScope: true,
    appNameCb: (item) => {
        var scaleTargetRef = _.get(item.config, 'spec.scaleTargetRef');
        if (!scaleTargetRef) {
            return null;
        }
        return scaleTargetRef.name;
    },


    handler: ({logger, scope, item, context, createK8sItem, createAlert, hasCreatedItems, appName, appInfo, app, appScope}) =>
    {
        if (!appName) {
            return null;
        }

        if (!appInfo) {
            var rawContainer = scope.fetchRawContainer(item, "Autoscalers");
            createK8sItem(rawContainer);
            createAlert('MissingApp', 'error', 'Could not find apps matching scaleTargetRef.');
            return;
        }

        var min = item.config.spec.minReplicas;
        var max = item.config.spec.maxReplicas;
        var replicasInfo = "[" + min + ", " + max + "]";

        createK8sItem(app);

        var appProps = appScope.properties;
        if (_.isNotNullOrUndefined(appProps['Replicas']))
        {
            appProps['Replicas'] += " " + replicasInfo;
        } 
        else 
        {
            appProps['Replicas'] = replicasInfo;
        }
        
    }
}


