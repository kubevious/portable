import { RegistryBundleState } from '@kubevious/helpers/dist/registry-bundle-state';
import _ from 'the-lodash'
import { ILogger } from 'the-logger/dist';
import { Context } from '../context';

type Counters = {
    [key: string]: {
        key: string;
        count: number;
        values: {
            [value: string]: number;
        };
    };
};

export class AutocompleteBuilder {
    private _logger : ILogger;
    private _context: Context
    private labelsCounters: Counters
    private annotationsCounters: Counters

    constructor(context: Context) {
        this._context = context
        this._logger = this._context.logger.sublogger("AutocompleteBuilder");

        this.labelsCounters = {},
        this.annotationsCounters = {}
    }

    accept(state: RegistryBundleState) {
        this.labelsCounters = {},
        this.annotationsCounters = {}

        for (var node of state.nodeItems) {
            if (node.labels) {
                this._addToCounters(node.labels, this.labelsCounters);
            }
            if (node.annotations) {
                this._addToCounters(node.annotations, this.annotationsCounters);
            }
        }
    }

    getLabels(criteria: string) {
        return this._getKeys(criteria, this.labelsCounters)
    }

    getAnnotations(criteria: string) {
        return this._getKeys(criteria, this.annotationsCounters)
    }

    getLabelValues(key: string, criteria : string) {
        return this._getValues(key, criteria, this.labelsCounters)
    }

    getAnnotationValues(key: string, criteria : string) {
        return this._getValues(key, criteria, this.annotationsCounters)
    }

    private _addToCounters(sourceDict: Record<string, string>, counters: Counters)
    {
        for(let key of _.keys(sourceDict))
        {
            let value = sourceDict[key];
            const keyInCounters = counters[key]
            
            counters[key] = {
                key: key,
                count: ~~keyInCounters?.count + 1,
                values: {
                    ...keyInCounters?.values,
                    [value]: ~~keyInCounters?.values[value] + 1
                },
            };
        }
    }

    private _getKeys(criteria: string, counters: Counters) {

        let results = _.values(counters).filter(x => x.key.includes(criteria));
        results = _.orderBy(results, x => x.count, 'desc');
        return _.map(results, x => x.key);
    }

    private _getValues(key: string, criteria: string, counter: Counters) {

        let keyData = counter[key];
        if (!keyData) {
            return [];
        }

        let results = _.keys(keyData.values).filter(x => x.includes(criteria));
        results = _.orderBy(results, x => keyData.values[x], 'desc');
        return results
    }
}
