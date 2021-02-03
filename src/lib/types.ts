import { ProcessingTrackerScoper } from "@kubevious/helpers/dist/processing-tracker";
import { RegistryState } from "@kubevious/helpers/dist/registry-state";
import { ILogger } from "the-logger";
import { Context } from "vm";

export interface SearchQuery {
  criteria?: string;
  kind?: string;
  error?: AlertsPayload;
  warn?: AlertsPayload;
  labels?: {
    [name: string]: string;
  }[];
  annotations?: {
    [name: string]: string;
  }[];
}

export interface AlertsPayload {
  kind: string;
  count: number;
}

export interface Config {
  contexts?: [];
  clusters?: [];
  users?: [];
}

export interface Cluster {
  name?: string;
  kind?: string;
  ready?: boolean;
}

export interface K8config {
  name: any;
  cluster: any;
  user: any;
  imageTag: null;
  toolMappings: {};
  kind: string;
}

export interface Body {
  config: string;
  username: string;
  password: string;
  remember: boolean;
  title: string;
}

export interface ValueQuery {
  key: string;
  criteria: string;
}

export interface Helpers {}

export interface HandlerArgs {
  logger: ILogger;
  state: RegistryState;
  tracker: ProcessingTrackerScoper;
  context: Context;
}

export type Handler = (args: HandlerArgs) => any;

export interface ProcessorInfo {
  order: number;
  isDisabled: boolean;
  handler?: Handler;
}

export interface ItemId {
  infra: string;
  api: string;
  kind: string;
  namespace?: string;
  name: string;
}

export interface K8sConfig {
  server: {} | null;
  token: string | null;
  httpAgent: {
    ca?: string;
    cert?: string;
    key?: string;
    rejectUnauthorized?: boolean;
    servername?: string;
  };
}

export interface Options {
  timeout?: number;
  env?: {};
}

export interface PropertyValueWithUnit {
  value: number;
  unit: string;
}
