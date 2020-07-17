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

                this._clustersDict = _.makeDict(config.contexts, x => x.name, x => ({
                    name: x.name,
                    cluster: clustersDict[x.context.cluster] || null,
                    user: usersDict[x.context.user] || null,
                }));

                this._clustersList = _.values(this._clustersDict).map(x => ({
                    name: x.name
                }));
                this._clustersList = _.orderBy(this._clustersList, x => x.name);
            });
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
        return {
            name: this._selectedClusterName
        };
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
