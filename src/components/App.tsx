import React from 'react';
import './App.css';
import ColumnOne from './ColumnOne';
import ColumnTwo from './ColumnTwo';
import ColumnThree from './ColumnThree';

function App() {
  return (
    <div className="App">
      <ColumnOne />
      <ColumnTwo />
      <ColumnThree />
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