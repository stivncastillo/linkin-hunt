import React, { Component } from 'react';

import Logo from '../../components/Logo/Logo';
import SearchInput from '../SearchInput/SearchInput';
import AddButton from '../AddButton/AddButton';
import ModalForm from '../ModalForm/ModalForm';
import { PropTypes } from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: false,
      isModalShow: false,
    };
  }

  toggleModal = () => {
    this.setState({ isModalShow: !this.state.isModalShow });
  };

  render() {
    return (
      <div className="columns is-vcentered">
        <div className="column is-3">
          <Logo />
        </div>
        <div className="column is-6">
          <SearchInput />
          {this.state.isModalShow && <ModalForm active={this.state.isModalShow} onClose={this.toggleModal} />}
        </div>
        <div className="column is-3">{this.props.isLogged && <AddButton onClick={this.toggleModal} />}</div>
      </div>
    );
  }
}

Header.propTypes = {
  isLogged: PropTypes.bool,
};

Header.defaultProps = {
  isLogged: false,
};

export default Header;
