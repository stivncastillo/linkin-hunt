import React, { Component } from 'react';
import './style.scss';

class Home extends Component {
  render() {
    return (
      <div>
        <section className="section">
          <div className="container is-fluid">
            <div class="columns is-vcentered">
              <div class="column is-3">
                <figure>
                  <p class="image is-64x64">
                    <img alt="Logo" src="https://bulma.io/images/placeholders/128x128.png" />
                  </p>
                </figure>
              </div>
              <div class="column is-6">
                <input class="input is-rounded is-medium" type="text" placeholder="Rounded input" />
              </div>
              <div class="column is-3">
                <div class="field is-grouped is-pulled-right">
                  <p class="control">
                    <a class="button is-medium is-primary">
                      <i className="fa fa-plus" />
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="columns">
              <div className="column is-3">
                <aside class="menu">
                  <ul class="menu-list">
                    <li>
                      <a>Home</a>
                    </li>
                  </ul>
                  <p class="menu-label">CATEGORIES</p>
                  <ul class="menu-list">
                    <li>
                      <a>Frontend</a>
                    </li>

                    <li>
                      <a>Backend</a>
                    </li>
                    <li>
                      <a>UX / UI</a>
                    </li>
                    <li>
                      <a>Graphic Designer</a>
                    </li>
                    <li>
                      <a>Devops</a>
                    </li>
                  </ul>
                </aside>
              </div>

              <div className="column is-6">
                <div class="card" style={{ marginBottom: '1em' }}>
                  <div class="card-content">
                    <p class="title">What are the Hooks in React?</p>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe vero ipsam deleniti dignissimos
                      aspernatur error
                    </p>
                  </div>
                  <footer class="card-footer">
                    <a href="#" class="card-footer-item">
                      Save
                    </a>
                    <a href="#" class="card-footer-item">
                      Visit
                    </a>
                  </footer>
                </div>

                <div class="card" style={{ marginBottom: '1em' }}>
                  <div class="card-content">
                    <p class="title">What are the Hooks in React?</p>
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe vero ipsam deleniti dignissimos
                      aspernatur error
                    </p>
                  </div>
                  <footer class="card-footer">
                    <a href="#" class="card-footer-item">
                      Save
                    </a>
                    <a href="#" class="card-footer-item">
                      Visit
                    </a>
                  </footer>
                </div>

                <div className="columns">
                  <div className="column">
                    <nav class="pagination" role="navigation" aria-label="pagination">
                      <a class="pagination-previous" title="This is the first page" disabled>
                        Previous
                      </a>
                      <a class="pagination-next">Next page</a>
                    </nav>
                  </div>
                </div>
              </div>

              <div className="column is-3">
                <div class="card">
                  <div class="card-content has-text-centered">
                    <figure class="image is-128x128" style={{ margin: '0 auto 1em auto' }}>
                      <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
                    </figure>
                    <div class="content">
                      <h5 className="title">Stiven Castillo</h5>
                      <p className="subtitle">@bacabange</p>
                      Developer
                    </div>
                  </div>

                  <footer class="card-footer">
                    <a href="#" class="card-footer-item">
                      Profile
                    </a>
                    <a href="#" class="card-footer-item">
                      Logout
                    </a>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer class="footer">
          <div class="content has-text-centered">
            <p>
              <strong>LinkinHunt</strong> by <a href="http://stivencastillo.com">Stiven Castillo</a>. 2018.
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Home;
