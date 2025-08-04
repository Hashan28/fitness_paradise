import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Trainers from './components/Trainers';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Contact from './components/Contact';
import WhatappButton from './components/WhatappButton';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Trainers />
      <Pricing />
      <Contact/>
      <Gallery />
      <Footer />
      <WhatappButton/>
    </div>
  );
}

export default App;
