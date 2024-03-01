import React from 'react';
import { CiLinkedin } from 'react-icons/ci';

class LinkedInIcon extends React.Component {
  handleClick = () => {
    window.open('https://www.linkedin.com/in/zoe-alinea/', '_blank');
  };

  render() {
    return (
      <CiLinkedin 
        color="#AE887B" 
        size={25} 
        className="cursor-pointer" 
        style={{ 
          marginRight: '10px', 
          marginTop: '10px', 
          transition: 'transform 0.2s', 
          backgroundColor: '#C3C1AB'
        }} 
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} 
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'} 
        onClick={this.handleClick} // Added onClick event
      /> 
    );
  }
}

export default LinkedInIcon;
