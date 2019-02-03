import React from 'react';
import PictureItem from './PictureItem';

const PicturesPanel = ({ images, onHandleSuffle }) => {
  const renderedPictures = images.map(image => {
    return (
      <PictureItem
        key={image.id}
        id={image.id}
        name={image.name}
        image={image.image}
        onHandleSuffle={onHandleSuffle}
      />
    );
  });
  return <div>{renderedPictures}</div>;
};

export default PicturesPanel;
