import _ from "the-lodash";
import { Promise } from "the-promise";
import { ILogger } from "the-logger";

import { writeFileSync } from "fs";
import * as Path from "path";

import { Context } from "../context";

import moment from "moment";

export type ReadyHandler = (isReady: boolean) => void;

export class K8sLoader {
  private _context: Context;
  private _logger: ILogger;

  private _client: any;
  private _apiTargets: Record<string, any> = {};
  private _readyHandler?: ReadyHandler;

  constructor(context: Context, client: any, info: any) {
    this._logger = context.logger.sublogger("ConcreteRegistry");
    this._context = context;

    this._client = client;

    this.logger.info("Constructed");

    this._setupApiTargets();
  }

  get logger() {
    return this._logger;
  }

  stop() {
    if (this._client) {
      this._client.close();
    }
  }

  _setupApiTargets() {
    for (let targetAccessor of this._getTargets()) {
      let targetInfo = {
        id: [targetAccessor.apiName, targetAccessor.kindName].join("-"),
        accessor: targetAccessor,
        allFetched: false,
        canIgnore: false,
        connectDate: null,
      };
      this._apiTargets[targetInfo.id] = targetInfo;
    }
  }

  setupReadyHandler(handler: ReadyHandler) {
    this._readyHandler = handler;
    this._reportReady();
  }

  _getTargets(): any[] {
    let groups = this._context.k8sParser.getAPIGroups();
    let targetInfos: { api: string | null; kind: string }[] = [];
    for (let group of groups) {
      for (let kind of group.kinds) {
        targetInfos.push({
          api: group.api,
          kind: kind,
        });
      }
    }
    this.logger.info("Targets: ", targetInfos);

    let targets = targetInfos.map((x) => {
      return this._client.client(x.kind, x.api);
    });

    targets = targets.filter((x) => x);

    return targets;
  }

  run(): Promise<any> {
    setInterval(() => {
      this._reportReady();
    }, 1000);

    return Promise.serial(_.values(this._apiTargets), (x) => {
      return this._watch(x);
    });
  }

  _watch(targetInfo: any) {
    this.logger.info("Watching %s...", targetInfo.id);
    return targetInfo.accessor.watchAll(
      null,
      (action: string, obj: any) => {
        this._logger.verbose(
          "[_watch] %s ::: %s %s",
          targetInfo.id,
          action,
          obj.kind
        );
        this._logger.verbose("%s %s", action, obj.kind);
        this._logger.silly("%s %s :: ", action, obj.kind, obj);
        let isPresent = this._parseAction(action);

        // this._debugSaveToMock(isPresent, obj);
        this._handle(isPresent, obj);
      },
      () => {
        this._logger.info("[_watch] Connected: %s", targetInfo.id);
        targetInfo.connectDate = new Date();
        this._reportReady();
      },
      (resourceAccessor: any, data: any) => {
        this._logger.info("[_watch] Disconnected: %s", targetInfo.id);
        targetInfo.connectDate = null;
        if (data.status) {
          targetInfo.canIgnore = true;
        }
        this._reportReady();
      }
    );
  }

  _isTargetReady(targetInfo: any): boolean {
    this.logger.verbose("[_isTargetReady] %s", targetInfo.id);

    if (targetInfo.canIgnore) {
      this.logger.silly(
        "[_isTargetReady] %s, canIgnore: %s",
        targetInfo.id,
        targetInfo.canIgnore
      );
      return true;
    }

    if (!targetInfo.connectDate) {
      this.logger.silly("[_isTargetReady] %s, NO connectDate", targetInfo.id);
      return false;
    }

    this.logger.silly(
      "[_isTargetReady] %s, date: %s",
      targetInfo.id,
      targetInfo.connectDate
    );
    let now = moment(new Date());
    let connectDate = moment(targetInfo.connectDate);
    let duration = moment.duration(now.diff(connectDate));
    let seconds = duration.asSeconds();
    this.logger.silly(
      "[_isTargetReady] %s, seconds: %s",
      targetInfo.id,
      seconds
    );

    if (seconds > 5) {
      this.logger.verbose("[_isTargetReady] %s, is ready", targetInfo.id);

      return true;
    }

    this.logger.silly("[_isTargetReady] %s, is not ready", targetInfo.id);
    return false;
  }

  _isReady(): boolean {
    for (let targetInfo of _.values(this._apiTargets)) {
      let isReady = this._isTargetReady(targetInfo);
      if (!isReady) {
        return false;
      }
    }
    return true;
  }

  _reportReady(): void {
    if (!this._readyHandler) {
      return;
    }
    this._readyHandler!(this._isReady());
  }

  _handle(isPresent: boolean, obj: any): void {
    this._logger.verbose("Handle: %s, present: %s", obj.kind, isPresent);
    this._context.k8sParser.parse(isPresent, obj);
  }

  _parseAction(action: string): boolean {
    if (action == "ADDED" || action == "MODIFIED") {
      return true;
    }
    if (action == "DELETED") {
      return false;
    }
    return false;
  }

  _debugSaveToMock(isPresent: boolean, obj: any) {
    if (isPresent) {
      let parts = [obj.apiVersion, obj.kind, obj.namespace, obj.metadata.name];
      parts = parts.filter((x) => x);
      let fileName = parts.join("-");
      fileName = fileName.replace(/\./g, "-");
      fileName = fileName.replace(/\//g, "-");
      fileName = fileName.replace(/\\/g, "-");
      fileName = fileName + ".json";
      fileName = Path.resolve(__dirname, "..", "..", "mock", "data", fileName);
      this._logger.info(fileName);
      writeFileSync(fileName, JSON.stringify(obj, null, 4));
    }
  }
}
