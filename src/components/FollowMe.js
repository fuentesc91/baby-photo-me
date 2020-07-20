import React from 'react';

import FbIcon from '../img/icons/fb-icon-blue.png';
import IgIcon from '../img/icons/ig-icon-blue.png';
import PrIcon from '../img/icons/pr-icon-blue.png';

import './FollowMe.scss';

const FollowMe = () => {
  return (
    <div className="follow-me">
      <h3 className="cursive sigueme">Sígueme</h3>
      <a
        href="https://www.facebook.com/MarianaEncisoBabyPhoto/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={FbIcon} alt="Facebook" />
      </a>
      <a
        href="https://www.facebook.com/MarianaEncisoBabyPhoto/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={IgIcon} alt="Facebook" />
      </a>
      <a
        href="https://www.pinterest.com.mx/marianaencisobabyphoto/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={PrIcon} alt="Facebook" />
      </a>
    </div>
  );
};

export default FollowMe;
