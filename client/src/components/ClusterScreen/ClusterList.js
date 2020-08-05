import React from 'react'
import cx from 'classnames'

const ClusterList = ({ clusters, selectedCluster, selectCluster }) => {
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
        </div>
    )
}

export default ClusterList
