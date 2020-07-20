import React, { useState, useEffect } from 'react';

import Navbar from './components/navbar/Navbar';
import MainSlider from './components/MainSlider';
import Embarazo from './components/Embarazo';
import NewBorn from './components/NewBorn';
import Baby from './components/Baby';
import Bautizo from './components/Bautizo';
import Smash from './components/Smash';

import Footer from './components/Footer';

import './app.scss';

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarStatus, setNavbarStatus] = useState(true);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > scrollPosition + 200) {
        setScrollPosition(window.pageYOffset);
        if (navbarStatus) {
          setNavbarStatus(false);
        }
      }

      if (window.pageYOffset < scrollPosition - 200) {
        setScrollPosition(window.pageYOffset);
        if (!navbarStatus) {
          setNavbarStatus(true);
        }
      }
    };
    return () => {
      window.onscroll = null;
    };
  }, [scrollPosition, navbarStatus]);

  return (
    <div className="site-container container-fluid">
      <div style={{ position: 'fixed', top: 0, zIndex: 999 }}>
        {scrollPosition}, {navbarStatus ? 'true' : 'false'}
      </div>
      <Navbar scrollPosition={scrollPosition} navbarStatus={navbarStatus} />
      <MainSlider />
      <Embarazo />
      <NewBorn />
      <Baby />
      <Bautizo />
      <Smash />
      <Footer />
    </div>
  );
};

export default App;
