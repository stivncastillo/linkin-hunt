import React, { Component } from 'react';
import data from '../../data/links.json';

// Render Prop pattern
class CategoriesData extends Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    this.setState({
      categories: data.categories,
    });
  }

  render() {
    return this.props.render({
      categories: this.state.categories,
    });
  }
}

export default CategoriesData;
