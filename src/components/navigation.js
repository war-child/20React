import React from 'react';

const Navigation = ({ currentSection, setCurrentSection }) => {
  const sections = ['About Me', 'Portfolio', 'Contact', 'Resume'];

  return (
    <nav>
      <ul>
        {sections.map(section => (
          <li
            key={section}
            className={currentSection === section ? 'active' : ''}
            onClick={() => setCurrentSection(section)}
          >
            {section}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default navigation;