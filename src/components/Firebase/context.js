import React from 'react';

const FirebaseContext = React.createContext(null);

// HOC for use firebase as prop
export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>{firebase => <Component {...props} firebase={firebase} />}</FirebaseContext.Consumer>
);

export default FirebaseContext;
