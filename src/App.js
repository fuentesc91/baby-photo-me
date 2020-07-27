import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Home from './views/Home';
import Mariana from './views/Mariana';
import Footer from './views/Footer';

import './app.scss';

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarStatus, setNavbarStatus] = useState(true);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > scrollPosition + 100) {
        setScrollPosition(window.pageYOffset);
        if (navbarStatus) {
          setNavbarStatus(false);
        }
      }

      if (window.pageYOffset < scrollPosition - 100) {
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
      <Router>
        <Navbar navbarStatus={navbarStatus} setNavbarStatus={setNavbarStatus} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home/:id">
            <Home />
          </Route>
          <Route exact path="/mariana">
            <Mariana />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
