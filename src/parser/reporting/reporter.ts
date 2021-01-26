import _ from 'the-lodash';
import { Promise } from 'the-promise';
import { ILogger } from 'the-logger';

import { Context } from '../context';

import { Snapshot } from './snapshot'
import { ReporterTarget } from './target'
import { LogicItem } from '../logic/item';
import { SnapshotConfigKind } from '@kubevious/helpers/dist/snapshot/types';

export class SnapshotReporter
{
    private _context : Context;
    private _logger : ILogger;

    private _collectors : any[] = [];

    constructor(context : Context)
    {
        this._context = context;
        this._logger = context.logger.sublogger("Reporter");
        this._determineCollectors();

        for(var collector of this._collectors)
        {
            collector.target = new ReporterTarget(this._logger, collector.config);
        }
    }

    get logger() {
        return this._logger;
    }

    private _determineCollectors()
    {
        this._collectors = [];
        for(var x of _.keys(process.env))
        {
            if (_.startsWith(x, 'KUBEVIOUS_COLLECTOR'))
            {
                var namePart = x.replace('KUBEVIOUS_COLLECTOR', '');
                if (!namePart.includes('_'))
                {
                    this._loadCollector(x);
                }
            }
        }
        this.logger.info("[_determineCollectors] Collectors: ", this._collectors);
    }

    private _loadCollector(urlEnvName: string)
    {
        var collectorConfig = {
            url: process.env[urlEnvName],
            authUrl: <any>null,
            keyPath: <any>null,
        }
        var authEnvName = urlEnvName + '_AUTH';
        var keyPathEnvName = urlEnvName + '_KEY_PATH';
        if (process.env[authEnvName] && process.env[keyPathEnvName]) {
            collectorConfig.authUrl = process.env[authEnvName];
            collectorConfig.keyPath = process.env[keyPathEnvName];
        }
        this._collectors.push({
            config: collectorConfig
        })
    }

    acceptLogicItems(date: Date, items: LogicItem[])
    {
        this._logger.info("[acceptLogicItems] item count: %s", items.length);
        var snapshot = this._transforItems(date, items);
        for(var key of snapshot.keys)
        {
            this._logger.silly("[acceptLogicItems] hash: %s", key);
        }
        this._logger.info("[acceptLogicItems] obj count: %s", snapshot.count);

        return Promise.serial(this._collectors, x => x.target.report(snapshot));
    }

    private _transforItems(date: Date, items: LogicItem[])
    {
        var snapshot = new Snapshot(date);

        for(var item of items)
        {
            snapshot.addItem({
                dn: item.dn,
                kind: item.kind,
                config_kind: SnapshotConfigKind.node,
                config: item.exportNode()
            });

            var alerts = item.extractAlerts();
            if (alerts.length > 0) 
            {
                snapshot.addItem({
                    dn: item.dn,
                    kind: item.kind,
                    config_kind: SnapshotConfigKind.alerts,
                    config: alerts
                });
            }

            var properties = item.extractProperties();
            for(var props of properties)
            {
                snapshot.addItem({
                    dn: item.dn,
                    kind: item.kind,
                    config_kind: SnapshotConfigKind.props,
                    config: props
                })
            }
        }

        return snapshot;
    }

}