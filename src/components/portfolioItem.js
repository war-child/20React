import React from 'react';

const PortfolioItem = ({ project }) => (
  <div>
    <h3>{project.title}</h3>
    <img src={project.img} alt={project.title} />
    <a href={project.liveLink}>Live App</a>
    <a href={project.repoLink}>GitHub Repo</a>
  </div>
);

export default PortfolioItem;