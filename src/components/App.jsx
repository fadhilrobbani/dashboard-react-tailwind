import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Analytics from './Analytics';
import ScrollToTop from './ScrollToTop';
import NewsLetter from './NewsLetter';
import Cards from './Cards';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard.jsx';
import Blog from '../pages/Blog.jsx';
import About from '../pages/About.jsx';
import Footer from './Footer';

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/about' element={<About />} />
      </Routes> */}
      <ScrollToTop />
      <Hero />
      <Analytics />
      <NewsLetter />
      <Cards />
      <Footer />
    </>
  );
};

export default App;
