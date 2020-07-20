import React from 'react';

const NavbarOptions = ({ menuStatus, options, closeMenu }) => {
  return (
    <ul className={`navbar-options ${menuStatus ? 'show' : null}`}>
      {options.map(({ id, name }, index) => {
        return (
          <li key={index}>
            <a href={`#${id}`} onClick={closeMenu}>
              {name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarOptions;
