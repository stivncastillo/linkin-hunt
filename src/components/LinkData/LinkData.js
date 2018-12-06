import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import data from '../../data/links.json';

// Render Prop pattern
class LinkData extends React.Component {
  state = {
    links: [],
  };

  /* static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.links !== prevState.links) {
      return { links: nextProps.links };
    } else return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.links !== this.props.links) {
      let links = prevProps.links;
      this.setState({ links });
    }
  } */

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

/* function mapStateToProps(state) {
  return {
    links: state.firebase.data.links
      ? Object.keys(state.firebase.data.links).map(i => state.firebase.data.links[i])
      : [],
  };
}

export default compose(
  firebaseConnect([{ path: '/links', queryParams: ['limitToLast=15'] }]),
  connect(mapStateToProps)
)(LinkData); */
