import React from 'react';
import './App.css';
import Monaco from './components/editor/monaco'
function App() {
  return (
    <div className="App">
      <Monaco language="java"></Monaco>
    </div>
  );
}

export default App;
