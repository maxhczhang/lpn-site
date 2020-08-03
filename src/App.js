import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import LPNSite from './components/main/LPNSite';


function App() {

  return (
    <ParallaxProvider>
      <div>{process.env.PUBLIC_URL}</div>
      <LPNSite></LPNSite>
     
    </ParallaxProvider>
  );
}

export default App;