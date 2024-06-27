import React from 'react';
import PortfolioItem from './PortfolioItem';

const projects = [
  { title: 'Project 1', img: 'path/to/img1.jpg', liveLink: 'http://example.com', repoLink: 'http://github.com/war-child' },
  // ...other projects
];

const Portfolio = () => (
  <section>
    {projects.map((project, index) => (
      <PortfolioItem key={index} project={project} />
    ))}
  </section>
);

export default Portfolio;
