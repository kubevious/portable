import React from 'react'
import BaseComponent from '../../HOC/BaseComponent';
import './styles.scss'
import { isEmptyArray } from '../../utils/util';

class ClusterScreen extends BaseComponent {
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

    selectCluster(item) {
        this.sharedState.set('cluster', item.name)

        this.service.activateCluster(item, result => {})
    }

    render() {
        const { clusters } = this.state

        return (
            <div className="ClusterScreen-container">
                <div className="title">
                    Select cluster
                </div>

                {!isEmptyArray(clusters) && <div className="clusters">
                    {clusters.map(item => (
                        <div
                            key={item.name}
                            className="cluster"
                            onClick={() => this.selectCluster(item)}
                        >
                            <img className="kubernetes-logo" src={`/img/clusters/${item.kind}.svg`} alt={item.kind} />
                            {item.name}
                        </div>
                    ))}
                </div>}
            </div>
        )
    }
}

export default ClusterScreen
