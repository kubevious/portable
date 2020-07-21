import React from 'react'
import BaseComponent from '../../HOC/BaseComponent';
import './styles.scss'
import { isEmptyArray, isEmptyObject } from '../../utils/util';
import cx from 'classnames'

class ClusterScreen extends BaseComponent {
    constructor(props) {
        super(props);

        this.registerService({ kind: 'clusters' })

        this.state = {
            clusters: [],
            error: null,
            commandOs: null,
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
                this.setState({
                    error: { messages: result.messages, runCommand: result.runCommand },
                    commandOs: 'Linux',
                })
            }
        })
    }

    backToList() {
        this.setState({ error: null })
    }

    render() {
        const { clusters, error, commandOs } = this.state

        return (
            <div className="ClusterScreen-container">
                <div className={cx('title', { 'error': error })}>
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

                    {!isEmptyObject(error.runCommand) && <div>
                        Please try running Kubevious Portable using following command:
                        <div className="commands">
                            <div className="os-tabs">
                                <div
                                    className={cx('tab', { 'selected': commandOs === 'Linux' })}
                                    onClick={() => this.setState({ commandOs: 'Linux' })}
                                >
                                    Linux
                                </div>
                                <div
                                    className={cx('tab', { 'selected': commandOs === 'Windows' })}
                                    onClick={() => this.setState({ commandOs: 'Windows' })}
                                >
                                    Windows
                                </div>
                                <div
                                    className={cx('tab', { 'selected': commandOs === 'Mac OS X' })}
                                    onClick={() => this.setState({ commandOs: 'Mac OS X' })}
                                >
                                    Mac OS
                                </div>
                            </div>

                            <pre className="command-box">
                                {error.runCommand[commandOs]}
                            </pre>
                        </div>
                    </div>}

                    <button className="back-btn" onClick={() => this.backToList()}>Back to list</button>
                </div>}
            </div>
        )
    }
}

export default ClusterScreen
