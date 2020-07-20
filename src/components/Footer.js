import React from 'react';

import FollowMe from './FollowMe';
import Location from './Location';
import Contacto from './Contacto';

import LogoPink from '../img/logos/logo-pink.png';

import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-follow-me">
        <FollowMe />
      </div>
      <div className="footer-data">
        <div className="footer-location">
          <Location />
        </div>
        <div className="footer-contact">
          <Contacto />
        </div>
      </div>
      <div className="footer-logo">
        <img src={LogoPink} alt="logo" />
      </div>
    </div>
  );
};

export default Footer;
