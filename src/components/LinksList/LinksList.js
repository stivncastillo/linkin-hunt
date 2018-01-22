import React, { Component } from 'react';
import LinkItem from '../LinkItem/LinkItem';

class LinksList extends Component {
  render() {
    return (
        <div>
            <LinkItem
              name="Cómo crear una app en react"
              description="Muy facil, te la metes en el culo y listo"
              views={532}
              favs={35}
            />

            <LinkItem
              name="Cómo ser un pendejo"
              description="Easy, dices meras pendejadas"
              views={765}
              favs={445}
            />
        </div>
    );
  }
}

export default LinksList;
