import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import AlertBanner from './AlertBanner';

const withAlertBanner = WrappedComponent => {
  class withAlertBannerHOC extends React.Component {
    render() {
      return (
        <WrappedComponent>
          <AlertBanner type="info" message="Puto" />
          {this.props.children}
        </WrappedComponent>
      );
    }
  }

  return withAlertBannerHOC;
};

function mapStateToProps(state) {
  return {
    message: state.alertReducer.message,
    type: state.alertReducer.type,
  };
}

export default compose(
  connect(mapStateToProps),
  withAlertBanner
);
