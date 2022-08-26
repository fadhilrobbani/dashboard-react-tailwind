import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Analytics from './Analytics';
import ScrollToTop from './ScrollToTop';

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Hero />
      <Analytics />
    </>
  );
};

export default App;
