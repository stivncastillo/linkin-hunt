import React, { Component } from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import Header from '../../components/Header/Header';

class Register extends Component {
    render() {
        return (
            <div>
                <Header withSearchBar={false} />
                <RegisterForm />
            </div>
        );
    }
}

export default Register;
