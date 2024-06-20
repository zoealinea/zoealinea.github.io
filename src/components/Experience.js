// Experience.js

import React, { useState } from 'react';
import '../styles//Experience.css';

const Experience = () => {
  const [selectedJob, setSelectedJob] = useState(0);

  const experienceItems = [
    {
      title: "Early Warning Services - Zelle",
      duration: "January 2024 - April 2024",
      description: "Built CI/CD pipelines to help streamline and accelerate the Dev and QA Team’s software development lifecycle. \nThe tech stack included Java Services built with Spring Boot. CD using Harness, Ansible, HashiCorp Vault. \nEdited and validated Ansible Playbooks in GitLab as needed. /nUsed agile methodologies, completed stories assigned in Jira, and wrote thorough documentation. \nConducted a final culminating presentation on project in front of 50+ colleagues and managers.",
    },
    {
      title: "Openprise",
      duration: "June 2022 - May 2023",
      description: "Developed a metrics dashboard for Engineering and Sales teams: \nTo track product performance and customer trends to display in corporate office space. \nDisplay data usage metrics for sales optimization and bug identification. \nBuilt the backend server with the Micronaut framework. \nMade to support seamless data transmission via RESTFUL APIs to interact with MySQL database and Elasticsearch search engine. \nApplied data engineering techniques, focusing on ETL processes. \nDynamic Frontend built with Javascript, HTML, and CSS. \nBuilt utilizing Vue.js, Axios, and Pinia state management. \nEmployed Apache Echarts for real-time, engaging, data visualization. \nNginx reverse proxy, JWT authentication, and OAuth for data security. \nContainerization using Docker and also assisted with deployment.",
    }
    // {
    //   title: "",
    //   duration: "",
    //   description: ""
    // }
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
