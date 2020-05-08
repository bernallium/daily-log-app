import React, { useState } from 'react';
import './App.css';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';
import HomePage from '../HomePage/HomePage.js'
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../services/userService';
import Inbox from '../../components/Inbox/Inbox'
import Daily from '../../components/Daily/Daily'

function App() {
  const [user, setUser] = useState(null);

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

  const QUOTES = [
    'Your brain is for having ideas, not for storing them.',
    'Until you set the priority, your priority is to set the priority.',
    'If you don’t prioritize your life, someone else will.',
    'The key is not spending time, but investing in it.',
    'Let the future you make decisions for you.',
    'How we spend our days, is of course, how we spend our lives.',
    'Big rocks first!',
    'The key is not to prioritize your schedule but to schedule you priorities.'
  ]
  
  const getRandomQuote = () => {
    return QUOTES[Math.floor(Math.random() * QUOTES.length)];
  }

  const getNavbar = () => {
    if (user) {
      return (
        <nav className='navbar navbar-expand-lg navbar-light d-flex justify-content-between'>
          <span class="navbar-text">
            {getRandomQuote()}
          </span>
          <div>
            <NavLink exact to='/'><i class="fas fa-seedling"/>&nbsp;&nbsp;&nbsp;DailyLog</NavLink>
            &nbsp;&nbsp;&nbsp;
            <NavLink to='/login' onClick={handleLogout}>Log Out</NavLink>
          </div>
        </nav>
      )
    } else {
      return (
        <nav className='navbar navbar-expand-lg navbar-light d-flex justify-content-end'>
          <NavLink to='/login'>Log In</NavLink>
          &nbsp;&nbsp;&nbsp;
          <NavLink to='/signup'>Sign Up</NavLink>
        </nav>
      )
    }
  }

  return (  
    <div className="App">
      {getNavbar()}
      <Switch>
        <Route exact path="/">
          {user ? <Redirect to="/home" /> : <Redirect to="/login" />}
        </Route>
        {user && <Route exact path='/home' render={() =>
          <HomePage />
        } />}
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
