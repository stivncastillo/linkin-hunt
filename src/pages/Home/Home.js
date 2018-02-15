import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';
import AccessSide from '../../components/AccessSide/AccessSide';
import CategoryList from '../../components/CategoryList/CategoryList';

import { connect } from 'redux';

class Home extends Component {
  render() {
    return (
        <div>
            <Header withSearchBar={true} />
            <div className="row">
                <div className="col-sm-3">
                    <CategoryList />
                </div>

                <div className="col-sm-6">
                    <Content />
                </div>

                <div className="col-sm-3">
                    <AccessSide />
                </div>
            </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        prop: state.MainState
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)