import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AccessSide extends Component {
  render() {
    return (
        <div>
            <h3>Join us</h3>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ipsum sequi nulla nam id in voluptatum eveniet sed sapiente, fugiat impedit obcaecati provident labore reprehenderit perferendis est laborum? Dolor, eius.</p>

            <Link to="/register" className="btn btn-primary btn-block">Register</Link>
            <Link to="/login" className="btn btn-secondary btn-block">Login</Link>
        </div>
    );
  }
}

export default AccessSide;
