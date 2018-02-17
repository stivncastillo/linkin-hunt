import React, { Component } from 'react';

import * as routes from '../../constants/routes';
import { auth } from '../../firebase';
import { helpers } from '../../utils';

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            ...INITIAL_STATE
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        const {
            email,
            password,
        } = this.state;

        auth.doSignInWithEmailAndPassword(email, password)
            .then(() => {
                this.setState(() => ({ ...INITIAL_STATE }));
                this.props.history.push(routes.HOME);
            })
            .catch(error => {
                this.setState(helpers.byPropKey('error', error));
            });

        event.preventDefault();
    }

    render() {
        const { email, password, error } = this.state;
        const isInvalid =
            password === '' ||
            email === '';

        return (
            <div>
                <form className="form-signin" onSubmit={this.onSubmit}>
                    <h2 className="form-signin-heading">Please sign in</h2>

                    { error && <p className="text-danger">{error.message}</p> }

                    <input
                        type="email"
                        value={email}
                        onChange={event => this.setState(helpers.byPropKey('email', event.target.value))}
                        className="form-control"
                        placeholder="Email address"
                        autoFocus />

                    <input
                        type="password"
                        value={password}
                        onChange={event => this.setState(helpers.byPropKey('password', event.target.value))}
                        className="form-control"
                        placeholder="Password" />

                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit" disabled={isInvalid}>Sign in</button>
                </form>
            </div>
        );
    }
}

export default LoginForm;
