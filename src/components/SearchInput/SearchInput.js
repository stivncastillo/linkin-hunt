import React, { Component } from 'react';

class SearchInput extends Component {
  render() {
    return (
        <div className="form-group">
            <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Search..." />
        </div>
    );
  }
}

export default SearchInput;
