import React from 'react';
import CategoryItem from '../CategoryItem/CategoryItem';

const CategoriesList = ({ categories }) => {
  return (
    <ul className="menu-list">
      {categories.map(category => (
        <CategoryItem key={category.id} {...category} />
      ))}
    </ul>
  );
};

export default CategoriesList;
