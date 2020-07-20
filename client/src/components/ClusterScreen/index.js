import React from 'react'
import BaseComponent from '../../HOC/BaseComponent';
import './styles.scss'
import { isEmptyArray } from '../../utils/util';
import cx from 'classnames'

class ClusterScreen extends BaseComponent {
    constructor(props) {
        super(props);

        this.registerService({ kind: 'clusters' })

        this.state = {
            clusters: [],
            error: null,
        }
    }

    componentDidMount() {
        this.service.fetchClusters(result => {
            this.setState({ clusters: result })
        })
    }

    selectCluster(item) {
        this.service.activateCluster(item, result => {
            if (result.success) {
                this.sharedState.set('selected_cluster', item)
            } else {
                this.setState({ error: { messages: result.messages, runCommand: result.runCommand } })
            }
        })
    }

    backToList() {
        this.setState({ error: null })
    }

    render() {
        const { clusters, error } = this.state

        return (
            <div className="ClusterScreen-container">
                <div className={cx('title', {'error': error})}>
                    {error ? 'Error Connecting to Cluster' : 'Select cluster'}
                </div>

                {!isEmptyArray(clusters) && !error && <div className="clusters">
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

                {error && <div className="error-box">
                    {!isEmptyArray(error.messages) && <div className="error-messages">
                        {error.messages.map(msg => (
                            <div className="message">
                                {msg}
                            </div>
                        ))}
                    </div>}

                    {error.runCommand && <div>
                        Please try running Kubevious Portable using following command:
                        <pre>
                            {error.runCommand}
                        </pre>
                    </div>}

                    <button className="back-btn" onClick={() => this.backToList()}>Back to list</button>
                </div>}
            </div>
        )
    }
}

export default ClusterScreen
