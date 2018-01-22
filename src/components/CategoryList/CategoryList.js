import React, { Component } from 'react';

class CategoryList extends Component {
  render() {
    return (
        <nav className="menu">
            <h4>Topics</h4>
            <ol className="list-unstyled">
                <li><a href="#">Libraries</a></li>
                <li><a href="#">Frontend</a></li>
                <li><a href="#">Backend</a></li>
                <li><a href="#">UI</a></li>
                <li><a href="#">Frameworks</a></li>
                <li><a href="#">Toturials</a></li>
            </ol>
        </nav>
    );
  }
}

export default CategoryList;
