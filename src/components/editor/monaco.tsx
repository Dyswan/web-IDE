import { useState } from "react";
import useWindowSize from '../../hooks/windowSize';

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
    const size = useWindowSize()
    return (
        <div>
            <MonacoEditor
                width={size.innerWidth}
                height={size.innerHeight*0.65}
                language={props.language}
                theme="vs-dark"
                value={code}
                options={options}
                onChange={onChange}
                editorDidMount={onMounted}
            />
        </div>
    );
}