import { ILogger } from "the-logger";
import { Context } from "../context";
import { ProcessingTracker } from "@kubevious/helpers/dist/processing-tracker";
import { RegistryState } from "@kubevious/helpers/dist/registry-state";

export function Processor() : ProcessorBuilder
{
    return new ProcessorBuilder();
}

export interface HandlerArgs
{
    logger : ILogger;
    state : RegistryState;
    tracker : ProcessingTracker;
    context : Context;
}

export type Handler = (args: HandlerArgs) => any;

export interface ProcessorInfo
{
    order: number;
    isDisabled: boolean;
    handler?: Handler;
}

export class ProcessorBuilder
{
    private _data : ProcessorInfo = { order: 0, isDisabled: false };
    
    constructor()
    {

    }

    disable()
    {
        this._data.isDisabled = true;
        return this;
    }

    order(value: number)
    {
        this._data.order = value;
        return this;
    }

    handler(value: Handler)
    {
        this._data.handler = value;
        return this;
    }

    _export() : ProcessorInfo
    {
        return this._data;
    }
}