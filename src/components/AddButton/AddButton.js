import React from 'react';

const AddButton = props => {
  return (
    <div className="field is-grouped is-pulled-right">
      <p className="control">
        <button className="button is-medium is-primary" {...props}>
          <i className="fa fa-plus" />
        </button>
      </p>
    </div>
  );
};

export default AddButton;
