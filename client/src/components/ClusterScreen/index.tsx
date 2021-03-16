import React from 'react'
import { isEmptyArray } from '../../utils/util'
import cx from 'classnames'
import { ClassComponent } from "@kubevious/ui-framework"
import { IClustersService } from "@kubevious/ui-middleware"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { ClusterList } from './ClusterList'
import { ClusterError } from './ClusterError'
import { CustomConfig } from './CustomConfig'

import './styles.scss'
import './customStyles.scss'
import { ClusterScreenProps, ClusterScreenState, Cluster } from './types'

export class ClusterScreen extends ClassComponent<ClusterScreenProps, ClusterScreenState, IClustersService> {
    constructor(props: ClusterScreenProps) {
        super(props, null, { kind: 'clusters' })

        this.state = {
            clusters: [],
            error: null,
            selectedCommand: null,
            selectedCluster: null,
            isLoading: false,
            isCustomConfig: false,
        }

        this.selectCluster = this.selectCluster.bind(this)
        this.selectCommand = this.selectCommand.bind(this)
        this.backToList = this.backToList.bind(this)
        this.addCustomConfig = this.addCustomConfig.bind(this)
        this.createCustomConfig = this.createCustomConfig.bind(this)
        this.renderTitle = this.renderTitle.bind(this)
    }

    componentDidMount() {
        this.service.fetchClusters((result: Cluster[]) => {
            this.setState({ clusters: result })
        })

        this.subscribeToSharedState('selected_cluster', (selected_cluster: Cluster) => {
            this.setState({ selectedCluster: selected_cluster })
        })
    }

    selectCluster(item) {
        this.setState({ isLoading: true })

        this.service.activateCluster(item, (result) => {
            this.setState({ isLoading: false })

            if (result.success) {
                this.props.handleCloseClusters()
                this.sharedState.set('selected_cluster', item)
            } else {
                var selectedCommand = null
                if (!isEmptyArray(result.runCommands)) {
                    selectedCommand = result.runCommands[0]
                }
                this.setState({
                    error: {
                        messages: result.messages,
                        runCommands: result.runCommands,
                    },
                    selectedCommand: selectedCommand,
                })
            }
        })
    }

    backToList() {
        this.setState({ error: null, isCustomConfig: false })
    }

    addCustomConfig() {
        this.setState({ isCustomConfig: true, error: null })
    }

    selectCommand(cmd) {
        this.setState({ selectedCommand: cmd })
    }

    createCustomConfig(config) {
        this.setState({ isLoading: true })
        this.service.createCustomConfig({ config }, (result) => {
            this.setState({ isLoading: false })

            if (result.success) {
                this.setState({
                    clusters: result.clusters,
                    isCustomConfig: false,
                })
            }
        })
    }

    renderTitle() {
        if (this.state.error) {
            return 'Error Connecting to Cluster'
        } else if (this.state.isCustomConfig) {
            return 'Upload or paste kube config'
        } else {
            return 'Select cluster'
        }
    }

    render() {
        const {
            clusters,
            error,
            selectedCommand,
            selectedCluster,
            isLoading,
            isCustomConfig,
        } = this.state

        return (
            <div className='ClusterScreen-container'>
                <div className={cx('title', { error: error })}>
                    {this.renderTitle()}

                    <div className='loading-box'>
                        {isLoading && <FontAwesomeIcon icon={faSpinner} spin />}
                    </div>
                </div>

                <div
                    className='close-clusters'
                    onClick={() => this.props.handleCloseClusters()}
                >
                    x
                </div>

                {!error && !isCustomConfig && (
                    <div
                        className='add-config'
                        onClick={() => this.addCustomConfig()}
                    >
                        <span className='add-config-icon'>+</span>
                        <span className='add-config-text'>
                            Add custom kube config
                        </span>
                    </div>
                )}

                {!isEmptyArray(clusters) && !error && !isCustomConfig && (
                    <ClusterList
                        clusters={clusters}
                        selectedCluster={selectedCluster}
                        selectCluster={this.selectCluster}
                        addCustomConfig={this.addCustomConfig}
                    />
                )}

                {error && (
                    <ClusterError
                        error={error}
                        backToList={this.backToList}
                        selectedCommand={selectedCommand}
                        selectCommand={this.selectCommand}
                    />
                )}

                {isCustomConfig && (
                    <CustomConfig
                        backToList={this.backToList}
                        createCustomConfig={this.createCustomConfig}
                    />
                )}
            </div>
        )
    }
}

export default ClusterScreen
