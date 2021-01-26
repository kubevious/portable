export interface RuleObject {
    name: string;
    hash: string;
    target: string;
    script: string;
}

export type RuleItem = Record<string, any>;
