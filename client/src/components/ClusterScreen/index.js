import React from 'react'
import BaseComponent from '../../HOC/BaseComponent';
import './styles.scss'
import { isEmptyArray } from '../../utils/util';
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

class ClusterScreen extends BaseComponent {
    constructor(props) {
        super(props);

        this.registerService({ kind: 'clusters' })

        this.state = {
            clusters: [],
            error: null,
            selectedCommand: null,
            selectedCluster: null,
            isLoading: false,
        }
    }

    componentDidMount() {
        this.service.fetchClusters(result => {
            this.setState({ clusters: result })
        })

        this.subscribeToSharedState('selected_cluster', (selected_cluster) => {
            this.setState({ selectedCluster: selected_cluster })
        })
    }

    selectCluster(item) {
        this.setState({ isLoading: true })

        this.service.activateCluster(item, result => {
            this.setState({ isLoading: false })

            if (result.success) {
                this.props.handleCloseClusters()
                this.sharedState.set('selected_cluster', item)
            } else {
                var selectedCommand = null;
                if (!isEmptyArray(result.runCommands)) {
                    selectedCommand = result.runCommands[0];
                }
                this.setState({
                    error: { messages: result.messages, runCommands: result.runCommands },
                    selectedCommand: selectedCommand,
                })
            }
        })
    }

    backToList() {
        this.setState({ error: null })
    }

    render() {
        const { clusters, error, selectedCommand, selectedCluster, isLoading } = this.state

        return (
            <div className="ClusterScreen-container">
                <div className={cx('title', { 'error': error })}>
                    {error ? 'Error Connecting to Cluster' : 'Select cluster'}

                    <div className="loading-box">
                        {isLoading && <FontAwesomeIcon icon={faSpinner} spin />}
                    </div>
                </div>


                <div className="close-clusters" onClick={() => this.props.handleCloseClusters()}>
                    x
                </div>

                {!isEmptyArray(clusters) && !error && <div className="clusters">
                    {clusters.map(item => (
                        <div
                            key={item.name}
                            className={cx('cluster', { 'selected': selectedCluster && selectedCluster.name === item.name })}
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
                </div>}

                {error && !isEmptyArray(error.runCommands) && <div>
                        Please try running Kubevious Portable using following command:
                        <div className="commands">
                            <div className="os-tabs">
                                {error.runCommands.map(cmd => (
                                    <div
                                        className={cx('tab', { 'selected': cmd.os === selectedCommand.os })}
                                        onClick={() => this.setState({ selectedCommand: cmd })}
                                    >
                                        {cmd.os}
                                    </div>
                                ))}
                            </div>

                            <pre className="command-box">
                                {selectedCommand.command}
                            </pre>
                        </div>
                    </div>}

                {error &&
                    <button className="back-btn" onClick={() => this.backToList()}>Back to list</button>
                }

            </div>
        )
    }
}

export default ClusterScreen
