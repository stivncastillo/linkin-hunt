import React, { Component } from 'react';

import * as routes from '../../constants/routes';
import { helpers } from '../../utils';
import { getFetch } from '../../actions/authAction';

import { connect } from 'react-redux';

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class LoginForm extends Component {
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

        this.setState({ isLoading: true });
        this.props.getFetch(email, password);

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
        const { email, password } = this.state;
        const isInvalid =
            password === '' ||
            email === '';

        return (
            <div>
                <form className="form-signin" onSubmit={this.onSubmit}>
                    <h2 className="form-signin-heading">Please sign in</h2>

                    { this.props.authReducer.error && <p className="text-danger">{this.props.authReducer.error}</p> }

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

                    {/* <div className="checkbox">
                        <label>
                            <input type="checkbox" value="remember-me" /> Remember me
                        </label>
                    </div> */}
                    {this.state.isLoading ?
                        <button className="btn btn-lg btn-primary btn-block" type="button" disabled={true}><i className="fa fa-spinner fa-pulse"></i></button>
                    :
                        <button className="btn btn-lg btn-primary btn-block" type="submit" disabled={isInvalid}>Sign in</button>
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
        getFetch: (email, password) => dispatch(getFetch(email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
