import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../services/userService';
// import styles from './SignupForm.moduls.css'
import './SignupForm.css'

class SignupForm extends Component {

  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: ''
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
      await userService.signup(this.state);
      // Let <App> know a user has signed up!
      this.props.handleSignupOrLogin();
      // Successfully signed up - show Home page
      this.props.history.push('/');
    } catch (err) {
      // Invalid user data (probably duplicate email)
      this.props.updateMessage(err.message);
    }
  }

  isFormInvalid() {
    return !(this.state.firstName && this.state.lastName && this.state.email && this.state.password === this.state.passwordConfirm);
  }

  render() { 
    return (
      <div className="signup-form"> 
        <h2>Sign Up 📝</h2>
        <form onSubmit={this.handleSubmit}>
          <div class="form-group container">
            <div class="row">
              <div>
                <input type="text" class="form-control" name="firstName" placeholder="First Name" required="required" 
                value={this.state.firstname}
                onChange={this.handleChange}/>
              </div>
              <div>
                <input type="text" class="form-control" name="lastName" placeholder="Last Name" required="required" 
                value={this.state.lastname}
                onChange={this.handleChange}/>
              </div>
            </div>        	
          </div>
          <div class="form-group">
            <input type="email" class="form-control" name="email" placeholder="Email" required="required" 
            value={this.state.email}
            onChange={this.handleChange}/>
          </div>
          <div class="form-group">
            <input type="password" class="form-control" name="password" placeholder="Password" required="required" 
            value={this.state.password}
            onChange={this.handleChange}/>
          </div>
          <div class="form-group">
            <input type="password" class="form-control" name="passwordConfirm" placeholder="Confirm Password" required="required" 
            value={this.state.passwordConf}
            onChange={this.handleChange}/>
          </div>
          <div class="form-group">
            <label class="checkbox-inline">
              <input type="checkbox" required="required"/> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a>
            </label>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block btn-lg" disabled={this.isFormInvalid()}>Sign Up</button>
          </div>
        </form>
        <div>Already have an account? <Link to='/login'>Log in here</Link>
        </div>
      </div>
    );
  }
}

export default SignupForm;