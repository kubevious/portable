import { Promise } from "the-promise";
import { ILogger } from "the-logger";
import fs from "fs";
import Path from "path";
import _ from "the-lodash";
import { ClusterConfig, OS_LIST, ToolConfig } from "./types";
import { TOOL_CONFIGS } from "./tools";
import { exist } from "joi";

export class ClusterResolver {
  private _logger: ILogger;
  private _config: ClusterConfig;
  private _dataLocations: string[];
  private _toolLocations: string[];
  private _isRunningOnHost: boolean;

  constructor(logger: ILogger, config: ClusterConfig) {
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
        let server = this._config.cluster!.server;
        if (_.startsWith(server, "https://127.0.0.1:")) {
          this._config.cluster!.server = server.replace(
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
      })
      ;
  }

  private _registerDataFile(location: string) {
    let srcFilePath = _.get(this._config, location);
    this.logger.info("[_registerFile] probe: %s => %s", location, srcFilePath);

    if (!srcFilePath) {
      return;
    }

    let filePath = this._mapFile(srcFilePath, "/data");
    this._config.fileMappings[filePath] = {
      needWrite: false,
      os: {
        [OS_LIST.OS_DEFAULT]: srcFilePath,
      },
    };

    _.set(this._config, location, filePath);

    let exists = this._checkFile(filePath);
    if (!exists) {
      this._reportError('"' + filePath + '" not found.');
    }
  }

  private _registerTool(location: string) {
    let toolPath = _.get(this._config, location);
    this.logger.info("[_registerTool] probe: %s => %s", location, toolPath);
    if (!toolPath) {
      return;
    }

    let toolName;
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

    let toolConfig = TOOL_CONFIGS[toolName];
    if (toolConfig) {
      if (!this._config.imageTag) {
        if (toolConfig.imageTag) {
          this._config.imageTag = toolConfig.imageTag;
        }
      }
    }

    let filePath = this._mapFile(toolName, "/tools");
    let exists = this._checkFile(filePath);
    if (!exists) {
      this._reportError('Tool not found: "' + toolName + '"');
    }

    return this._valideToolConfig(toolName, toolConfig);
  }

  private _valideToolConfig(toolName: string, toolConfig: ToolConfig) {
    if (!toolConfig) {
      return;
    }

    this.logger.info("[_valideToolConfig] %s:", toolName, toolConfig);

    for (let configPath of _.keys(toolConfig.mappings)) {
      this._config.fileMappings[configPath] = toolConfig.mappings[configPath];

      let exists = this._checkFile(configPath);
      if (!exists) {
        this._reportError(toolName + ' config not found: "' + configPath + '"');
      }
    }
  }

  private _mapFile(srcFilePath: string, rootDir: string) {
    if (this._isRunningOnHost) {
      return srcFilePath;
    }
    srcFilePath = _.replace(srcFilePath, ":", "");
    srcFilePath = _.replace(srcFilePath, "\\", "/");
    let filePath = Path.join(rootDir, srcFilePath);
    return filePath;
  }

  private _reportError(msg: string) {
    this._config.ready = false;
    if (this._config.messages.length == 0) {
      this._config.messages.push(
        "Some configuration files or tools were not found."
      );
    }
    this._config.messages.push(msg);
  }

  private _checkFile(filePath: string) : boolean
  {
    let exists = fs.existsSync(filePath);
    this.logger.info("[_checkFile] %s , exists: %s", filePath, exists);
    return exists;
  }
}
