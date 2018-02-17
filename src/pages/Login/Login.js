import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import LoginForm from '../../components/LoginForm/LoginForm';
import Header from '../../components/Header/Header';

class Login extends Component {
    render() {
        return (
            <div>
                <Header withSearchBar={false} />
                <LoginForm history={this.props.history} />
            </div>
        );
    }
}

export default withRouter(Login);
