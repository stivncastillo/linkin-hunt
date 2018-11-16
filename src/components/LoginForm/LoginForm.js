import React, { Component } from 'react';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: 'stivenca@stiven.com',
      password: '123456',
      rememberme: false,
    };
  }

  render() {
    const { email, password, rememberme } = this.state;

    return (
      <React.Fragment>
        <div className="field">
          <div className="control">
            <input
              className="input is-medium"
              type="email"
              value={email}
              onChange={e => {
                this.setState({ email: e.target.value.trim() });
              }}
              placeholder="Your Email"
              autoFocus=""
            />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <input
              className="input is-medium"
              type="password"
              value={password}
              onChange={e => {
                this.setState({ password: e.target.value });
              }}
              placeholder="Your Password"
            />
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
          className="button is-block is-info is-medium is-fullwidth"
          onClick={() => this.props.submitLogin({ email, password, rememberme })}
        >
          Login
        </button>
      </React.Fragment>
    );
  }
}
