import React from 'react';

import Navbar from './components/navbar/Navbar';
import MainSlider from './components/MainSlider';

import './app.scss';

const App = () => {
  return (
    <div className="site-container container-fluid">
      <Navbar />
      <MainSlider />
    </div>
  );
};

export default App;
