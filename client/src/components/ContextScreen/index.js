import React from 'react'
import BaseComponent from '../../HOC/BaseComponent';
import './styles.scss'

const context = [
    {
        name: 'Development',
    },
    {
        name: 'Staging',
    },
    {
        name: 'Production',
    },
]

class ContextScreen extends BaseComponent {

    render() {
        return (
            <div className="ContextScreen-container">
                <div className="title">
                    Select context
                </div>

                <div className="contexts">
                    {context.map(item => (
                        <div
                            key={item.name}
                            className="context"
                            onClick={() => this.props.selectContext(item.name)}
                        >
                            <img className="kubernetes-logo" src="/img/entities/kubernetes.svg" alt="kubernetes" />
                            {item.name}
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default ContextScreen
