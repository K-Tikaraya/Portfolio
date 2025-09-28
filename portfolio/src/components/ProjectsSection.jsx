import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 100px 0;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: #64ffda;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
  position: relative;
`;

const ProjectCard = styled.div`
  background: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: #f5f5f5;
  background-image: url(\${props => props.image});
  background-size: cover;
  background-position: center;
`;

const ProjectContent = styled.div`
  padding: 20px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  color: #333;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 15px;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 15px;
`;

const TechTag = styled.span`
  background: #f0f0f0;
  color: #666;
  padding: 4px 10px;
  border-radius: 15px;
  font-size: 0.8rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const ProjectLink = styled.a`
  color: #333;
  text-decoration: none;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    color: #64ffda;
  }

  i {
    font-size: 1.1rem;
  }
`;

const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce platform with features like user authentication, product management, and payment integration.',
      image: '/project1.jpg',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      liveLink: 'https://project1.com',
      githubLink: 'https://github.com/yourusername/project1'
    },
    {
      title: 'Task Management App',
      description: 'A responsive task management application with real-time updates and collaborative features.',
      image: '/project2.jpg',
      techStack: ['React', 'Firebase', 'Material-UI', 'Redux'],
      liveLink: 'https://project2.com',
      githubLink: 'https://github.com/yourusername/project2'
    },
    {
      title: 'Weather Dashboard',
      description: 'A weather dashboard that displays current weather and forecasts using external API integration.',
      image: '/project3.jpg',
      techStack: ['JavaScript', 'OpenWeather API', 'CSS3', 'HTML5'],
      liveLink: 'https://project3.com',
      githubLink: 'https://github.com/yourusername/project3'
    },
    {
      title: 'Social Media Analytics',
      description: 'A dashboard for analyzing social media metrics and generating detailed reports.',
      image: '/project4.jpg',
      techStack: ['Python', 'Django', 'Chart.js', 'PostgreSQL'],
      liveLink: 'https://project4.com',
      githubLink: 'https://github.com/yourusername/project4'
    }
  ];

  return (
    <ProjectsContainer id="projects">
      <SectionTitle>Projects</SectionTitle>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard key={index}>
            <ProjectImage image={project.image} />
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                {project.techStack.map((tech, idx) => (
                  <TechTag key={idx}>{tech}</TechTag>
                ))}
              </TechStack>
              <ProjectLinks>
                <ProjectLink href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i> Code
                </ProjectLink>
                <ProjectLink href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt"></i> Demo
                </ProjectLink>
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default ProjectsSection;