import React from 'react';
import './App.css';
import {Route, NavLink} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <NavLink exact to='/'>LIST</NavLink>
          &nbsp;&nbsp;&nbsp;
          <NavLink exact to='/add'>ADD</NavLink>
        </nav>
      </header>
    </div>
  );
}

export default App;
