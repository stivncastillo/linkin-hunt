import React, { Component } from 'react';

export default class LinkItem extends Component {
  render() {
    return (
      <div className="card" style={{ marginBottom: '1em' }}>
        <div className="card-content">
          <p className="title">{this.props.title}</p>
          <p>{this.props.description}</p>
          <br />
          <div className="tags">
            <span className="tag is-primary">{this.props.category.name}</span>
            {this.props.tags.map((tag, index) => {
              return (
                <span key={index} className="tag is-light">
                  {tag.name}
                </span>
              );
            })}
          </div>
        </div>
        <footer className="card-footer">
          <a href="#" className="card-footer-item">
            Save
          </a>
          <a href={this.props.link} className="card-footer-item" target="_blank">
            Visit
          </a>
        </footer>
      </div>
    );
  }
}
