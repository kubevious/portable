import React from 'react'
import BaseComponent from '../../HOC/BaseComponent';
import './styles.scss'
import { isEmptyArray } from '../../utils/util';

class ContextScreen extends BaseComponent {
    constructor(props) {
        super(props);

        this.registerService({ kind: 'clusters' })

        this.state = {
            contexts: [],
        }
    }

    componentDidMount() {
        this.service.fetchContexts(result => {
            this.setState({ contexts: result })
        })
    }

    render() {
        const { contexts } = this.state

        return (
            <div className="ContextScreen-container">
                <div className="title">
                    Select context
                </div>

                {!isEmptyArray(contexts) && <div className="contexts">
                    {contexts.map(item => (
                        <div
                            key={item.name}
                            className="context"
                            onClick={() => this.props.selectContext(item.name)}
                        >
                            <img className="kubernetes-logo" src="/img/entities/kubernetes.svg" alt="kubernetes" />
                            {item.name}
                        </div>
                    ))}
                </div>}
            </div>
        )
    }
}

export default ContextScreen
