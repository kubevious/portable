const yaml = require('js-yaml');
const _ = require('the-lodash');
const fs = require('fs').promises;
const { exec } = require('child_process')

class ClusterEngine
{
    constructor(context) {
        this._context = context;
        this._logger = context.logger.sublogger('ClusterEngine');
        this._token = null;
        this._caData = null;

        this._clustersDict = {};
        this._clustersList = [];

        this._selectedClusterName = null;
        this._selectedClusterConfig = null;
    }

    get logger() {
        return this._logger;
    }

    init()
    {
        return this._loadConfigFile(process.env.KUBECONFIG)
            .then(config => {
                config = config || {};
                config.contexts = config.contexts || [];
                config.clusters = config.clusters || [];
                config.users = config.users || [];

                var usersDict = _.makeDict(config.users, x => x.name, x => x.user);
                var clustersDict = _.makeDict(config.clusters, x => x.name, x => x.cluster);

                this._clustersDict = _.makeDict(config.contexts, x => x.name, x => {
                    return this._buildClusterConfig(x, usersDict, clustersDict);
                });

                this._clustersList = _.values(this._clustersDict).map(x => ({
                    name: x.name,
                    kind: x.kind
                }));
                this._clustersList = _.orderBy(this._clustersList, x => x.name);
            });
    }

    _buildClusterConfig(contextConfig, usersDict, clustersDict)
    {
        var config = {
            name: contextConfig.name,
            cluster: clustersDict[contextConfig.context.cluster] || null,
            user: usersDict[contextConfig.context.user] || null,
        };
        config.kind = this._determineKind(config);
        return config;
    }

    _determineKind(config)
    {
        if (config.name == 'docker-for-desktop') {
            return 'docker';
        }
        if (config.name == 'minikube') {
            return 'minikube';
        }
        if (config.user)
        {
            if (config.user['auth-provider'])
            {
                if (config.user['auth-provider']['name'] == 'gcp')
                {
                    return 'gcp';
                }
            }
            if (config.user['exec'])
            {
                if (config.user['exec']['command'] == 'doctl')
                {
                    return 'do';
                }
            }
        }
        return 'k8s';
    }

    _loadConfigFile(fileName)
    {
        return fs.readFile(fileName, 'utf8')
            .then(content => {
                const doc = yaml.safeLoad(content);
                return doc;
            })
            .catch(reason => {
                this.logger.error('Failed to load %s. Details: ', fileName, reason);
                return null;
            });
    }

    fetchList() {
        return this._clustersList;
    }

    getActiveCluster() {
        var info = {
            name: this._selectedClusterName
        };
        if (this._selectedClusterConfig) {
            info.kind = this._selectedClusterConfig.kind;
        }
        return info;
    }

    setActiveCluster(clusterName) {
        if (this._selectedClusterName == clusterName) {
            return;
        }
        this._selectedClusterName = clusterName;
        this._selectedClusterConfig = this._clustersDict[clusterName] || null;

        this._context.parserContext.stopLoaders();

        if (!this._selectedClusterConfig) {
            return;
        }

        return this._context.parserContext.activateLoader(this._selectedClusterConfig);
    }
}

module.exports = ClusterEngine
