// Projects.js
import React from 'react';
import '../styles/Projects.css';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projectData = [
    {
      title: 'GDMS - Asset Tracking Tool',
      description: 'A web-based asset tracking tool that tracks local assets in a given space.',
      githubLink: 'https://github.com/kevbao/Capstone-AssetTrackingTool'
    },
    {
      title: 'zoealinea.github.io',
      description: 'My personal website portfolio project.',
      githubLink: 'https://github.com/zoealinea/zoealinea.github.io'
    },
    {
      title: 'Project Three',
      description: 'Coming Soon!',
      githubLink: ''
    }
  ];

  return (
    <div className="Projects">
      {projectData.map((project, index) => (
        <div className="ProjectTile" key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
            <FaGithub size={32} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
