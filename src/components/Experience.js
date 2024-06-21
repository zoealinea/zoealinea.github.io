import React, { useState } from 'react';
import '../styles//Experience.css';

const Experience = () => {
  const [selectedJob, setSelectedJob] = useState(0);

  const experienceItems = [
    {
      title: "Early Warning Services - Zelle",
      duration: "January 2024 - April 2024",
      description: "Built CI/CD pipelines to help streamline and accelerate the Dev and QA Team’s software development lifecycle. The tech stack included Java Services built with Spring Boot. CD using Harness, Ansible, HashiCorp Vault. Edited and validated Ansible Playbooks in GitLab as needed. Used agile methodologies, completed stories assigned in Jira, and wrote thorough documentation. Conducted a final culminating presentation on project in front of 50+ colleagues and managers.",
    },
    {
      title: "Openprise",
      duration: "June 2022 - May 2023",
      description: "Developed a metrics dashboard for Engineering and Sales teams: To track product performance and customer trends to display in corporate office space. Display data usage metrics for sales optimization and bug identification. Built the backend server with the Micronaut framework. Made to support seamless data transmission via RESTFUL APIs to interact with MySQL database and Elasticsearch search engine. Applied data engineering techniques, focusing on ETL processes. Dynamic Frontend built with Javascript, HTML, and CSS. Built utilizing Vue.js, Axios, and Pinia state management. Employed Apache Echarts for real-time, engaging, data visualization. Nginx reverse proxy, JWT authentication, and OAuth for data security. Containerization using Docker and also assisted with deployment.",
    }
    // {
    //   title: "",
    //   duration: "",
    //   description: ""
    // }
    // add more job experiences as needed
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
