import React, { Component } from 'react';
import LinkItem from '../LinkItem/LinkItem';

class LinksList extends Component {
  render() {
    return (
        <div>
            <LinkItem />
            <LinkItem />
            <LinkItem />
            <LinkItem />
            <LinkItem />
            <LinkItem />
        </div>
    );
  }
}

export default LinksList;
