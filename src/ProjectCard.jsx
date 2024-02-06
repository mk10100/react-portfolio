// ProjectCard.jsx
import React from 'react';
import './ProjectCard.css'; // Update the import path based on the file location

const ProjectCard = ({ imageSrc, repoLink }) => {
  return (
    <div className="project-card">
      <div className="image-container">
        <img className="project-image" src={imageSrc} alt="Project Image" />
        <a className="project-link" href={repoLink} target="_blank" rel="noopener noreferrer">
          View Repository
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
