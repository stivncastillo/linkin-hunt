import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import RegisterForm from '../../components/RegisterForm/RegisterForm';
import Header from '../../components/Header/Header';

class Register extends Component {
    render() {
        return (
            <div>
                <Header withSearchBar={false} />
                <RegisterForm history={this.props.history} />
            </div>
        );
    }
}

export default withRouter(Register);
