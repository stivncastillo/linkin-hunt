import React, { Component } from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
// Own components
import Logo from '../../components/Logo/Logo';
import SearchInput from '../../components/SearchInput/SearchInput';
import AddButton from '../../components/AddButton/AddButton';
import ModalForm from '../../components/ModalForm/ModalForm';
import CategoriesList from '../../components/CategoriesList/CategoriesList';
import LinkList from '../../components/LinkList/LinkList';
import LinkData from '../../components/LinkData/LinkData';
import CategoriesData from '../../components/CategoriesData/CategoriesData';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: false,
    };
  }

  render() {
    return (
      <div>
        <ModalForm />
        <section className="section">
          <div className="container is-fluid">
            <div className="columns is-vcentered">
              <div className="column is-3">
                <Logo />
              </div>
              <div className="column is-6">
                <SearchInput />
              </div>
              <div className="column is-3">
                <AddButton />
              </div>
            </div>

            <div className="columns">
              <div className="column is-3">
                <aside className="menu">
                  <p className="menu-label">CATEGORIES</p>

                  <CategoriesData render={({ categories }) => <CategoriesList categories={categories} />} />
                </aside>
              </div>

              <div className="column is-6">
                <LinkData
                  render={({ links }) => (
                    <div className="notification">
                      It was found <strong>{links.length}</strong> bookmarks
                    </div>
                  )}
                />

                <LinkData render={({ links }) => <LinkList links={links} />} />

                <div className="columns">
                  <div className="column">
                    <nav className="pagination" role="navigation" aria-label="pagination">
                      <a className="pagination-previous" title="This is the first page" disabled>
                        Previous
                      </a>
                      <a className="pagination-next">Next page</a>
                    </nav>
                  </div>
                </div>
              </div>

              <div className="column is-3">
                {this.state.isLogged ? (
                  <div className="columns">
                    <div className="column">
                      <div className="card">
                        <div className="card-content has-text-centered">
                          <figure className="image is-128x128" style={{ margin: '0 auto 1em auto' }}>
                            <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
                          </figure>
                          <div className="content">
                            <h5 className="title">Stiven Castillo</h5>
                            <p className="subtitle">@bacabange</p>
                            Developer
                          </div>
                        </div>

                        <footer className="card-footer">
                          <a href="#" className="card-footer-item">
                            Profile
                          </a>
                          <a href="#" className="card-footer-item">
                            Logout
                          </a>
                        </footer>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="columns">
                    <div className="column">
                      <div className="card">
                        <div className="card-content has-text-centered">
                          <div className="content">
                            <h5 className="title">Hi, Join us!</h5>
                            We are a community of Developers, Designers or Anyone interesed to tech.
                          </div>
                        </div>

                        <footer className="card-footer">
                          <Link to="/login" className="card-footer-item">
                            Sign in
                          </Link>
                          <a href="#" className="card-footer-item">
                            Register
                          </a>
                        </footer>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="content has-text-centered">
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