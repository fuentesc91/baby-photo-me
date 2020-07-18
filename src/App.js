import React from 'react';

import Navbar from './components/navbar/Navbar';
import MainSlider from './components/MainSlider';

// Test
import SectionTitle from './components/section-title/SectionTitle';

import './app.scss';

const App = () => {
  return (
    <div className="site-container container-fluid">
      <Navbar />
      <MainSlider />
      <SectionTitle />
    </div>
  );
};

export default App;
