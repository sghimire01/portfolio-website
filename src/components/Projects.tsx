import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Date Night',
    description: 'A dating idea generator using Google Maps.',
    link: 'https://github.com/sghimire01/your-night-out',
    img: require('../images/datenight.png')
  },
  {
    title: 'Unity Platformer',
    description: '2D platformer with custom physics in C#.',
    link: 'https://github.com/sghimire01/unity-platformer',
    img: require('../images/gameimage.png')
  }
];

const Projects: React.FC = () => (
  <section className="projects">
    <h2>Highlighted Projects</h2>
    <div className="project-grid">
      {projects.map(p => (
        <div key={p.title} className="project">
          <img src={p.img} alt={p.title} />
          <h3>{p.title}</h3>
          <p>{p.description}</p>
          <a href={p.link} target="_blank" rel="noreferrer">View on GitHub</a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
