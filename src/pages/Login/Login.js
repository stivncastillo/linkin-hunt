import React, { Component } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import LoginForm from '../../components/LoginForm/LoginForm';
import AlertBanner from '../../components/AlertBanner/AlertBanner';
import { withFirebase } from '../../components/Firebase';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showError: false,
      error: '',
      errors: [],
      isLoading: false,
    };
  }

  /* static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.errors !== prevState.errors) {
      return { errors: nextProps.errors };
    } else return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.errors !== this.props.errors) {
      let errors = prevProps.errors.filter(error => error !== null);
      this.setState({ errors });
    }
  } */

  handleSignIn = ({ email, password }) => {
    this.setState({ isLoading: true });

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(authUser => {
        console.log('user', authUser);
        // withRouter
        this.props.history.push('/');
      })
      .catch(error => {
        this.setState({ error });
      });
  };

  render() {
    const { isLoading, error } = this.state;

    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">Login</h3>
              <p className="subtitle has-text-grey">Please login to proceed.</p>
              <div className="box">
                <figure className="avatar">
                  <img src="https://placehold.it/128x128" alt="logo" />
                </figure>

                {error && <AlertBanner type="is-danger">{error.message}</AlertBanner>}

                {/* errors.length > 0 &&
                  errors
                    .filter(error => error !== null)
                    .map((error, i) => {
                      return (
                        <AlertBanner key={i} type="is-danger">
                          Error
                        </AlertBanner>
                      );
                    }) */}

                <LoginForm
                  handleSignIn={({ email, password }) => this.handleSignIn({ email, password })}
                  isLoading={isLoading}
                />
              </div>
              <p className="has-text-grey">
                <Link to="/register">Sign Up</Link> &nbsp;·&nbsp;
                <Link to="/register">Forgot Password</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default compose(
  withRouter,
  withFirebase
)(Login);
