import React from 'react';

const PictureItem = ({ image, name, onHandleSuffle, id }) => {
  return (
    <div>
      <img src={image} alt={name} onClick={() => onHandleSuffle(id)} />
    </div>
  );
};

export default PictureItem;
