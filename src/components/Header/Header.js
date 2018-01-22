import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import SearchInput from '../SearchInput/SearchInput';

class Header extends Component {
  render() {
    return (
        <header className="main-header">
            <div className="row">
                <div className="col-sm-3">
                    <Logo />
                </div>

                <div className="col-sm-6">
                    <SearchInput />
                </div>
            </div>
        </header>
    );
  }
}

export default Header;
