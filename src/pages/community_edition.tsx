import React, { useState } from "react";
import Monaco from "../components/editor/monaco";
import MyTerminal from "../components/terminal/terminal";
import { Button } from "antd";
import axios from "axios";
import LanguageSelect from "../components/language_select/language_select";

const languages = ["cpp", "java"];

function CommunityEdition() {
  const [language, setLanguage] = useState(0);
  const [code, setCode] = useState("");

  const onClick = () => {
    console.log(code);

    const data = {
      language: language,
      input: "",
      code: code,
    }
    axios.post("/api/judge", data).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="App">
      <LanguageSelect setLanguage={setLanguage}></LanguageSelect>
      <Monaco language={languages[language]} setCode={setCode}></Monaco>
      <Button onClick={onClick}>运行</Button>

      {/* <MyTerminal container_id="test"></MyTerminal> */}
    </div>
  );
}

export default CommunityEdition;
