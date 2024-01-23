import React from 'react';
import './index.css';
import Header from './components/Header';
import Main from './components/Main'; 
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-site bg-no-repeat bg-cover overflow-hidden bg-bgcolor">
      {/* <Navbar /> */}
      <Header />
      <Main />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
