import React, { Component } from 'react';

class ProfileCard extends Component {
    render() {
        return (
            <div className="card profile">
                <div className="card-body">
                <div className="profile-image">
                    <img src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png" className="img-fluid rounded-circle" alt="Profile" />
                </div>

                <div className="profile-info col-md-12">
                    <h4>Stiven Castillo</h4>
                    <p>stiven@stiven.com</p>
                </div>

                <div className="profile-actions">
                    <a href="#" class="card-link">Profile</a>
                    <a href="#" class="card-link">My Links</a>
                    <a href="#" class="card-link">Logout</a>
                </div>
                </div>
            </div>
        );
    }
}

export default ProfileCard;
