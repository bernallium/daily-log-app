import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../services/userService';
import './LoginForm.css'

class LoginForm extends Component {

  state = {
    email: '',
    password: '',
  };

  handleChange = (e) => {
    // console.log(`e.target.name = ${e.target.name}`)
    // console.log(`e.target.value = ${e.target.value}`);
    // this.props.updateMessage('');
    e.persist();
    this.setState(state => ({
      [e.target.name]: e.target.value
    }));
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(this.state);
      // Let <App> know a user has signed up!
      this.props.handleSignupOrLogin();
      // Successfully signed up - show HomePage
      this.props.history.push('/');
    } catch (err) {
      console.log(err);
      // Use a modal or toast in your apps instead of alert
      alert('Invalid Credentials!');
    }
  }

  isFormInvalid() {
    return !(this.state.email && this.state.password);
  }

  render() { 
    return (
      <div className="login-form"> 
        <h2>Log in <span role='img' aria-label='waving hand'>👋</span></h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="email" className="form-control" name="email" placeholder="Email" required="required" 
            value={this.state.email}
            onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" name="password" placeholder="Password" required="required" 
            value={this.state.password}
            onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block btn-lg" disabled={this.isFormInvalid()}>Log in</button>
          </div>
        </form>
        <div>Don't have an account? <Link to='/signup'>Sign up here</Link>
        </div>
      </div>
    );
  }
}

export default LoginForm;