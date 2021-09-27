import React from 'react';
import './App.css';
import Log from '../Log/Log';

const App = (props) => {

  return (
    <div className="app">
      <header className="App-header">
        <h1>Logowanie</h1>
      </header>
      <Log {...props}/>
    </div>
  )
}

export default App;
