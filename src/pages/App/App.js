import React, { useState } from 'react';
import './App.css';
import {Route, NavLink, Switch} from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../services/userService';

function App() {
  const [user, setUser] = useState(userService.getUser());

  // handleSignupOrLogin = () => {
  //   this.setState({user: userService.getUser()});
  // }

  const handleSignupOrLogin = () => {
    setUser(userService.getUser());
  }

  // handleLogout = () => {
  //   userService.logout();
  //   this.setState({ user: null });
  // }

  const handleLogout = () => {
    console.log('App: handleLogout')
    userService.logout();
    setUser(null);
  }

  return (  
    <div className="App">
      <header className="App-header">
        <nav className='navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-end'>
          <NavLink exact to='/'>Home</NavLink>
          &nbsp;&nbsp;&nbsp;
          <NavLink to='/add'>Add</NavLink>
          &nbsp;&nbsp;&nbsp;
          <NavLink to='/login'>Log In</NavLink>
          &nbsp;&nbsp;&nbsp;
          <NavLink to='/signup'>Sign Up</NavLink>
          &nbsp;&nbsp;&nbsp;
          <NavLink to='/' onClick={handleLogout}>Log Out</NavLink>
        </nav>
      </header>
      <Switch>
        <Route exact path='/' render={() =>
          <h1>Home</h1>
        } />
        {/* <Route path='/login' component={LoginPage}/> */}
        <Route path='/login' render={(props) =>
          <LoginPage
            {...props}
            handleSignupOrLogin={handleSignupOrLogin}
          />
        } />
        {/* <Route path='/signup' component={SignupPage}/> */}
        <Route exact path='/signup' render={({ history }) => 
          <SignupPage
            history={history}
            // handleSignupOrLogin={this.handleSignupOrLogin} // Don't need 'this' when using function components
            handleSignupOrLogin={handleSignupOrLogin}
          />
        }/>
      </Switch>
    </div>
  );
}

export default App;
