// NavBar.js
import React from 'react';
import '../styles/NavBar.css';
import MailIcon from './MailIcon';
import LinkedInIcon from './LinkedInIcon';
import GitHubIcon from './GitHubIcon';


const NavBar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <button className="nav-link" onClick={() => scrollToSection('home-section')}>
            Zoe Alinea
        </button>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <button className="nav-link" onClick={() => scrollToSection('section1')}>
            / about me
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={() => scrollToSection('section2')}>
            / experience
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={() => scrollToSection('section3')}>
            / projects
          </button>
        </li>
        {/* Add more list items for additional sections */}
      </ul>
      <div className="navbar-icons">
        <GitHubIcon/>
        <LinkedInIcon/>
        <MailIcon/>
      </div>
    </nav>
  );
};

export default NavBar;
