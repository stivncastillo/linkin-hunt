import React, { Component } from 'react';
import { Tag, Input, Tooltip, Icon } from 'antd';
import CategoriesData from '../CategoriesData/CategoriesData';

export default class ModalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      url: '',
      category: '',
      tags: [],
      inputTagVisible: false,
      inputTagValue: '',
    };
  }

  saveInputRef = input => (this.input = input);

  handleTagRemove = removedTag => {
    const tags = this.state.tags.filter(tag => tag !== removedTag);
    this.setState({ tags });
  };

  showTagInput = () => {
    this.setState({ inputTagVisible: true }, () => this.input.focus());
  };

  handleTagInputChange = e => {
    this.setState({ inputTagValue: e.target.value });
  };

  handleTagInputConfirm = () => {
    const state = this.state;
    const inputTagValue = state.inputTagValue;
    let tags = state.tags;
    if (inputTagValue && tags.indexOf(inputTagValue) === -1) {
      tags = [...tags, inputTagValue];
    }

    this.setState({
      tags,
      inputTagVisible: false,
      inputTagValue: '',
    });
  };

  componentDidMount() {
    console.log('montado');
  }

  render() {
    const { tags, inputTagVisible, inputTagValue } = this.state;

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
              <label className="label">Title</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Awesome bookmark"
                  value={this.state.title}
                  onChange={e => {
                    this.setState({ title: e.target.value });
                  }}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Url</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="https://"
                  value={this.state.url}
                  onChange={e => {
                    this.setState({ url: e.target.value.trim() });
                  }}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Category</label>
              <div className="control">
                <div className="select">
                  <CategoriesData
                    render={({ categories }) => {
                      return (
                        <select
                          onChange={e => {
                            this.setState({ category: e.target.value });
                          }}
                        >
                          <option value="">Select One</option>
                          {categories.map(category => (
                            <option key={category._id} value={category._id} key={category._id}>
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
                {tags.map((tag, index) => {
                  const isLongTag = tag.length > 20;
                  const tagElem = (
                    <Tag key={tag} closable={true} afterClose={() => this.handleTagClose(tag)}>
                      {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                    </Tag>
                  );
                  return isLongTag ? (
                    <Tooltip title={tag} key={tag}>
                      {tagElem}
                    </Tooltip>
                  ) : (
                    tagElem
                  );
                })}
                {inputTagVisible && (
                  <Input
                    ref={this.saveInputRef}
                    type="text"
                    size="small"
                    style={{ width: 78 }}
                    value={inputTagValue}
                    onChange={this.handleTagInputChange}
                    onBlur={this.handleTagInputConfirm}
                    onPressEnter={this.handleTagInputConfirm}
                  />
                )}
                {!inputTagVisible && (
                  <Tag onClick={this.showTagInput} style={{ background: '#fff', borderStyle: 'dashed' }}>
                    <Icon type="plus" /> New Tag
                  </Tag>
                )}
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
