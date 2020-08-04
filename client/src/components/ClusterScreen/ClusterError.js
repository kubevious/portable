import React from 'react'
import { isEmptyArray } from '../../utils/util'
import cx from 'classnames'
import CopyClipboard from '../CopyClipboard'

const ClusterError = ({
    error,
    selectedCommand,
    backToList,
    selectCommand,
}) => {
    return (
        <>
            <div className='error-box'>
                {!isEmptyArray(error.messages) && (
                    <div className='error-messages'>
                        {error.messages.map((msg) => (
                            <div className='message'>{msg}</div>
                        ))}
                    </div>
                )}
            </div>

            {!isEmptyArray(error.runCommands) && (
                <div>
                    Please try running Kubevious Portable using following
                    command:
                    <div className='commands'>
                        <div className='os-tabs'>
                            {error.runCommands.map((cmd) => (
                                <div
                                    className={cx('tab', {
                                        selected: cmd.os === selectedCommand.os,
                                    })}
                                    onClick={() => selectCommand(cmd)}
                                >
                                    {cmd.os}
                                </div>
                            ))}
                        </div>

                        <pre className='command-box'>
                            <CopyClipboard text={selectedCommand.command} />
                            {selectedCommand.command}
                        </pre>
                    </div>
                </div>
            )}

            <button className='btn' onClick={() => backToList()}>
                Back to list
            </button>
        </>
    )
}

export default ClusterError
