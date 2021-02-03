import { ILogger } from "the-logger/dist";
import { Context } from "vm";
import { ConcreteItem } from "./concrete/item";
import { Helpers } from "./logic/helpers";
import { LogicItem } from "./logic/item";
import { LogicScope } from "./logic/scope";
import { AppScope } from "./logic/scope/app";
import { InfraScope } from "./logic/scope/infra";
import { ItemScope } from "./logic/scope/item";
import { NamespaceScope } from "./logic/scope/namespace";

export interface BaseParserExecutor {
  name: string;
  order: number;
  targetInfo: string;

  execute(scope: LogicScope): void;
}

export interface AlertInfo {
  kind: string;
  severity: string;
  msg: string;
}

export interface BaseParserBuilder {
  _extract(): BaseParserInfo[];
}

export interface BaseParserInfo {
  targetKind: string;
  order: number;
  target?: any;
}

export interface ConcreteTarget {
  api: string;
  kind: string;
}

export interface ConcreteParserInfo extends BaseParserInfo {
  target: null | ConcreteTarget;

  needAppScope?: boolean;
  canCreateAppIfMissing?: boolean;
  appNameCb?: (item: ConcreteItem) => string;

  kind?: string | ((item: ConcreteItem) => string);

  needNamespaceScope?: boolean;
  namespaceNameCb?: (item: ConcreteItem) => string;

  handler?: (args: ConcreteProcessorHandlerArgs) => void;
}

export interface CreateConcreteItemParams {
  kind?: string | ((item: ConcreteItem) => string);
  order?: number;
}

export interface ConcreteProcessorHandlerArgs {
  readonly logger: ILogger;
  readonly context: Context;
  readonly scope: LogicScope;
  readonly item: ConcreteItem;
  readonly infraScope: InfraScope;
  readonly helpers: Helpers;
  readonly namespaceScope: NamespaceScope;
  readonly namespaceName: string;
  readonly app: LogicItem;
  readonly appScope: AppScope;
  readonly appName: string;

  hasCreatedItems(): boolean;
  createItem(
    parent: LogicItem,
    name: string,
    params?: CreateConcreteItemParams
  ): LogicItem;
  createK8sItem(parent: LogicItem, params?: any): LogicItem;
  createAlert(kind: string, severity: string, msg: string): void;
}

export interface ConcreteProcessorVariableArgs {
  namespaceName?: string | null;
  namespaceScope?: NamespaceScope | null;

  appName?: string | null;
  appScope?: AppScope | null;
  app?: LogicItem | null;
}

export interface ConcreteProcessorRuntimeData {
  createdItems: LogicItem[];
  createdAlerts: AlertInfo[];
}

export interface LogicTarget {
  path: string[];
}

export interface LogicParserInfo extends BaseParserInfo {
  target?: LogicTarget;

  needAppScope?: boolean;
  canCreateAppIfMissing?: boolean;
  appNameCb?: (item: LogicItem) => string;

  kind?: string;

  needNamespaceScope?: boolean;
  namespaceNameCb?: (item: LogicItem) => string;

  handler?: (args: LogicProcessorHandlerArgs) => void;
}

export interface CreateLogicItemParams {
  kind?: string | ((item: LogicItem) => string);
  order?: number;
}

export interface LogicProcessorHandlerArgs {
  readonly logger: ILogger;
  readonly context: Context;
  readonly scope: LogicScope;
  readonly item: LogicItem;
  readonly infraScope: InfraScope;
  readonly helpers: Helpers;
  readonly namespaceScope: NamespaceScope;
  readonly namespaceName: string;
  readonly app: LogicItem;
  readonly appScope: AppScope;
  readonly appName: string;

  hasCreatedItems(): boolean;
  createItem(
    parent: LogicItem,
    name: string,
    params?: CreateLogicItemParams
  ): LogicItem;
  createAlert(kind: string, severity: string, msg: string): void;
}

export interface LogicProcessorVariableArgs {
  namespaceName?: string | null;
  namespaceScope?: NamespaceScope | null;

  appName?: string | null;
  appScope?: AppScope | null;
  app?: LogicItem | null;
}

export interface LogicProcessorRuntimeData {
  createdItems: LogicItem[];
  createdAlerts: AlertInfo[];
}

export interface ScopeTarget {
  namespaced?: boolean;
  scopeKind: string;
}

export interface ScopeParserInfo extends BaseParserInfo {
  target: ScopeTarget | null;

  // needAppScope?: boolean;
  // canCreateAppIfMissing? : boolean;
  // appNameCb?: (item : ConcreteItem) => string;

  kind?: string;

  // needNamespaceScope?: boolean;
  // namespaceNameCb? : (item : ConcreteItem) => string;

  handler?: (args: ScopeProcessorHandlerArgs) => void;
}

export interface CreateScopeItemParams {
  kind?: string | ((item: ItemScope) => string);
  order?: number;
}

export interface ScopeProcessorHandlerArgs {
  readonly logger: ILogger;
  readonly context: Context;
  readonly scope: LogicScope;
  readonly itemScope: ItemScope;
  readonly infraScope: InfraScope;
  readonly helpers: Helpers;
  readonly namespaceScope: NamespaceScope;

  hasCreatedItems(): boolean;
  createItem(
    parent: LogicItem,
    name: string,
    params?: CreateScopeItemParams
  ): LogicItem;
  createK8sItem(parent: LogicItem, params?: any): LogicItem;
  createAlert(kind: string, severity: string, msg: string): void;
}

export interface ScopeProcessorVariableArgs {
  // namespaceName? : string | null;
  // namespaceScope? : NamespaceScope | null;
  // appName? : string | null;
  // appScope?: AppScope | null;
  // app?: LogicItem | null;
}

export interface ScopeProcessorRuntimeData {
  createdItems: LogicItem[];
  createdAlerts: AlertInfo[];
}

export interface ApiGroup {
  api: string | null;
  kinds: string[];
}
