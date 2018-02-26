import React, { Component } from 'react';

class LinksList extends Component {
  render() {
    return (
        <article className="item">
            <a href={this.props.url} className="item-icons">
                <span className="item-icon">
                    <i className="fa fa-eye"></i> {this.props.views}
                </span>

                <span className="item-icon">
                    <i className="fa fa-heart"></i> {this.props.favs}
                </span>
            </a>

            <div className="item-content">
                <h2>
                    <a href={this.props.url}>{this.props.name}</a>
                </h2>
                <p className="item-description">{this.props.description}</p>
                <summary className="item-summary">
                    <time>19 minutes ago by</time>
                    <a href={this.props.url}>stelabouras</a>
                    <a className="tag" href={this.props.url}>mobile</a>
                </summary>
            </div>
        </article>
    );
  }
}

export default LinksList;
