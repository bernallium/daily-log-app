import React, { useState } from 'react';
import './App.css';
import {Route, NavLink} from 'react-router-dom';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../services/userService';

function App() {
  const [user, setUser] = useState(userService.getUser());
  return (  
    <div className="App">
      <header className="App-header">
        <nav>
          <NavLink exact to='/'>Home</NavLink>
          &nbsp;&nbsp;&nbsp;
          <NavLink to='/add'>Add</NavLink>
          &nbsp;&nbsp;&nbsp;
          <NavLink to='/login'>Log In</NavLink>
        </nav>
      </header>
      <Route path='/login' component={LoginPage}/>
    </div>
  );
}

export default App;
