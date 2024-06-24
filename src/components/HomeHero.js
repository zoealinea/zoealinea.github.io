import '../styles/HomeHero.css';
import React from 'react';
import { ReactTyped } from 'react-typed';
import smiski from '../images/smiski.png';

const HomeHero = () => {
  return (
    <div className='parent'>
      <img src={smiski} alt="Coding Smiski" />
      <div className="large-cursor">
        <ReactTyped
          strings={[
            "<strong><span class='large-text'>hi i'm <span class='me'>zoe</span></span></strong>",
            "<strong><span class='large-text'>welcome to</span></strong>",
            "<strong><span class='large-text'>my <span class='me'>React.js</span> portfolio</span></strong>"
          ]}
          typeSpeed={95}
          backSpeed={40}
          loop
          cursorChar={null} // hide original cursor provided by ReactTyped library
        />
      </div>
    </div>
  );
};

export default HomeHero;
