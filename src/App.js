import React, { useState } from 'react';

import './App.css';

import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Main from './components/Main'


function App() {
  const [pageNum, setPageNum] = useState(1);

  return (
    <div className="App">
      <Header setPageNum={setPageNum} pageNum={pageNum}></Header>
      
      <div className="App-main">
        <Main pageNum={pageNum}></Main>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;