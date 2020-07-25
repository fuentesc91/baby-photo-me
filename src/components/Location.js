import React from 'react';

import './Location.scss';

const Location = () => {
  const openLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div
      className="location text-center"
      onClick={() => openLink('https://goo.gl/maps/GwPaJ1uUaf1MUbag9')}
    >
      <div className="location-text">
        <div className="d-block">Av. Fidel Velázquez,</div>
        <div className="d-block">Col. Santa Elena Alcalde.</div>
        <div className="d-block font-weight-bold">
          Guadalajara, Jalisco. México
        </div>
      </div>
      <div className="bottom-line bottom-line-white bottom-line-location"></div>
    </div>
  );
};

export default Location;
