import React, { Component } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import LoginForm from '../../components/LoginForm/LoginForm';
import Alert from '../../components/Alert/Alert';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showError: false,
      error: '',
      errors: [],
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.errors !== prevState.errors) {
      return { errors: nextProps.errors };
    } else return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.errors !== this.props.errors) {
      let errors = prevProps.errors.filter(error => error !== null);
      this.setState({ errors });
    }
  }

  handleLogin = ({ email, password, rememberme }) => {
    this.props.firebase
      .login({
        email,
        password,
      })
      .then(response => this.props.history.push('/'))
      .catch(error => console.log(error));
  };

  render() {
    const { errors } = this.props;
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

                {errors.length > 0 &&
                  errors
                    .filter(error => error !== null)
                    .map((error, i) => {
                      return (
                        <Alert key={i} type="is-danger">
                          {error.message}
                        </Alert>
                      );
                    })}

                <LoginForm submitLogin={this.handleLogin} />
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

function mapStateToProps(state) {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    errors: state.firebase.errors,
  };
}

export default compose(
  firebaseConnect(),
  connect(mapStateToProps)
)(Login);
