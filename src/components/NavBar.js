// NavBar.js
import React from 'react';
import '../styles/NavBar.css';

const NavBar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
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
        {/* Add more list items for additional sections */}
      </ul>
    </nav>
  );
};

export default NavBar;
