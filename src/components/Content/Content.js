import React, { Component } from 'react';
import ContentHeader from './ContentHeader';
import LinksList from '../LinksList/LinksList';

class Content extends Component {
  render() {
    return (
        <div className="list">
            <ContentHeader />

            <LinksList />
        </div>
    );
  }
}

export default Content;
