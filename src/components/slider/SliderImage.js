import React from 'react';

const SliderImage = ({ src }) => {
  const imgStyle = {
    width: '100%',
    height: 'auto',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
  };
  return <img src={src} alt="slder-img" style={imgStyle} />;
};

export default SliderImage;
