import React from 'react';
import { HiOutlineMail } from 'react-icons/hi';

class MailIcon extends React.Component {
  handleClick = () => {
    window.location.href = 'mailto:zoealinea@gmail.com';
  };

  render() {
    return (
      <HiOutlineMail 
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

export default MailIcon;
