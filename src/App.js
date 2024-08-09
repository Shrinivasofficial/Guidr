import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { Hero } from './Components/Hero';
import { Cards } from './Components/Cards';
import { Steps } from './Components/Steps';
import { BlockQuote } from './Components/BlockQuote';
import { Footer } from './Components/Footer';
import { Tools } from './Components/List/Tools'; 
import { Figma } from './Components/List/Figma';

export const App = () => {
  return (
    <Router>
      <div className='relative min-h-screen'>
        <div className='absolute top-0 z-[-2] h-full w-full rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]'></div>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Cards />
              <Steps />
              <BlockQuote />
            </>
          } />
          <Route path="/tools" element={<Tools />} />
          <Route path="/figma" element={<Figma />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
