import React from 'react'
import { isEmptyArray } from '../../utils/util'
import cx from 'classnames'
import CopyClipboard from '../CopyClipboard'
import { ClusterErrorProps } from './types'

export const ClusterError: React.FunctionComponent<ClusterErrorProps> = ({
    error,
    selectedCommand,
    backToList,
    selectCommand,
}) => {
    return (
        <>
            <div className='error-box'>
                {error && !isEmptyArray(error.messages) && (
                    <div className='error-messages'>
                        {error.messages.map((msg, i) => (
                            <div key={i} className='message'>
                                {msg}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {error && !isEmptyArray(error.runCommands) && (
                <div>
                    Please try running Kubevious Portable using following
                    command:
                    <div className='commands'>
                        <div className='os-tabs'>
                            {error && error.runCommands.map((cmd) => (
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
