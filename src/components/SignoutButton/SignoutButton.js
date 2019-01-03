import React from 'react';
import { withFirebase } from '../../components/Firebase';

const SignoutButton = ({ firebase }) => {
  return (
    <React.Fragment>
      <a href="#" onClick={firebase.doSignOut} className="card-footer-item">
        Logout
      </a>
    </React.Fragment>
  );
};

export default withFirebase(SignoutButton);
