import React from 'react';
import LinkItem from '../LinkItem/LinkItem';

const LinkList = ({ links }) => {
  return (
    <React.Fragment>
      {links.map(link => (
        <LinkItem key={link.id} {...link} />
      ))}
    </React.Fragment>
  );
};

export default LinkList;
