import React from 'react';

const SliderImage = ({ src }) => {
  if (!src) {
    return <div />;
  }
  const imgStyle = {
    width: src.vertical ? 'auto' : '100%',
    height: src.vertical ? '110%' : 'auto',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  return (
    <img
      class="slider-image"
      src={src.image}
      alt="slder-img"
      style={imgStyle}
    />
  );
};

export default SliderImage;
