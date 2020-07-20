import React from 'react';

import FollowMe from './FollowMe';
import Location from './Location';

import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-follow-me">
        <FollowMe />
      </div>
      <div className="footer-contact">
        <div className="footer-location">
          <Location />
        </div>
        <div className="footer-contact"></div>
      </div>
      <div className="footer-logo"></div>
    </div>
  );
};

export default Footer;
