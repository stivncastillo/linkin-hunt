import React, { Component } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  render() {
    return (
      <section class="hero is-fullheight">
        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="column is-4 is-offset-4">
              <h3 class="title has-text-grey">Login</h3>
              <p class="subtitle has-text-grey">Please login to proceed.</p>
              <div class="box">
                <figure class="avatar">
                  <img src="https://placehold.it/128x128" />
                </figure>
                <form>
                  <div class="field">
                    <div class="control">
                      <input class="input is-medium" type="email" placeholder="Your Email" autofocus="" />
                    </div>
                  </div>

                  <div class="field">
                    <div class="control">
                      <input class="input is-medium" type="password" placeholder="Your Password" />
                    </div>
                  </div>
                  <div class="field">
                    <label class="checkbox">
                      <input type="checkbox" /> Remember me
                    </label>
                  </div>
                  <button class="button is-block is-info is-medium is-fullwidth">Login</button>
                </form>
              </div>
              <p class="has-text-grey">
                <Link to="/register">Sign Up</Link> &nbsp;·&nbsp;
                <a href="../">Forgot Password</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
