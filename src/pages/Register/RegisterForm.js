import React, { Component } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { withFirebase } from '../../components/Firebase';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  passwordConfirm: '',
  error: null,
};

class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...INITIAL_STATE,
    };

    this.validator = new SimpleReactValidator();
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSignUp = () => {
    if (this.validator.allValid()) {
      const { name, email, password } = this.state;

      this.props.firebase
        .doCreateUserWithEmailAndPassword(email, password)
        .then(authUser => {
          this.setState({ ...INITIAL_STATE });
          // withRouter
          this.props.history.push('/');
        })
        .catch(error => {
          this.setState({ error });
        });
    } else {
      this.validator.showMessages();
      // rerender to show messages for the first time
      this.forceUpdate();
    }
  };

  render() {
    const { name, email, password, passwordConfirm, error } = this.state;
    return (
      <form onSubmit={this.handleSignUp}>
        <div className="field">
          <div className="control">
            <input
              className="input is-medium"
              type="text"
              name="name"
              value={name}
              placeholder="Your Name"
              onChange={this.onChange}
              autoFocus
            />
            {this.validator.message('name', name, 'required|alpha')}
          </div>
        </div>

        <div className="field">
          <div className="control">
            <input
              className="input is-medium"
              type="email"
              name="email"
              value={email}
              onChange={this.onChange}
              placeholder="Your Email"
            />
            {this.validator.message('email', email, 'required|email')}
          </div>
        </div>

        <div className="field">
          <div className="control">
            <input
              className="input is-medium"
              type="password"
              name="password"
              value={password}
              onChange={this.onChange}
              placeholder="Your Password"
            />
            {this.validator.message('password', password, 'required|min:6')}
          </div>
        </div>

        <div className="field">
          <div className="control">
            <input
              className="input is-medium"
              type="password"
              name="passwordConfirm"
              value={passwordConfirm}
              onChange={this.onChange}
              placeholder="Confirm Password"
            />
          </div>
        </div>

        <div className="field">
          <label className="checkbox">
            <input type="checkbox" /> Accept Terms and Conditions
          </label>
        </div>
        <button type="button" onClick={this.handleSignUp} className="button is-block is-info is-medium is-fullwidth">
          Register
        </button>
      </form>
    );
  }
}

export default compose(
  withRouter,
  withFirebase
)(RegisterForm);
