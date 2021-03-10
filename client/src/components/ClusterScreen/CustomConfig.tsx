import React, { useState } from 'react'
import { Controlled as CodeMirrorEditor } from 'react-codemirror2'

import 'codemirror/theme/darcula.css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/yaml/yaml'
import { CustomConfigProps } from './types'

export const CustomConfig: React.FunctionComponent<CustomConfigProps> = ({ backToList, createCustomConfig }) => {
    const [config, setConfig] = useState<string>('')

    const handleChangeConfig = (value: React.SetStateAction<string>) => {
        setConfig(value)
    }

    const uploadConfig = () => {
        const input = document.getElementById('config-file') as HTMLInputElement

        if (input.files && input.files.length === 0) {
            console.error('No file selected.')
            return
        }

        const reader: FileReader = new FileReader()
        reader.onload = () => {
            // @ts-ignore: Unreachable code error
            createCustomConfig(reader.result)
        }

        input.files && reader.readAsText(input.files[0])
    }

    return (
        <div className='CustomConfig-container'>
            <CodeMirrorEditor
                value={config}
                options={{
                    mode: 'yaml',
                    theme: 'darcula',
                }}
                onBeforeChange={(_editor, _data, value) =>
                    handleChangeConfig(value)
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
