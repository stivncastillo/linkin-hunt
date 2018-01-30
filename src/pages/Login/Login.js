import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import Header from '../../components/Header/Header';

class Login extends Component {
    render() {
        return (
            <div>
                <Header withSearchBar={false} />
                <LoginForm />
            </div>
        );
    }
}

export default Login;
