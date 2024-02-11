// NavBar.js
import React from 'react';
import '../styles/NavBar.css';
import { TbBrandGithubFilled } from "react-icons/tb";
import { CiLinkedin } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";

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
        <TbBrandGithubFilled color="#8285B1" size={25} style={{ marginRight: '10px', marginTop: '10px' }} />
        <CiLinkedin color="#8285B1" size={25} style={{ marginRight: '10px', marginTop: '10px' }} />
        <HiOutlineMail color="#8285B1" size={25} style={{ marginRight: '10px', marginTop: '10px' }} />
      </div>
    </nav>
  );
};

export default NavBar;
