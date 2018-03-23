import React, { Component } from 'react';

import * as routes from '../../constants/routes';
import { helpers } from '../../utils';
import { getRegisterFetch } from '../../actions/authAction';

import { connect } from 'react-redux';

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
            isLoading: false
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        const {
            email,
            password,
        } = this.state;

        this.props.getRegisterFetch(email, password);

        event.preventDefault();
    }

    componentWillReceiveProps(nextProps){ this._renderFetch(nextProps); }

    _renderFetch = (data) => {
        if (data.authReducer.isLogged) {
            this.setState({ isLoading: false });
            this.props.history.push(routes.HOME);
        }else{
            this.setState(helpers.byPropKey('error', 'The credentials are not valid'));
        }
	}

    render() {

        const { name, email, password, passwordConfirm } = this.state;

        const isInvalid =
            password !== passwordConfirm ||
            password === '' ||
            email === '' ||
            name === '';

        return (
            <div>
                <form className="form-signin" onSubmit={this.onSubmit}>
                    <h2 className="form-signin-heading">Register</h2>

                    { this.props.authReducer.error && <p className="text-danger">{this.props.authReducer.error}</p> }

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        value={name}
                        onChange={event => this.setState(helpers.byPropKey('name', event.target.value))}
                        autoFocus />

                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={event => this.setState(helpers.byPropKey('email', event.target.value))}
                        placeholder="Email"/>

                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={event => this.setState(helpers.byPropKey('password', event.target.value))}
                        placeholder="Password" />

                    <input
                        type="password"
                        className="form-control"
                        value={passwordConfirm}
                        onChange={event => this.setState(helpers.byPropKey('passwordConfirm', event.target.value))}
                        placeholder="Password Confirm" />

                    <div className="checkbox">
                        <label>
                            <input type="checkbox" value="terms" /> Accept Terms and Conditions
                        </label>
                    </div>


                    {this.state.isLoading ?
                        <button className="btn btn-lg btn-primary btn-block" type="button" disabled={true}><i class="fa fa-spinner fa-pulse"></i></button>
                    :
                        <button className="btn btn-lg btn-primary btn-block" disabled={isInvalid} type="submit">Sign up</button>
                    }
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        authReducer: state.authReducer
    }
};

const mapDispatchToProps = dispatch =>{
    return {
        getRegisterFetch: (email, password) => dispatch(getRegisterFetch(email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm)
