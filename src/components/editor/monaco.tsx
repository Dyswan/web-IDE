import { useState } from "react";


import MonacoEditor from 'react-monaco-editor';


export default function Monaco(props: any) {
    const [code, setCode] = useState('')
    const options = {
        selectOnLineNumbers: true
    };
    const onChange = (newValue: string, e: any) => {
        console.log('onChange', newValue, e);
        setCode(newValue);
    }
    const onMounted = (editor: any, monaco: any) => {
        console.log('editorDidMount', editor);
        editor.focus();
    }

    return (
        <MonacoEditor
            // width="800"
            height="700"
            language={props.language}
            theme="vs-dark"
            value={code}
            options={options}
            onChange={onChange}
            editorDidMount={onMounted}
        />
    );
}