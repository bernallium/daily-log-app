import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.css';
// import userService from '../../services/userService';

const LoginPage = (props) => {
  // const handleChange = (e) => {
  //   this.setState({
  //     // Using ES2015 Computed Property Names
  //     [e.target.name]: e.target.value
  //   });
  // }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await userService.login(this.state);
  //     // Let <App> know a user has signed up!
  //     this.props.handleSignupOrLogin();
  //     // Successfully signed up - show HomePage
  //     this.props.history.push('/');
  //   } catch (err) {
  //     // Use a modal or toast in your apps instead of alert
  //     alert('Invalid Credentials!');
  //   }
  // }


  return (
    <div className='LoginPage'>
      {/* <LoginForm {...this.props} updateMessage={this.updateMessage} /> */}
      <LoginForm {...props} />
      {/* <p>{props.message}</p> */}
    </div>
  );
}

export default LoginPage;