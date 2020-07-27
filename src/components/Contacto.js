import React from 'react';

import './Contacto.scss';

const Contacto = () => {
  const openLink = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="contact-container">
      <div className="contact text-center">
        <h4>Contácto</h4>
        <span
          className="contact-phone"
          onClick={() => openLink('https://bit.ly/infoFotosMarianaEnciso')}
        >
          33.2596.0555
        </span>
      </div>
      <div className="bottom-line bottom-line-white bottom-line-contacto"></div>
    </div>
  );
};

export default Contacto;
