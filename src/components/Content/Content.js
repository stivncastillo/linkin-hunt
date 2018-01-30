import React, { Component } from 'react';
import ContentHeader from './ContentHeader';
import LinksList from '../LinksList/LinksList';

class Content extends Component {
  render() {
    return (
        <div className="list">
            <ContentHeader />

            <LinksList />

            <footer className="text-center">
                <a href="#">show more</a>
            </footer>
        </div>
    );
  }
}

export default Content;
