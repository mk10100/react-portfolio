import React from "react";
import ProjectCard from "../ProjectCard";

const Portfolio = ({ projects }) => {
  return (
    <div>
      <h2>Portfolio</h2>
      <div className="project-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imageSrc={project.imageSrc}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
