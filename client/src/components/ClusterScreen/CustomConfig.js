import React, { useState } from 'react'
import { Controlled as CodeMirrorEditor } from 'react-codemirror2'

import 'codemirror/theme/darcula.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/yaml/yaml'

const CustomConfig = ({ backToList, createCustomConfig }) => {
    const [config, setConfig] = useState('')

    const handleChangeConfig = ({ editor, data, value }) => {
        setConfig(value)
    }

    return (
        <div className='CustomConfig-container'>
            <CodeMirrorEditor
                value={config}
                name='editedConfig'
                options={{
                    mode: 'yaml',
                    theme: 'darcula',
                }}
                onBeforeChange={(editor, data, value) =>
                    handleChangeConfig({ editor, data, value })
                }
            />

            <div className='btn-group'>
                <button
                    className='btn'
                    onClick={() => createCustomConfig(config)}
                >
                    Add config
                </button>

                <button className='btn' onClick={() => backToList()}>
                    Back to list
                </button>
            </div>
        </div>
    )
}

export default CustomConfig
