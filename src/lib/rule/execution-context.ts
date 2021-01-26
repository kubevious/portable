export interface ExecutionContext
{
    ruleStatuses: Record<string, any>;
    ruleItems: any[];
    ruleLogs: any[];

    markerItems: any[];
}