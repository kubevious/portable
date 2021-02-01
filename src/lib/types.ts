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
