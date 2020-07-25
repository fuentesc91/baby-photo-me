import React from 'react';
import { Link } from 'react-router-dom';

const NavbarOptions = ({ menuStatus, options, closeMenu }) => {
  return (
    <ul className={`navbar-options ${menuStatus ? 'show' : null}`}>
      {options.map(({ route, name }, index) => {
        return (
          <li key={index}>
            <Link to={route} onClick={closeMenu}>
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarOptions;
