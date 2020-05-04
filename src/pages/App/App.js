import React, { useState } from 'react';
import './App.css';
import {Route, NavLink, Switch} from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
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
          &nbsp;&nbsp;&nbsp;
          <NavLink to='/signup'>Sign Up</NavLink>
        </nav>
      </header>
      <Switch>
        <Route exact path='/' render={() =>
          <h1>Home</h1>
        } />
        <Route path='/login' component={LoginPage}/>
        <Route path='/signup' component={SignupPage}/>
      </Switch>
    </div>
  );
}

export default App;
