import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <header className="main-header">
            <div className="row">
                <div className="col-sm-3">
                    <a href="#" className="logo">
                        <img src="http://via.placeholder.com/300x300" />
                    </a>
                </div>

                <div className="col-sm-6">
                    <div className="form-group">
                        <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Search..." />
                    </div>
                </div>
            </div>
        </header>
    );
  }
}

export default Header;
