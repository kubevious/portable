import _ from 'the-lodash'
import React from 'react'

import './styles.scss'

const PropertiesValue = (value) => {
    if (_.isObject(value) && _.isNotNullOrUndefined(value.value)) {
        value = formatValue(value);
    }

    if (_.isObject(value) && _.isNotNullOrUndefined(value.value)) {
        return <>
            <span>{formatValue(value.value, value.unit)}
            {value.unit &&
                <span>{value.unit}</span>}
            </span>
        </>
    } else {
        return (
            <span>{_.toString(value)}</span>
        )
    }
};

function formatValue(value)
{
    switch(value.unit)
    {
        case '%':
            return {
                value: (value.value * 100).toFixed(2),
                unit: '%'
            };

        case 'bytes':
            return formatMemory(value.value, 2);
    
        default:
            return value;
    }
}


const MEMORY_SIZES = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
function formatMemory(value, decimals) {
    if (value === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const i = Math.floor(Math.log(value) / Math.log(k));
    return {
        value: parseFloat((value / Math.pow(k, i)).toFixed(dm)),
        unit: MEMORY_SIZES[i]
    };
}

export default PropertiesValue
