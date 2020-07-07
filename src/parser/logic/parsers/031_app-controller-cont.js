const _ = require("the-lodash");
const yaml = require('js-yaml');

module.exports = {

    targetKind: 'logic',

    target: {
        path: ["ns", "app", "launcher"]
    },

    order: 31,

    needNamespaceScope: true,

    handler: ({scope, item, logger, context, createItem, createAlert, namespaceScope}) =>
    {
        var app = item.parent;
        var appScope = app.scope;

        // Normal Containers 
        {
            var containersConfig = _.get(item.config, 'spec.template.spec.containers');
            if (!containersConfig) {
                containersConfig = [];
            }
            appScope.properties['Container Count'] = containersConfig.length;
            if (_.isArray(containersConfig)) {
                for(var containerConfig of containersConfig)
                {
                    processContainer(containerConfig, "cont");
                }
            }
        }

        // Init Containers 
        {
            var containersConfig = _.get(item.config, 'spec.template.spec.initContainers');
            if (!containersConfig) {
                containersConfig = [];
            }
            appScope.properties['Init Container Count'] = containersConfig.length;
            if (_.isArray(containersConfig)) {
                for(var containerConfig of containersConfig)
                {
                    processContainer(containerConfig, "initcont");
                }
            }
        }


        /** HELPERS **/

        function processContainer(containerConfig, kind)
        {
            var container = createItem(app, containerConfig.name, { kind: kind });
            scope.setK8sConfig(container, containerConfig);

            if (containerConfig.image) {
                var image = containerConfig.image;
                var imageTag;
                var i = image.indexOf(':');
                var repository = 'docker';
                if (i != -1) {
                    imageTag = image.substring(i + 1);
                    image = image.substring(0, i);
                } else {
                    imageTag = 'latest';
                }

                var imageName = image;
                i = image.lastIndexOf('/');
                if (i != -1) {
                    repository = image.substring(0, i);
                    imageName = image.substring(i + 1);
                }

                var imageItem = container.fetchByNaming("image", image);
                imageItem.addProperties({
                    kind: "key-value",
                    id: "properties",
                    title: "Properties",
                    order: 10,
                    config: {
                        name: imageName,
                        tag: imageTag,
                        fullName: containerConfig.image,
                        repository: repository
                    }
                });  

            }

            var envVars = {
            }

            if (containerConfig.env) {
                for(var envObj of containerConfig.env) {
                    var value = null;
                    if (envObj.value) {
                        value = envObj.value;
                    } else if (envObj.valueFrom) {
                        value = "<pre>" + yaml.safeDump(envObj.valueFrom) + "</pre>";
                    }
                    envVars[envObj.name] = value;
                }
            }

            if (containerConfig.envFrom) {
                for(var envFromObj of containerConfig.envFrom) {
                    if (envFromObj.configMapRef) {
                        var configMapScope = findAndProcessConfigMap(container, envFromObj.configMapRef.name, true);
                        if (configMapScope) {
                            if (configMapScope.config.data) {
                                for(var dataKey of _.keys(configMapScope.config.data)) {
                                    envVars[dataKey] = configMapScope.config.data[dataKey];
                                }
                            } else {
                                createAlert("EmptyConfig", "warn", 'ConfigMap has no data: ' + envFromObj.configMapRef.name);
                            }
                        }
                    }
                }
            }


            if (_.keys(envVars).length > 0) {
                container.addProperties({
                    kind: "key-value",
                    id: "env",
                    title: "Environment Variables",
                    order: 10,
                    config: envVars
                });    
            }

            if (_.isArray(containerConfig.ports)) {
                for(var portConfig of containerConfig.ports) {
                    var portName = portConfig.protocol + "-" + portConfig.containerPort;
                    if (portConfig.name) {
                        portName = portConfig.name + " (" + portName + ")";
                    }
                    var portItem = container.fetchByNaming("port", portName);
                    scope.setK8sConfig(portItem, portConfig);

                    var portConfigScope = {
                        name: portConfig.name,
                        containerName: containerConfig.name,
                        portItem: portItem,
                        containerItem: container
                    };

                    appScope.ports[portConfig.name] = portConfigScope;
                    appScope.ports[portConfig.containerPort] = portConfigScope;
                }
            }

        }
        
        function findAndProcessConfigMap(parent, name, markUsedBy, isOptional)
        {
            var configMapScope = namespaceScope.items.get('ConfigMap', name);
            if (configMapScope)
            {
                var configmap = parent.fetchByNaming("configmap", name);
                scope.setK8sConfig(configmap, configMapScope.config);
                if (markUsedBy) {
                    configMapScope.markUsedBy(configmap);
                }
            }
            else
            {
                if (!isOptional) {
                    createAlert("MissingConfig", "error", 'Could not find ConfigMap ' + name);
                }
            }
            return configMapScope;
        }
    }
}
