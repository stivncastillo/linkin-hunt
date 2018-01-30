import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Logo extends Component {
  render() {
    return (
        <Link to="/" className="logo">
            <img src="http://via.placeholder.com/300x300" />
        </Link>
    );
  }
}

export default Logo;
