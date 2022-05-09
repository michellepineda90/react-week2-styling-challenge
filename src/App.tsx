import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Main from './components/Main/Main';
import Panel from './components/Panel/Panel';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
      <Panel />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>src/App.tsx</code> and save to reload.
        </p>
      </header> */}
    </div>
  );
}

export default App;
