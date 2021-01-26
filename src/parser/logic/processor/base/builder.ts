export interface BaseParserBuilder {
    _extract() : BaseParserInfo[]
}

export interface BaseParserInfo
{
    targetKind: string;
    order: number;
    target?: any;
}