import { Context } from "../context";
import { ILogger } from "the-logger";
import { Promise } from 'the-promise';

import { DataStore, MySqlDriver, MySqlStatement } from '@kubevious/easy-data-store';

export interface MigratorArgs
{
    logger: ILogger;
    driver: MySqlDriver;
    executeSql: (sql: string, params?: any[]) => Promise<any>;
    context: Context;
}

export interface MigratorInfo
{
    handler?: (args: MigratorArgs) => Promise<any>;
}

export function Migrator() : MigratorBuilder
{
    return new MigratorBuilder();
}

export class MigratorBuilder
{
    private _data: MigratorInfo = {};

    constructor()
    {

    }

    handler(value: (args: MigratorArgs) => Promise<any>)
    {
        this._data.handler = value;
        return this;
    }

    _export() : MigratorInfo
    {
        if (!this._data.handler) {
            throw new Error("Handler not set.");
        }
        return this._data;
    }
}