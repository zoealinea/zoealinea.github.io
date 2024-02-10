import './styles/App.css';
import React from 'react';
import NavBar from './components/NavBar';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <div id="section1" className="section">
        <AboutMe />
      </div>
      <div id="section2" className="section">
        <Experience />
      </div>
      {/* Add more sections as needed */}
    </div>
  );
};

export default App;
