import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 3rem 0;
  background: #f3f4f6;
  text-align: center;
`;

const Grid = styled.div`
  max-width: 60rem;
  margin: 2rem auto 0 auto;
  display: grid;
  gap: 2rem;
  padding: 0 1rem;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const Card = styled.div`
  background: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  width: 100%;
  height: 10rem;
  object-fit: cover;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Link = styled.a`
  margin-top: auto;
  color: #2563eb;
  &:hover { text-decoration: underline; }
`;

const projects = [
  {
    title: 'Date Night',
    description: 'A dating idea generator using Google Maps.',
    link: 'https://github.com/sghimire01/your-night-out',
    img: require('../images/datenight.png'),
  },
  {
    title: 'Unity Platformer',
    description: '2D platformer with custom physics in C#.',
    link: 'https://github.com/sghimire01/unity-platformer',
    img: require('../images/gameimage.png'),
  },
];

const Projects: React.FC = () => (
  <Section id="projects">
    <h2 className="text-3xl font-bold">Highlighted Projects</h2>
    <Grid>
      {projects.map(p => (
        <Card key={p.title}>
          <Img src={p.img} alt={p.title} />
          <Title>{p.title}</Title>
          <p className="mb-4">{p.description}</p>
          <Link href={p.link} target="_blank" rel="noreferrer">View on GitHub</Link>
        </Card>
      ))}
    </Grid>
  </Section>
);

export default Projects;
