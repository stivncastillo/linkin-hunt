import React, { Component } from 'react';
import CategoriesData from '../CategoriesData/CategoriesData';

export default class ModalForm extends Component {
  componentDidMount() {
    console.log('montado');
  }
  render() {
    return (
      <div className={`modal ${this.props.active && 'is-active'}`}>
        <div className="modal-background" onClick={this.props.onClose} />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Share new link</p>
            <button className="delete" aria-label="close" onClick={this.props.onClose} />
          </header>
          <section className="modal-card-body">
            <div className="field">
              <label className="label">Url</label>
              <div className="control">
                <input className="input" type="text" placeholder="https://" />
              </div>
            </div>

            <div className="field">
              <label className="label">Category</label>
              <div className="control">
                <div className="select">
                  <CategoriesData
                    render={({ categories }) => {
                      return (
                        <select>
                          {categories.map(category => (
                            <option value={category._id} key={category._id}>
                              {category.name}
                            </option>
                          ))}
                        </select>
                      );
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="field">
              <label className="label">Tags</label>
              <div className="control">
                <input className="input" type="text" placeholder="React, illustrator, php" />
              </div>
            </div>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success">Save</button>
            <button className="button" onClick={this.props.onClose}>
              Cancel
            </button>
          </footer>
        </div>
      </div>
    );
  }
}
