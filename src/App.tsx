import React from 'react';
import './App.css';
import Monaco from './components/editor/monaco'
import MyTerminal from './components/terminal/terminal';
function App() {
  return (
    <div className="App">
      <Monaco language="java"></Monaco>
      <MyTerminal container_id="test"></MyTerminal>
    </div>
  );
}

export default App;
