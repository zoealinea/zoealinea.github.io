import './styles/App.css';
import React from 'react';
import NavBar from './components/NavBar';
import HomeHero from './components/HomeHero';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Projects from './components/Projects';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <div id="home-section" className="section">
        <HomeHero />
      </div>
      <div id="section1" className="section">
        <AboutMe />
      </div>
      <div id="section2" className="section">
        <Experience />
      </div>
      <div id="section3" className="section">
        <Projects />
      </div>
      {/* Add more sections as needed */}
    </div>
  );
};

export default App;
