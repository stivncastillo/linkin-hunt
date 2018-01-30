import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AccessSide extends Component {
  render() {
    return (
        <div>
            <h3>Join us</h3>

            <p>Hey, Help us share those interesting links that you find and that can help us in our day to day.</p>

            <Link to="/register" className="btn btn-primary btn-block">Register</Link>
            <Link to="/login" className="btn btn-secondary btn-block">Login</Link>
        </div>
    );
  }
}

export default AccessSide;
