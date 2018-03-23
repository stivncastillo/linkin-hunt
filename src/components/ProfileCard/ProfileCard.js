import React, { Component } from 'react';

import { getLogoutFetch } from '../../actions/authAction';
import * as routes from '../../constants/routes';

import { connect } from 'react-redux';

class ProfileCard extends Component {

    constructor(props) {
        super(props);

        this.onLogout = this.onLogout.bind(this);
    }

    onLogout(event){
        this.props.getLogoutFetch();

        event.preventDefault();
    }

    componentWillReceiveProps(nextProps){ this._renderFetch(nextProps); }

	_renderFetch = (data) => {
        if (! data.authReducer.isLogged) {
            this.props.history.push(routes.HOME);
        }
	}

    render() {
        return (
            <div className="card profile">
                <div className="card-body">
                    <div className="profile-image">
                        <img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png" className="img-fluid rounded-circle" alt="Profile" />
                    </div>

                    <div className="profile-info col-md-12">
                        <h4>{ this.props.authReducer.user.displayName }</h4>
                        <p>{ this.props.authReducer.user.email }</p>
                    </div>

                    <div className="profile-actions d-flex justify-content-center">
                        <a href="" className="card-link">Profile</a>
                        <a href="" onClick={this.onLogout} className="card-link">Logout</a>
                    </div>
                </div>
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
        getLogoutFetch: () => dispatch(getLogoutFetch())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCard);

