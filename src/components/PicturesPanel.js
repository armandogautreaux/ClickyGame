import React from 'react';
import characters from '../characters.json';
import PictureItem from './PictureItem';

const PicturesPanel = props => {
  const renderedPictures = characters.map(character => {
    return (
      <PictureItem
        key={character.id}
        name={character.name}
        picture={character.image}
        handleIncrement={props.handleIncrement}
        handleTopScore={props.handleTopScore}
      />
    );
  });
  return <div>{renderedPictures}</div>;
};

export default PicturesPanel;
