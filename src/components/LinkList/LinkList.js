import React from 'react';
import LinkItem from '../LinkItem/LinkItem';

const LinkList = ({ links, isLoaded }) => {
  return (
    <React.Fragment>
      {links.length > 0 ? (
        links.map((link, index) => <LinkItem key={index} {...link} />)
      ) : (
        <div className="has-text-centered">
          <i className="fas fa-spinner fa-pulse" />
        </div>
      )}
    </React.Fragment>
  );
};

export default LinkList;
