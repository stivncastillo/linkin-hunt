import React, { Component } from 'react';

class LoginForm extends Component {
  render() {
    return (
        <div>
            <form className="form-signin">
                <h2 className="form-signin-heading">Please sign in</h2>

                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" autoFocus />

                <input type="password" id="inputPassword" className="form-control" placeholder="Password" />
                <div className="checkbox">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            </form>
        </div>
    );
  }
}

export default LoginForm;
