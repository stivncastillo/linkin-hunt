import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ProfileCard from '../ProfileCard/ProfileCard';

import { connect } from 'react-redux';

class AccessSide extends Component {
  render() {
    return (
        <div>
          {
            this.props.authReducer.isLogged === true ?
              (
                <ProfileCard />
              )
            :
              (
                <div>
                  <h3>Join us</h3>

                  <p>Hey, Help us share those interesting links that you find and that can help us in our day to day.</p>

                  <Link to="/register" className="btn btn-primary btn-block">Register</Link>
                  <Link to="/login" className="btn btn-secondary btn-block">Login</Link>
                </div>
              )
          }
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

export default connect(mapStateToProps, mapDispatchToProps)(AccessSide);
