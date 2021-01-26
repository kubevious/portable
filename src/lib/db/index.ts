import _ from 'the-lodash';
import { Promise, Resolvable } from 'the-promise';
import { ILogger } from 'the-logger' ;

import * as fs from 'fs';
import * as Path from 'path';

import { DataStore, MySqlDriver, MySqlStatement } from '@kubevious/easy-data-store';

import { Context } from '../context' ;

import { setupMarkersMeta } from './meta/markers';
import { setupRulesMeta } from './meta/rules';
import { setupNotificationsMeta } from './meta/notifications';
import { MigratorArgs, MigratorBuilder, MigratorInfo } from './migration';

const TARGET_DB_VERSION : number = 8;

export class Database
{
    private _logger : ILogger;
    private _context : Context

    private _migrators : Record<string, MigratorInfo> = {};

    private _dataStore : DataStore;
    private _driver : MySqlDriver;
    private _statements : Record<string, MySqlStatement> = {};

    constructor(logger : ILogger, context : Context)
    {
        this._context = context;
        this._logger = logger.sublogger("DB");

        this._loadMigrators();

        this._dataStore = new DataStore(logger.sublogger("DataStore"), false, {
            charset: 'utf8_general_ci'
        });
        this._driver = this._dataStore.mysql;

        this._driver.onMigrate(this._onDbMigrate.bind(this));

        this._setupMeta();
    }

    get logger() {
        return this._logger;
    }

    get dataStore() {
        return this._dataStore;
    }

    get driver() {
        return this._driver;
    }

    get isConnected() {
        return this._driver.isConnected;
    }

    private _setupMeta()
    {
        setupMarkersMeta(this._dataStore.meta());
        setupRulesMeta(this._dataStore.meta());
        setupNotificationsMeta(this._dataStore.meta());
    }

    private _loadMigrators()
    {
        var location = 'migrators';
        const migratorsDir = Path.join(__dirname, location);

        var files = fs.readdirSync(migratorsDir);
        files = _.filter(files, x => x.endsWith('.d.ts'));

        for(let fileName of files)
        {
            let moduleName = fileName.replace('.d.ts', '');
            let modulePath = location + '/' + moduleName;
            this._logger.info("Loading migrator %s from %s...", moduleName, modulePath);

            const migratorModule = require('./' + modulePath);
            const migrationBuilder = <MigratorBuilder> migratorModule.default;
            const migrationInfo = migrationBuilder._export();
            this._logger.info("migrationInfo: ", migrationInfo);

            this._logger.info("Loaded migrator %s from %s", moduleName, modulePath);
            this._migrators[moduleName] = migrationInfo;
        }
    }

    onConnect(cb: ((driver: MySqlDriver) => Resolvable<any>))
    {
        return this._driver.onConnect(cb);
    }

    registerStatement(id: string, sql: string)
    {
        this._statements[id] = this._driver.statement(sql);
    }

    executeStatement(id: string, params?: any) : Promise<any>
    {
        var statement = this._statements[id];
        return statement.execute(params);
    }

    executeStatements(statements: {id: string, params?: any}[])
    {
        var myStatements = statements.map(x => ({
            statement: this._statements[x.id],
            params: x.params
        }))
        return this._driver.executeStatements(myStatements);
    }

    executeInTransaction(cb: ((driver: MySqlDriver) => Promise<any>))
    {
        return this._driver.executeInTransaction(cb);
    }

    executeSql(sql: string)
    {
        return this.driver.executeSql(sql);
    }

    queryPartitions(tableName: string)
    {
        var sql = 
            "SELECT PARTITION_NAME, PARTITION_DESCRIPTION " +
            "FROM information_schema.partitions " +
            `WHERE TABLE_SCHEMA='${process.env.MYSQL_DB}' ` +
            `AND TABLE_NAME = '${tableName}' ` +
            'AND PARTITION_NAME IS NOT NULL ' +
            'AND PARTITION_DESCRIPTION != 0;';
        
        return this.executeSql(sql)
            .then((results: any[]) => {
                return results.map(x => ({
                    name: x.PARTITION_NAME,
                    value: parseInt(x.PARTITION_DESCRIPTION)
                }));
            })
    }

