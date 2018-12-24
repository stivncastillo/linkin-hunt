import React, { Component } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import { withFirebase } from '../../components/Firebase';
import RegisterForm from './RegisterForm';

class Register extends Component {
  render() {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">Register</h3>
              <p className="subtitle has-text-grey">Please login to proceed.</p>
              <div className="box">
                <figure className="avatar">
                  <img src="https://placehold.it/128x128" alt="logo" />
                </figure>
                <RegisterForm />
              </div>
              <p className="has-text-grey">
                <Link to="/login">Sign In</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withFirebase(Register);
