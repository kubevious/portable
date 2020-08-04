import React from 'react'
import cx from 'classnames'

const ClusterList = ({
    clusters,
    selectedCluster,
    addCustomConfig,
    selectCluster,
}) => {
    return (
        <div className='clusters'>
            {clusters.map((item) => (
                <div
                    key={item.name}
                    className={cx('cluster', {
                        selected:
                            selectedCluster &&
                            selectedCluster.name === item.name,
                    })}
                    onClick={() => selectCluster(item)}
                >
                    <img
                        className='kubernetes-logo'
                        src={`/img/clusters/${item.kind}.svg`}
                        alt={item.kind}
                    />
                    {item.name}
                </div>
            ))}

            <div className='cluster' onClick={() => addCustomConfig()}>
                <img
                    className='kubernetes-logo'
                    src={`/img/clusters/new-cluster.svg`}
                    alt='New cluster'
                />
                Add custom kube config
            </div>
        </div>
    )
}

export default ClusterList
