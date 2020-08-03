import React from 'react';

import { ParallaxProvider } from 'react-scroll-parallax';
import { HashRouter } from "react-router-dom";

import LPNSite from './components/main/LPNSite';


function App() {

  return (
    <ParallaxProvider>
      <HashRouter>
        <LPNSite></LPNSite>
      </HashRouter>
    </ParallaxProvider>
  );
}

export default App;