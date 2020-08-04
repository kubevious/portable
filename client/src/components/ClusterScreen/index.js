import React from 'react'
import BaseComponent from '../../HOC/BaseComponent'
import './styles.scss'
import { isEmptyArray } from '../../utils/util'
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import ClusterList from './ClusterList'
import ClusterError from './ClusterError'
import CustomConfig from './CustomConfig'

class ClusterScreen extends BaseComponent {
    constructor(props) {
        super(props)

        this.registerService({ kind: 'clusters' })

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
    }

    componentDidMount() {
        this.service.fetchClusters((result) => {
            this.setState({ clusters: result })
        })

        this.subscribeToSharedState('selected_cluster', (selected_cluster) => {
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
            this.setState({ isLoading: false})

            if (result.success) {
                this.setState({
                    clusters: result.clusters,
                    isCustomConfig: false,
                })
            }
        })
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
                    {error ? 'Error Connecting to Cluster' : 'Select cluster'}

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
