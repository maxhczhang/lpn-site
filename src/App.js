import React, { useState } from 'react';

import './App.css';

import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Main from './components/Main'

//beige: #E8D49D
//maroon: #8B2942
//navy: #003273
//ΛΦΝ

function App() {
  const [pageNum, setPageNum] = useState(0);

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


{/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
