import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import * as routes from '../../constants/routes';

import { auth } from '../../firebase';

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

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

        this.state = { ...INITIAL_STATE }
    }

    onSubmit = (event) => {
        const {
            username,
            email,
            password,
        } = this.state;

        auth.doCreateUserWithEmailAndPassword(email, password)
            .then(authUser => {
                console.log('Registered');
                this.setState(() => ({ ...INITIAL_STATE }));
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });

        event.preventDefault();
    }

    render() {

        const { name, email, password, passwordConfirm, error } = this.state;

        const isInvalid =
            password !== passwordConfirm ||
            password === '' ||
            email === '' ||
            name === '';

        return (
            <div>
                <form className="form-signin" onSubmit={this.onSubmit}>
                    <h2 className="form-signin-heading">Register</h2>

                    { error && <p className="text-danger">{error.message}</p> }

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        value={name}
                        onChange={event => this.setState(byPropKey('name', event.target.value))}
                        autoFocus />

                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={event => this.setState(byPropKey('email', event.target.value))}
                        placeholder="Email" />

                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={event => this.setState(byPropKey('password', event.target.value))}
                        placeholder="Password" />

                    <input
                        type="password"
                        className="form-control"
                        value={passwordConfirm}
                        onChange={event => this.setState(byPropKey('passwordConfirm', event.target.value))}
                        placeholder="Password Confirm" />

                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="terms" /> Accept Terms and Conditions
                        </label>
                    </div>

                    <button
                        className="btn btn-lg btn-primary btn-block"
                        disabled={isInvalid}
                        type="submit">Sign up</button>
                </form>
            </div>
        );
    }
}

export default RegisterForm;
