import { Promise } from "the-promise";
import { ILogger } from "the-logger";
import fs from "fs";
import Path from "path";
import _ from "the-lodash";

export enum OS_LIST {
  OS_MAC = "Mac OS X",
  OS_LINUX = "Linux",
  OS_WIN = "Windows",
  OS_DEFAULT = "default",
}

export default class ClusterResolver {
  private _logger: ILogger;
  private _config: Record<string | number, any>;
  private _dataLocations: string[];
  private _toolLocations: string[];
  private _toolConfigs: any;
  private _isRunningOnHost: boolean;
  constructor(logger: ILogger, config: Record<string | number, any>) {
    this._logger = logger;
    this._config = config;

    this._dataLocations = [
      "cluster['certificate-authority']",
      "user['client-certificate']",
      "user['client-key']",
    ];
    this._toolLocations = [
      "user.exec.command",
      "user['auth-provider'].config['cmd-path']",
    ];

    this._toolConfigs = {
      doctl: {
        imageTag: "do",
        mappings: {
          "/root/.config/doctl/config.yaml": {
            needWrite: false,
            os: {
              [OS_LIST.OS_DEFAULT]: "~/.config/doctl/config.yaml",
              [OS_LIST.OS_MAC]: "~/Library/Application\\ Support/doctl/config.yaml",
              [OS_LIST.OS_WIN]: "%USERPROFILE%/AppData/Local/doctl/config/config.yaml",
            },
          },
        },
      },
      gcloud: {
        imageTag: "gcp",
        mappings: {
          "/root/.config/gcloud": {
            needWrite: true,
            os: {
              [OS_LIST.OS_DEFAULT]: "~/.config/gcloud",
              [OS_LIST.OS_WIN]: "%USERPROFILE%/AppData/Roaming/gcloud",
            },
          },
        },
      },
      aws: {
        imageTag: "aws",
        mappings: {
          "/root/.aws/credentials": {
            needWrite: false,
            os: {
              [OS_LIST.OS_DEFAULT]: "~/.aws/credentials",
              [OS_LIST.OS_WIN]: "%USERPROFILE%/.aws/credentials",
            },
          },
        },
      },
    };

    this._toolConfigs.gcloud["cmd"] = this._toolConfigs["gcloud"];

    this._isRunningOnHost = process.env.KUBEVIOUS_ON_HOST == "true";
  }

  get logger() {
    return this._logger;
  }

  resolve() {
    this._config.ready = true;
    this._config.messages = [];
    this._config.fileMappings = {};
    return Promise.resolve()
      .then(() => {
        if (this._isRunningOnHost) {
          return;
        }
        console.log(this._config, _.startsWith(server, "https://127.0.0.1:"));
        var server = this._config.cluster.server;
        if (_.startsWith(server, "https://127.0.0.1:")) {
          this._config.cluster.server = server.replace(
            "https://127.0.0.1:",
            "https://host.docker.internal:"
          );
          this._config.hostOverride = "127.0.0.1";
        }
      })
      .then(() => {
        return Promise.serial(this._dataLocations, (x) =>
          this._registerDataFile(x)
        );
      })
      .then(() => {
        return Promise.serial(this._toolLocations, (x) =>
          this._registerTool(x)
        );
      });
  }

  _registerDataFile(location: string) {
    var srcFilePath = _.get(this._config, location);
    this.logger.info("[_registerFile] probe: %s => %s", location, srcFilePath);

    if (!srcFilePath) {
      return;
    }

    var filePath = this._mapFile(srcFilePath, "/data");
    this._config.fileMappings[filePath] = {
      needWrite: false,
      os: {
        [OS_LIST.OS_DEFAULT]: srcFilePath,
      },
    };

    _.set(this._config, location, filePath);

    var exists = fs.existsSync(filePath);
    if (!exists) {
      this._reportError('"' + filePath + '" not found.');
    }
  }

  _registerTool(location: string) {
    var toolPath = _.get(this._config, location);
    this.logger.info("[_registerTool] probe: %s => %s", location, toolPath);
    if (!toolPath) {
      return;
    }

    var toolName;
    if (toolPath.includes("\\")) {
      toolName = Path.win32.basename(toolPath);
    } else {
      toolName = Path.basename(toolPath);
    }
    this.logger.info("[_registerTool] toolName: %s => %s", location, toolName);
    this._config.toolMappings[toolPath] = toolName;

    if (this._isRunningOnHost) {
      return;
    }

    var toolConfig = this._toolConfigs[toolName];
    if (toolConfig) {
      if (!this._config.imageTag) {
        if (toolConfig.imageTag) {
          this._config.imageTag = toolConfig.imageTag;
        }
      }
    }

    var filePath = this._mapFile(toolName, "/tools");
    var exists = fs.existsSync(filePath);
    if (!exists) {
      this._reportError('Tool not found: "' + toolName + '"');
    }

    return this._valideToolConfig(toolName, toolConfig);
  }

  _valideToolConfig(toolName: string, toolConfig: any) {
    if (!toolConfig) {
      return;
    }

    this.logger.info("[_valideToolConfig] %s:", toolName, toolConfig);

    for (var configPath of _.keys(toolConfig.mappings)) {
      this._config.fileMappings[configPath] = toolConfig.mappings[configPath];

      var exists = fs.existsSync(configPath);
      if (!exists) {
        this._reportError(toolName + ' config not found: "' + configPath + '"');
      }
    }
  }

  _mapFile(srcFilePath: string, rootDir: string) {
    if (this._isRunningOnHost) {
      return srcFilePath;
    }
    srcFilePath = _.replace(srcFilePath, ":", "");
    srcFilePath = _.replace(srcFilePath, "\\", "/");
    var filePath = Path.join(rootDir, srcFilePath);
    return filePath;
  }

  _reportError(msg: string) {
    this._config.ready = false;
    if (this._config.messages.length == 0) {
      this._config.messages.push(
        "Some configuration files or tools were not found."
      );
    }
    this._config.messages.push(msg);
  }
}

module.exports = ClusterResolver;
