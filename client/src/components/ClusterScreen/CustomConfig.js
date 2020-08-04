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

    const uploadConfig = () => {
        const input = document.getElementById('config-file')

        if (input.files.length === 0) {
            console.error('No file selected.')
            return
        }

        const reader = new FileReader()
        reader.onload = () => {
            createCustomConfig(reader.result)
        }

        reader.readAsText(input.files[0])
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

                <label htmlFor='config-file' className='btn label-btn'>
                    Upload file
                </label>
                <input
                    type='file'
                    id='config-file'
                    onChange={() => uploadConfig()}
                />

                <button className='btn' onClick={() => backToList()}>
                    Back to list
                </button>
            </div>
        </div>
    )
}

export default CustomConfig
