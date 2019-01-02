import React, { Component } from 'react';

export default class LinkItem extends Component {
  render() {
    return (
      <div className="card" style={{ marginBottom: '1em' }}>
        <div className="card-content">
          <p className="title">{this.props.title}</p>
          {this.props.description && <p>{this.props.description}</p>}
          <br />
          <div className="tags">
            <span className="tag is-primary">{this.props.category}</span>
            {this.props.tags.map((tag, index) => {
              return (
                <span key={index} className="tag is-light">
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
        <footer className="card-footer">
          <a href="/" className="card-footer-item">
            <i className="fa fa-heart" />
          </a>
          <a href={this.props.url} className="card-footer-item" target="_blank">
            <i className="fa fa-external-link-alt" />
          </a>
        </footer>
      </div>
    );
  }
}
