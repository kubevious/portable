import yaml from "js-yaml";
import { ILogger } from "the-logger";
import _ from "the-lodash";
import { Promise } from "the-promise";
import { Context } from "../context";
import { Cluster, Config, K8config, Body } from "../types";
const fs = require("fs").promises;
import { ClusterResolver, OS_LIST } from "./resolver";

export class ClusterEngine {
  private _context: Context;
  private _logger: ILogger;
  private _clustersDict: Record<string | number, any>;
  private _clustersList: Cluster[];
  private _selectedClusterConfig: Cluster | null;
  constructor(context: Context) {
    this._context = context;
    this._logger = context.logger.sublogger("ClusterEngine");

    this._clustersDict = {};
    this._clustersList = [];

    this._selectedClusterConfig = null;
  }

  get logger() {
    return this._logger;
  }

  init() {
    let configFilePath = process.env.KUBECONFIG || "~/.kube/config";
    return this._loadConfigFile(configFilePath).then((data: Config) => {
      return this._setConfig(data);
    });
  }

  private _setConfig(config: Config) {
    return Promise.resolve()
      .then(() => {
        config = config || {};
        config.contexts = config.contexts || [];
        config.clusters = config.clusters || [];
        config.users = config.users || [];

        let usersDict = _.makeDict(
          config.users,
          (x) => x.name,
          (x) => x.user
        );
        let clustersDict = _.makeDict(
          config.clusters,
          (x) => x.name,
          (x) => x.cluster
        );

        this._clustersDict = _.makeDict(
          config.contexts,
          (x) => x.name,
          (x) => {
            return this._buildClusterConfig(x, usersDict, clustersDict);
          }
        );
      })
      .then(() => {
        return Promise.serial(_.values(this._clustersDict), (x) =>
          this._processCluster(x)
        );
      })
      .then(() => {
        this._clustersList = _.values(this._clustersDict).map((x: any) => ({
          // Cluster
          name: x.name,
          kind: x.kind,
          ready: x.ready,
        }));
        this._clustersList = _.orderBy(this._clustersList, (x) => x.name);
      });
  }

  private _buildClusterConfig(
    contextConfig: any,
    usersDict: Record<string | number, any>,
    clustersDict: Record<string | number, any>
  ) {
    let config = {
      name: contextConfig.name,
      cluster:
        clustersDict[contextConfig.context.user] ||
        clustersDict[contextConfig.context.cluster] ||
        null,
      user: usersDict[contextConfig.context.user] || null,
      imageTag: null,
      toolMappings: {},
      kind: "", // "docker" | "minikube" | "aks" | "gcp" | "do" | "aws" | "k8s"
    };
    config.kind = this._determineKind(config);
    return config;
  }

  private _processCluster(clusterConfig: Record<string | number, any>) {
    this.logger.info("[_processCluster] ", clusterConfig);
    let resolver = new ClusterResolver(this.logger, clusterConfig);
    return resolver.resolve().then(() => {
      this.logger.info("[_processCluster] PostResolve: ", clusterConfig);
    });
  }

  private _determineKind(config: K8config) {
    const url = new URL(config.cluster.server);

    if (config.name == "docker-for-desktop") {
      return "docker";
    }
    if (config.name == "minikube") {
      return "minikube";
    }

    if (url.origin.endsWith("azmk8s.io")) {
      return "aks";
    }

    if (config.user) {
      if (config.user["auth-provider"]) {
        if (config.user["auth-provider"]["name"] == "gcp") {
          return "gcp";
        }
      }
      if (config.user["exec"]) {
        if (config.user["exec"]["command"] == "doctl") {
          return "do";
        }

        if (config.user["exec"]["command"] == "aws") {
          return "aws";
        }
      }
    }
    return "k8s";
  }

  private _loadConfigFile(fileName: string) {
    return fs
      .readFile(fileName, "utf8")
      .then((content: string) => {
        const doc = yaml.safeLoad(content);
        return doc;
      })
      .catch((reason: string) => {
        this.logger.error("Failed to load %s. Details: ", fileName, reason);
        console.log("Make sure that ~/.kube/config file is properly mounted.");
        console.log("Visit https://github.com/kubevious/portable for details");
        return null;
      });
  }

