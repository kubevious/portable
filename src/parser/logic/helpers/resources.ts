import _ from 'the-lodash';

export const METRICS = ['cpu', 'memory'];

export const METRIC_UNITS : Record<string, string> = {
    'cpu': 'cores',
    'memory': 'bytes'
}

const MEMORY_MULTIPLIER : Record<string, number> = {
    'K': Math.pow(1000, 1),
    'M': Math.pow(1000, 2),
    'G': Math.pow(1000, 3),
    'T': Math.pow(1000, 4),
    'P': Math.pow(1000, 5),
    'E': Math.pow(1000, 6),
    'Ki': Math.pow(1024, 1),
    'Mi': Math.pow(1024, 2),
    'Gi': Math.pow(1024, 3),
    'Ti': Math.pow(1024, 4),
    'Pi': Math.pow(1024, 5),
    'Ei': Math.pow(1024, 6),
}

const MEMORY_SIZES = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

export interface PropertyValueWithUnit {
    value: number,
    unit: string
}

export class ResourceHelpers {

    get METRICS() {
        return METRICS;
    }

    get METRIC_UNITS() {
        return METRIC_UNITS;
    }

    parseCpu(value : any) : PropertyValueWithUnit
    {
        let valueStr = value.toString();
        valueStr = _.trim(valueStr, "\'\"");
        let valueF : number; 
        if (_.endsWith(valueStr, 'm'))
        {
            valueStr = valueStr.substring(0, valueStr.length - 1);
            valueF = parseFloat(valueStr);
            valueF = valueF / 1000;
        }
        else
        {
            valueF = parseFloat(valueStr);
        }
        return {
            value: valueF,
            unit: 'cores'
        };
    }

    parseMemory(value : any) : PropertyValueWithUnit {
        let valueStr = value.toString();
        let unit = valueStr.slice(-1);
        if (unit == 'i') {
            unit = valueStr.slice(-2);
            valueStr = valueStr.substring(0, valueStr.length - 2);
        } else {
            valueStr = valueStr.substring(0, valueStr.length - 1);
        }
        let valueF = parseFloat(valueStr);
        if (MEMORY_MULTIPLIER[unit]) {
            valueF = valueF * MEMORY_MULTIPLIER[unit];
        }
        valueF = Math.floor(valueF);
        return {
            value: valueF,
            unit: 'bytes'
        };
    }

    parse(metric : string, value : any) : PropertyValueWithUnit {
        if (metric == 'cpu') {
            return this.parseCpu(value);
        }
        if (metric == 'memory') {
            return this.parseMemory(value);
        }
        return {
            value: value,
            unit: '?'
        };
    }

    stringifyCpu(value : any) : string {
        return this.percentage(value);
    }
    
    percentage(value : any) : string  {
        return (Number.parseFloat(value) * 100).toFixed(2) + "%";
    }
    
    precise(value : any) : string {
        return Number.parseFloat(value).toPrecision(2);
    }

    stringifyMemory(value : number , decimals : number = 2) {
        if (value === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const i = Math.floor(Math.log(value) / Math.log(k));
        return parseFloat((value / Math.pow(k, i)).toFixed(dm)) + ' ' + MEMORY_SIZES[i];
    }

    stringify(metric : string, value: any) {
        if (metric == 'cpu') {
            return this.stringifyCpu(value);
        }
        if (metric == 'memory') {
            return this.stringifyMemory(value);
        }
        return value;
    }
}