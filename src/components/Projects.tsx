import React from "react";
import styled from "styled-components";
import luffyImg from "../assets/gameimage.png";
import dateImg from "../assets/datenight.png";
import socialiteImg from '../assets/socialite.jpg';
import stockImg from '../assets/stock.png';
import mediaImg from '../assets/mediahost.png';
import modelImg from '../assets/engagement.png';
import trieImg from '../assets/trie.png';

const ProjectsSection = styled.section`
  width: 100%;
  padding: 70px 0 48px 0;
  background: #16161a;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 36px;
  justify-content: center;
  align-items: stretch;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 30px;
    padding: 0 8px;
  }
`;

const ProjectCard = styled.div`
  background: #22223a;
  border-radius: 2.2rem;
  box-shadow: 0 8px 36px rgba(44, 182, 125, 0.09);
  overflow: hidden;
  width: 420px;
  min-width: 320px;
  max-width: 99vw;
  display: flex;
  flex-direction: column;
  transition: transform 0.18s, box-shadow 0.18s;

  &:hover {
    transform: scale(1.034) translateY(-3px);
    box-shadow: 0 18px 60px rgba(44, 182, 125, 0.19);
  }

  @media (max-width: 600px) {
    width: 98vw;
    min-width: unset;
    border-radius: 1.2rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 210px;

  @media (max-width: 600px) {
    height: 145px;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.24s cubic-bezier(0.19, 1, 0.22, 1);

  ${ProjectCard}:hover & {
    transform: scale(1.085);
  }
`;

const ImageGradient = styled.div`
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 55%;
  background: linear-gradient(
    to bottom,
    rgba(34, 34, 58, 0) 0%,
    rgba(34, 34, 58, 0.85) 92%
  );
  pointer-events: none;
`;

const CardContent = styled.div`
  padding: 32px 32px 14px 32px;
  flex: 1;

  @media (max-width: 600px) {
    padding: 16px 12px 10px 12px;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.38rem;
  color: #fff;
  font-weight: 700;
  margin: 0 0 10px 0;
`;

const ProjectDesc = styled.p`
  font-size: 1.03rem;
  color: #b6b6d8;
  margin: 0 0 14px 0;
  line-height: 1.4;
`;

const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;  // for symmetry
  padding: 0 24px 18px 0;
  min-height: 45px;
`;

const GitHubButton = styled.a<{disabled?: boolean}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: ${({ disabled }) => (disabled ? '#4e4e63' : '#24292f')};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: #fff;
  margin-left: 8px;
  text-decoration: none;
  box-shadow: 0 2px 14px 0 rgba(36,41,47,0.14);
  transition: background 0.17s, transform 0.15s;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

  &:hover, &:focus {
    background: ${({ disabled }) => (disabled ? '#4e4e63' : '#7f5af0')};
    transform: ${({ disabled }) => (disabled ? 'none' : 'scale(1.09)')};
  }

  svg {
    width: 22px;
    height: 22px;
  }
`;

const WebsiteButton = styled.a<{disabled?: boolean}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #7f5af0;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: #fff;
  margin-left: 8px;
  text-decoration: none;
  box-shadow: 0 2px 14px 0 rgba(127,90,240,0.14);
  transition: background 0.17s, transform 0.15s;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};

  &:hover, &:focus {
    background: #24292f;
    transform: scale(1.09);
  }

  svg {
    width: 22px;
    height: 22px;
  }
`;

const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-right: auto;
  padding: 0 0 0 24px;
`;

const SkillTag = styled.span`
  background: #7f5af0;
  color: #ffffff;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(127, 90, 240, 0.2);
`;

interface Project {
  title: string;
  desc: string;
  img: string;
  github?: string;
  website?: string;
  skills: string[];
}

const projects: Project[] = [
  {
    title: "Media Host",
    desc: "A full-stack media hosting platform, supporting uploads, embeds, and downloads.",
    img: mediaImg,
    skills: ['React (Vite)', 'TypeScript', 'AWS', 'REST'],
  },
  {
    title: "Luffy King",
    desc: "A Unity Platformer inspired by Jump King.",
    img: luffyImg,
    github: "https://github.com/sghimire01/luffy-king",
    skills: ['C#', 'Unity'],
  },
  {
    title: "Engagement Model, Alliant National Title Insurance",
    desc: "A web application made for Alliant made to showcase Title Agents that they should engage with",
    img: modelImg,
    skills: ['ML', 'Python', 'Jupyter', 'Node', 'Docker']
  },
  {
    title: "Samwise-Portfolio",
    desc: "A dashboard that visualizes various stock market metrics in real-time, pulling data from yfinance.",
    img: stockImg,
    github: "https://github.com/sghimire01/Samwise-Portfolio",
    skills: ['React', 'Python']
  },
  {
    title: "Date Night",
    desc: "A dating application that algorithmically recommends date ideas, locations, and activities.",
    img: dateImg,
    github: "https://github.com/soei7511/your-night-out",
    skills: ['Node.js', 'PostgreSQL', 'Docker']
  },
  {
    title: "Based Book",
    desc: "A twitter-like social media application",
    img: socialiteImg,
    github: "https://github.com/soga2001/BasedBook",
    skills: ['Typescript', 'Python', 'React', 'MongoDB']
  },
  {
    title: "Trie vs BST Runtime",
    desc: "A C++ Algorithm to check speeds of different DSA",
    img: trieImg,
    github: "https://github.com/sghimire01/Quinlan_Ghimire_2275Project",
    skills: ['C++', 'DSA']
  },
];

const Projects = () => (
  <ProjectsSection id="projects">
    <ProjectsContainer>
      {projects.map((proj, i) => (
        <ProjectCard key={i}>
          <ImageWrapper>
            <ProjectImage src={proj.img} alt={proj.title} />
            <ImageGradient />
          </ImageWrapper>
          <CardContent>
            <ProjectTitle>{proj.title}</ProjectTitle>
            <ProjectDesc>{proj.desc}</ProjectDesc>
          </CardContent>
<CardFooter>
  <SkillsWrapper>
    {proj.skills.map((skill, idx) => (
      <SkillTag key={idx}>{skill}</SkillTag>
    ))}
  </SkillsWrapper>
  {proj.github ? (
    <GitHubButton
      href={proj.github}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="View on GitHub"
    >
      <svg viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
        0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52
        -.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2
        -3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82
        .64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08
        2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01
        1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
      </svg>
    </GitHubButton>
  ) : proj.website ? (
    <WebsiteButton
      href={proj.website}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit Website"
    >
      <svg viewBox="0 0 20 20" fill="currentColor">
        <path d="M12.293 2.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-8.5 8.5a1 1 0 01-.414.242l-4 1a1 1 0 01-1.213-1.213l1-4a1 1 0 01.242-.414l8.5-8.5zM5 13l-1 4 4-1 8.5-8.5-3-3L5 13z" />
      </svg>
    </WebsiteButton>
  ) : (
    <GitHubButton
      as="span"
      disabled
      aria-label="No external link available"
      style={{ opacity: 0.45 }}
    >
      <svg viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
        0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52
        -.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2
        -3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82
        .64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08
        2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01
        1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
      </svg>
    </GitHubButton>
  )}
</CardFooter>

        </ProjectCard>
      ))}
    </ProjectsContainer>
  </ProjectsSection>
);

export default Projects;
