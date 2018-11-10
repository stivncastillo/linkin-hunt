import React from 'react';
import LinkItem from '../LinkItem/LinkItem';

const LinkList = ({ links }) => {
  return (
    <React.Fragment>
      {links.map(link => (
        <LinkItem {...link} />
      ))}
    </React.Fragment>
  );
};

export default LinkList;
