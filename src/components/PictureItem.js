import React from 'react';

const PictureItem = ({
  picture,
  name,
  handleIncrement,
  handleTopScore,
  key
}) => {
  return (
    <div>
      <img
        src={picture}
        alt={name}
        onClick={() => handleIncrement(picture)}
        onSubmit={() => handleTopScore(key)}
      />
    </div>
  );
};

export default PictureItem;
