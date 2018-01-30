import React, { Component } from 'react';

class RegisterForm extends Component {
  render() {
    return (
        <div>
            <form className="form-signin">
                <h2 className="form-signin-heading">Register</h2>

                <input type="text" className="form-control" placeholder="Name" autoFocus />
                <input type="email" className="form-control" placeholder="Email" />
                <input type="password" className="form-control" placeholder="Password" />
                <input type="password" className="form-control" placeholder="Password Confirm" />

                <div className="checkbox">
                    <label>
                        <input type="checkbox" value="terms" /> Accept Terms and Conditions
                    </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
            </form>
        </div>
    );
  }
}

export default RegisterForm;
