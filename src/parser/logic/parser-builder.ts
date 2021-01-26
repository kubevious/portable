
import { ConcreteParserBuilder } from './processor/concrete/builder';
import { LogicParserBuilder } from './processor/logic/builder';
import { ScopeParserBuilder } from './processor/scope/builder';

export function ConcreteParser() : ConcreteParserBuilder
{
    return new ConcreteParserBuilder();
}

export function LogicParser() : LogicParserBuilder
{
    return new LogicParserBuilder();
}

export function ScopeParser() : ScopeParserBuilder
{
    return new ScopeParserBuilder();
}