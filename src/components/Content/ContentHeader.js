import React, { Component } from 'react';

class ContentHeader extends Component {
  render() {
    return (
        <header>
            <div className="row">
                <div className="col-sm-6">
                    <h4>Today</h4>
                </div>
                <div className="col-sm-6 text-right">
                    <div className="dropdown">
                        <button className="btn btn-secondary btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Popular
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
  }
}

export default ContentHeader;
