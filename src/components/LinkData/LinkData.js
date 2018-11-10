import React, { Component } from 'react';
import data from '../../data/links.json';

// Render Prop pattern
class LinkData extends Component {
  state = {
    links: [],
  };

  componentDidMount() {
    this.setState({
      links: data.links,
    });
  }

  render() {
    return this.props.render({
      links: this.state.links,
    });
  }
}

export default LinkData;
