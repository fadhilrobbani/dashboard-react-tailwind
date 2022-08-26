import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Analytics from './Analytics';
import ScrollToTop from './ScrollToTop';
import NewsLetter from './NewsLetter';

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Hero />
      <Analytics />
      <NewsLetter />
    </>
  );
};

export default App;
