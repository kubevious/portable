import React from 'react'
import BaseComponent from '../../HOC/BaseComponent'
import PropertiesContents from '../Properties/PropertiesContents'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import './styles.scss'
import { isEmptyObject } from '../../utils/util'

class Summary extends BaseComponent {
    constructor(props) {
        super(props)

        this.state = {
            data: {},
        }
    }

    componentDidMount() {
        this.subscribeToSharedState('summary', (data) => {
            this.setState({ data })
        })
    }

    render() {
        const { data } = this.state
        if (!isEmptyObject(data)) {
            return (
                <div id='summaryComponent' className='summary'>
                    {Object.values(data).map((block) => (
                        <div className='summary-container' key={block.id}>
                            <label>{block.title}</label>
                            <div className='summary-container-inner'>
                                <PropertiesContents group={block} />
                            </div>
                        </div>
                    ))}
                </div>
            )
        }
        return (
            <div id='summaryComponent' className='loading-placeholder'>
                <div className='loading-icon'>
                    <FontAwesomeIcon icon={faSpinner} spin />
                </div>
                Loading...
            </div>
        )
    }
}

export default Summary
