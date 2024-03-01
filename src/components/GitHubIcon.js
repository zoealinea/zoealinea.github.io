import React from 'react';
import { TbBrandGithubFilled } from "react-icons/tb";

class GitHubIcon extends React.Component {
    handleClick = () => {
    window.open('https://github.com/zoealinea', '_blank');
    };

    render() {
    return (
        <TbBrandGithubFilled 
        color="#AE887B" 
        size={25} 
        className="cursor-pointer" // removed Tailwind classes
        style={{ 
            marginRight: '10px', 
            marginTop: '10px', 
            transition: 'transform 0.2s', // added transition property
            backgroundColor: '#C3C1AB'
        }} 
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'} // added hover effect
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'} // reset on mouse leave
        onClick={this.handleClick} // Added onClick event
        />
    );
    }
}

export default GitHubIcon;
