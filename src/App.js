import React, { Component } from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import AccessSide from './components/AccessSide/AccessSide';
import CategoryList from './components/CategoryList/CategoryList';

class App extends Component {
  render() {
    return (
      <div>
        <Header />

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

export default App;
