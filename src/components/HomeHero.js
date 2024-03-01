import '../styles/HomeHero.css';

import React from 'react';
import { ReactTyped } from 'react-typed';


const HomeHero = () => {
  return (
    <div className="HomeHero large-cursor"> {/* Apply the large-cursor class */}
      <ReactTyped
        strings={[
          "<strong><span class='large-text'>hi i'm <span class='me'>zoe</span></span></strong>",
          "<strong><span class='large-text'>welcome to</span></strong>",
          "<strong><span class='large-text'>my <span class='me'>React.js</span> portfolio</span></strong>"
        ]}
        typeSpeed={80}
        backSpeed={40}
        loop
        cursorChar={null} // Hide the original cursor provided by ReactTyped
      />
    </div>
  );
};

export default HomeHero;


