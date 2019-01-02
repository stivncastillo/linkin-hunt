import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SimpleReactValidator from 'simple-react-validator';

const INITIAL_STATE = {
  email: 'stivenca@stiven.com',
  password: '123456',
  rememberme: false,
  error: null,
};

class LoginForm extends Component {
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

  handleSignIn = () => {
    const { email, password, rememberme } = this.state;
    if (this.validator.allValid()) {
      this.setState({ ...INITIAL_STATE });
      this.props.handleSignIn({ email, password, rememberme });
    } else {
      // rerender to show messages for the first time
      this.forceUpdate();
    }
  };

  render() {
    const { email, password, rememberme } = this.state;

    return (
      <React.Fragment>
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
          <label className="checkbox">
            <input
              type="checkbox"
              onChange={e => {
                this.setState({ rememberme: !rememberme });
              }}
            />{' '}
            Remember me
          </label>
        </div>
        <button
          className={`button is-block is-info is-medium is-fullwidth ${this.props.isLoading && 'is-loading'}`}
          onClick={this.handleSignIn}
        >
          Login
        </button>
      </React.Fragment>
    );
  }
}

LoginForm.propTypes = {
  handleSignIn: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

LoginForm.defaultProps = {
  isLoading: false,
};

export default LoginForm;