  createConfig(data: Body) {
    const configData: Config | {} = yaml.safeLoad(data.config) || {};
    return this._setConfig(configData).then(() => ({
      clusters: this._clustersList,
      success: true,
    }));
  }

  fetchList() {
    return this._clustersList;
  }

  fetchDetails(name: string) {
    let clusterConfig = this._clustersDict[name];
    if (!clusterConfig) {
      return null;
    }

    let details = {
      name: clusterConfig.name,
      kind: clusterConfig.kind,
      ready: clusterConfig.ready,
      messages: clusterConfig.messages,
      runCommands: {},
    };

    if (!clusterConfig.ready) {
      details.runCommands = this._generateRunCommands(clusterConfig);
    }

    return details;
  }

  private _generateRunCommands(clusterConfig: Record<string | number, any>) {

    this.logger.info("[_generateRunCommands] ClusterConfig: ", clusterConfig);

    let osConfigs : Record<string, string> = {};
    osConfigs[OS_LIST.OS_DEFAULT] = "~/.kube/config";
    osConfigs[OS_LIST.OS_WIN] = "%USERPROFILE%/.kube/config";

    let mappings = {
      "/root/.kube/config": {
        needWrite: false,
        os: osConfigs
      },
    };

    this.logger.info("[_generateRunCommands] Initial Mappings: ", mappings);

    mappings = _.defaults(mappings, clusterConfig.fileMappings);

    this.logger.info("[_generateRunCommands] Combined Mappings: ", mappings);

    let commands = [];

    for (let x of Object.values(OS_LIST)) {
      commands.push({
        os: x,
        command: this._generateRunCommandForOS(x, mappings, clusterConfig),
      });
    }

    this.logger.info("[_generateRunCommands] Commands: ", commands);

    return commands;
  }

  private _generateRunCommandForOS(
    os: string,
    mappings: any,
    clusterConfig: Record<string | number, any>
  ) {
    this.logger.info("[_generateRunCommandForOS] mappings: ", mappings);

    let separator = "\\";
    if (os == OS_LIST.OS_WIN) {
      separator = "^";
    }
    let cmd =
      `docker run --rm -it ${separator}\n` + `  -p 5001:5001 ${separator}\n`;

    for (let x of _.keys(mappings)) {
      let mappingInfo = mappings[x];
      let sourcePath = mappingInfo.os[os];
      if (!sourcePath) {
        sourcePath = mappingInfo.os[OS_LIST.OS_DEFAULT];
      }
      if (sourcePath) {
        let binding = sourcePath + ":" + x;
        if (!mappingInfo.needWrite) {
          binding += ":ro";
        }
        if (binding.includes("%")) {
          binding = '"' + binding + '"';
        }
        cmd += `  -v ${binding} ${separator}\n`;
      }
    }

    cmd += "  kubevious/portable";
    if (clusterConfig.imageTag) {
      cmd += ":" + clusterConfig.imageTag;
    }

    return cmd;
  }

  getActiveCluster() {
    if (this._selectedClusterConfig) {
      return {
        name: this._selectedClusterConfig.name,
        kind: this._selectedClusterConfig.kind,
      };
    }
    return null;
  }

  setActiveCluster(clusterName: string) {
    let config = this._clustersDict[clusterName] || null;
    if (!config) {
      return {
        success: false,
        messages: ["Unknown cluster: " + clusterName],
      };
    }
    if (!config.ready) {
      return {
        success: false,
        messages: config.messages,
        runCommands: this._generateRunCommands(config),
      };
    }

    this._selectedClusterConfig = config;

    this._context.websocket.update(
      { kind: "active-cluster" },
      this.getActiveCluster()
    );

    this._context.parserContext.stopLoaders();
    return this._context.parserContext.activateLoader(
      this._selectedClusterConfig
    );
  }
}
