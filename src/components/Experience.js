// Experience.js

import React, { useState } from 'react';
import '../styles//Experience.css';

const Experience = () => {
  const [selectedJob, setSelectedJob] = useState(0);

  const experienceItems = [
    {
      title: "Early Warning Services - Zelle",
      duration: "Month Year - Month Year",
      description: "Description of job experience 1.",
    },
    {
      title: "Openprise",
      duration: "Month Year - Month Year",
      description: "Description of job experience 2.",
    },
    // Add more job experiences as needed
  ];

  return (
    <div className="experience-container">
      <div className="tabs">
        {experienceItems.map((job, index) => (
          <button
            key={index}
            className={`tab ${selectedJob === index ? 'active' : ''}`}
            onClick={() => setSelectedJob(index)}
          >
            {job.title}
          </button>
        ))}
      </div>
      <div className="job-details">
        <h2>{experienceItems[selectedJob].title}</h2>
        <p>{experienceItems[selectedJob].duration}</p>
        <p>{experienceItems[selectedJob].description}</p>
      </div>
    </div>
  );
};

export default Experience;
