import React from 'react';

const CategoryItem = props => {
  return (
    <li>
      <a className={props.active && 'is-active'}>{props.name}</a>
    </li>
  );
};

export default CategoryItem;
