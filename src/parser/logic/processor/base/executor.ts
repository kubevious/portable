import { LogicScope } from "../../scope";

export interface BaseParserExecutor 
{
    name : string;
    order : number;
    targetInfo : string;

    execute(scope : LogicScope) : void;
}