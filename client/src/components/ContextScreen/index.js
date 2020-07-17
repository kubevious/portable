import React from 'react'
import BaseComponent from '../../HOC/BaseComponent';
import './styles.scss'
import { isEmptyArray } from '../../utils/util';

class ContextScreen extends BaseComponent {
    constructor(props) {
        super(props);

        this.registerService({ kind: 'clusters' })

        this.state = {
            clusters: [],
        }
    }

    componentDidMount() {
        this.service.fetchClusters(result => {
            this.setState({ clusters: result })
        })
    }

    selectContext(item) {
        this.sharedState.set('context', item.name)

        this.service.activateCluster(item, result => {})
    }

    render() {
        const { clusters } = this.state

        return (
            <div className="ContextScreen-container">
                <div className="title">
                    Select context
                </div>

                {!isEmptyArray(clusters) && <div className="contexts">
                    {clusters.map(item => (
                        <div
                            key={item.name}
                            className="context"
                            onClick={() => this.selectContext(item)}
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