    createPartition(tableName: string, name: string, value: number)
    {
        this._logger.info("[createPartition] Table: %s, %s -> %s", tableName, name, value);

        var sql = 
            `ALTER TABLE \`${tableName}\` ` +
            `ADD PARTITION (PARTITION ${name} VALUES LESS THAN (${value}))`;
        
        return this.executeSql(sql);
    }

    dropPartition(tableName: string, name: string)
    {
        this._logger.info("[dropPartition] Table: %s, %s", tableName, name);

        var sql = 
            `ALTER TABLE \`${tableName}\` ` +
            `DROP PARTITION ${name}`;
        
        return this.executeSql(sql);
    }

    init()
    {
        this._logger.info("[init]")
        return Promise.resolve()
            .then(() => this._dataStore.connect())
            .then(() => {
                this._logger.info("[init] post connect.")
            })
    }

    private _onDbMigrate()
    {
        this._logger.info("[_onDbMigrate] ...");
        return Promise.resolve()
            .then(() => this._processMigration())
            ;
    }

    private _processMigration()
    {
        this.logger.info("[_processMigration] ...");

        return this.driver.executeInTransaction(() => {
            return Promise.resolve()
                .then(() => this._getDbVersion())
                .then(version => {
                    this.logger.info("[_processMigration] VERSION: %s", version);
                    this.logger.info("[_processMigration] TARGET_DB_VERSION: %s", TARGET_DB_VERSION);
                    if (version == TARGET_DB_VERSION) {
                        return;
                    }
                    if (version > TARGET_DB_VERSION) {
                        this.logger.error("[_processMigration] You are running database version more recent then the binary. Results may be unpredictable.");
                        return;
                    }
                    var migrateableVersions = _.range(version + 1, TARGET_DB_VERSION + 1);
                    this.logger.info("[_processMigration] MigrateableVersions: ", migrateableVersions);
                    return Promise.serial(migrateableVersions, x => this._processVersionMigration(x));
                })
        });
    }

    private _processVersionMigration(targetVersion: number)
    {
        this.logger.info("[_processVersionMigration] target version: %s", targetVersion);

        let migrator = this._migrators[targetVersion.toString()];
        if (!migrator) {
            throw new Error(`Missing Migrator for db version ${targetVersion}`);
        }
        return Promise.resolve()
            .then(() => {
                let migratorArgs : MigratorArgs = {
                    logger: this.logger,
                    driver: this.driver,
                    executeSql: this._migratorExecuteSql.bind(this),
                    context: this._context
                }
                return migrator.handler!(migratorArgs);
            })
            .then(() => {
                return this._setDbVersion(targetVersion);
            })
    }

    private _migratorExecuteSql(sql: string, params? : any)
    {
        this.logger.info("[_migratorExecuteSql] Executing: %s, params: ", sql, params);
        return this.driver.executeSql(sql, params)
            .catch(reason => {
                this.logger.info("[_migratorExecuteSql] Failed. Reason: ", reason);
                throw reason;
            })
    }

    private _getDbVersion()
    {
        return this._tableExists('config')
            .then(configExists => {
                if (!configExists) {
                    this.logger.warn('[_getDbVersion] Config table does not exist.');
                    return 0;
                }
                return this.driver.executeSql('SELECT `value` FROM `config` WHERE `key` = "DB_SCHEMA"')
                    .then((result: any[]) => {
                        var value = _.head(result);
                        if (value) {
                            return value.value.version || 0;
                        }
                        return 0;
                    })
            })
            ;
    }

    private _tableExists(name: string)
    {
        return this.driver.executeSql(`SHOW TABLES LIKE '${name}';`)
            .then(result => {
                return result.length > 0;
            })
    }

    private _setDbVersion(version: number)
    {
        this._logger.info("[_setDbVersion] version: %s", version);

        var valueObj = {
            version: version
        };

        return this.driver.executeSql('INSERT INTO `config` (`key`, `value`) VALUES ("DB_SCHEMA", ?) ON DUPLICATE KEY UPDATE `value` = ?',
            [valueObj, valueObj])
            ;
    }
}