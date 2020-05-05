import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../services/userService';
// import styles from './SignupForm.moduls.css'
import './SignupForm.css'

class SignupForm extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    passwordConf: ''
  };

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.signup(this.state);
      // Let <App> know a user has signed up!
      this.props.handleSignupOrLogin();
      // Successfully signed up - show GamePage
      this.props.history.push('/');
    } catch (err) {
      // Invalid user data (probably duplicate email)
      this.props.updateMessage(err.message);
    }
  }

  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
  }

//   render() {
//     return (
//       <div className='signup-form'>
//         <h2>Sign Up</h2>
//         <form className="form-horizontal" onSubmit={this.handleSubmit} >
//           <div className="form-group">
//             <div className="col-sm-12">
//               <input type="text" className="form-control" placeholder="First Name" value={this.state.name} name="firstname" onChange={this.handleChange} />
//             </div>
//           </div>
//           <div className="form-group">
//             <div className="col-sm-12">
//               <input type="text" className="form-control" placeholder="Last Name" value={this.state.name} name="lastname" onChange={this.handleChange} />
//             </div>
//           </div>
//           <div className="form-group">
//             <div className="col-sm-12">
//               <input type="email" className="form-control" placeholder="Email" value={this.state.email} name="email" onChange={this.handleChange} />
//             </div>
//           </div>
//           <div className="form-group">
//             <div className="col-sm-12">
//               <input type="password" className="form-control" placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange} />
//             </div>
//           </div>
//           <div className="form-group">
//             <div className="col-sm-12">
//               <input type="password" className="form-control" placeholder="Confirm Password" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} />
//             </div>
//           </div>
//           <div className="form-group">
//             <div className="col-sm-12 text-center">
//               {/* <Link to='/' className="btn btn-link" >Cancel</Link> */}
//               <button className="btn btn-primary" disabled={this.isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;
//             </div>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

  render() { 
    return (
      <div className="signup-form"> 
        <form action="/examples/actions/confirmation.php" method="post">
          <h2>Sign Up</h2>
          <div class="form-group container">
            <div class="row">
              <div>
                <input type="text" class="form-control" name="firstname" placeholder="First Name" required="required" value={this.state.name}onChange={this.handleChange}/>
              </div>
              <div>
                <input type="text" class="form-control" name="lastname" placeholder="Last Name" required="required" value={this.state.name}onChange={this.handleChange}/>
              </div>
            </div>        	
          </div>
          <div class="form-group">
            <input type="email" class="form-control" name="email" placeholder="Email" required="required" value={this.state.email} onChange={this.handleChange}/>
          </div>
          <div class="form-group">
            <input type="password" class="form-control" name="password" placeholder="Password" required="required" value={this.state.password} onChange={this.handleChange}/>
          </div>
          <div class="form-group">
            <input type="password" class="form-control" name="confirm_password" placeholder="Confirm Password" required="required" value={this.state.passwordConf} onChange={this.handleChange}/>
          </div>        
          <div class="form-group">
            <label class="checkbox-inline"><input type="checkbox" required="required"/> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
          </div>
          <div class="form-group">
            {/* <button type="submit" class="btn btn-primary btn-block btn-lg" disabled={this.isFormInvalid()}>Sign Up</button> */}
            <button type="submit" class="btn btn-primary btn-block btn-lg">Sign Up</button>
          </div>
        </form>
        <div>Already have an account? <Link to='/login'>Log in here</Link>
        </div>
      </div>
    );
  }
}

export default SignupForm;