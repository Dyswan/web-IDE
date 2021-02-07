import React from 'react';
import './App.css';
import Monaco from './components/editor/monaco'
import MyTerminal from './components/terminal/terminal';
import { Button, Row, Col } from 'antd';
function App() {
  return (
    <div className="App">
      <Monaco language="java"></Monaco>
      <Button>运行</Button>
      {/* <MyTerminal container_id="test"></MyTerminal> */}
    </div>
  );
}

export default App;
