import React, { Component } from 'react';

import { connect } from 'react-redux';

class ProfileCard extends Component {
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
                        <a href="" className="card-link">Logout</a>
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
        // getFetch: (email, password) => dispatch(getFetch(email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCard);

