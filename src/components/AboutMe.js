import React from 'react';
import '../styles/AboutMe.css';
import me from '../images/me.jpeg';

const AboutMe = () => {
  return (
    <div className="AboutMe">
      <img src={me} alt="Me" />
      <p>
        I am a hardworking new graduate from <span class='highlight'>Computer Science Software Engineering</span> at ASU, where I graduated <span class='highlight'>Magna Cum Laude</span> and earned a certification in <span class='highlight'>Informatics</span>. I am eager to further my experience, knowledge, and overall education by pursuing a more challenging environment in the tech industry. I hope to collaborate with others and gain knowledge from their perspectives while also making a positive impact on our ever-changing and developing society.
      </p>
    </div>
  );
};

export default AboutMe;
