import React, { useState } from 'react';
import Monaco from '../components/editor/monaco'
import MyTerminal from '../components/terminal/terminal';
import { Button, Select } from 'antd';
import LanguageSelect from '../components/language_select/language_select'

const languages = ['cpp', 'java']

function CommunityEdition() {
    const [language, setLanguage] = useState(0)
    return (
        <div className="App">
            <LanguageSelect
                setLanguage={setLanguage}
            ></LanguageSelect>
            <Monaco language={languages[language]}></Monaco>
            <Button>运行</Button>

            {/* <MyTerminal container_id="test"></MyTerminal> */}
        </div>
    );
}

export default CommunityEdition;
