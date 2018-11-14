import React, { Component } from 'react';

import Logo from '../../components/Logo/Logo';
import SearchInput from '../../components/SearchInput/SearchInput';
import AddButton from '../../components/AddButton/AddButton';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: false,
    };
  }

  render() {
    return (
      <div className="columns is-vcentered">
        <div className="column is-3">
          <Logo />
        </div>
        <div className="column is-6">
          <SearchInput />
        </div>
        <div className="column is-3">{this.state.isLogged && <AddButton onClick={this.toggleModal} />}</div>
      </div>
    );
  }
}
