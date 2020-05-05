import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.css';

const LoginPage = (props) => {
  return (
    <div className='LoginPage'>
      {/* <LoginForm {...this.props} updateMessage={this.updateMessage} /> */}
      <LoginForm />
      <p>{props.message}</p>
    </div>
  );
}

export default LoginPage;