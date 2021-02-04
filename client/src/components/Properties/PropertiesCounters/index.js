import React from 'react'
import './styles.scss'

import PropertiesValue from '../helpers'

const PropertiesCounters = ({ config }) => {
    return (
        <div className='counters-container'>
            {config.map((element) =>
                element.value ? (
                    <div className='counter-block' key={element.title}>
                        <label>{element.title}</label>
                        <div className='counter-value'>
                            {PropertiesValue(element)}
                        </div>
                    </div>
                ) : null
            )}
        </div>
    )
}

export default PropertiesCounters
