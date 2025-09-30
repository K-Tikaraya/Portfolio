import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.section`
  padding: 8rem 4rem;
  width: 100vw;
  background: linear-gradient(135deg, #0b0f2a, #141936, #1b1f44);
  color: #fff;
  min-height: 100vh;
`;

const SectionTitle = styled.h2`
  font-size: 2.8rem;
  color: #ffcc66;
  font-weight: 800;
  margin-bottom: 4rem;
  text-align: left;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 columns */
  gap: 60px;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* single column on mobile */
  }
`;

const ProjectCard = styled.div`
  background: #1b1f44;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.12);
    background: #252a5c;
    box-shadow: 0 0 20px rgba(255, 204, 102, 0.6);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background-color: #f5f5f5;
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const ProjectContent = styled.div`
  padding: 20px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  color: #9fa8da;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  color: #ddd;
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
  background: #323871ff;
  color: #fff;
  padding: 4px 10px;
  border-radius: 15px;
  font-size: 0.8rem;
`;

const ProjectLink = styled.a`
  color: #ffcc66;
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
      title: 'AlgoWatch',
      description:
        'Dashboard to track Codeforces activity for 30+ students, including contest history, rating graphs, solved problems, inactivity detection, reminders, and CSV export.',
      image: '/images/project-algowatch.jpg', // replace with your screenshot
      techStack: ['React.js', 'Node.js', 'MongoDB', 'Cron', 'Nodemailer'],
      githubLink: 'https://github.com/K-Tikaraya/AlgoWatch',
    },
    {
      title: 'Expense Tracker App',
      description:
        'MERN-based application to track income and expenses with JWT authentication, category tracking, interactive charts, and Excel export for reporting.',
      image: '/images/expense.png', // replace with your screenshot
      techStack: ['MongoDB', 'React.js', 'Node.js', 'JWT', 'Tailwind CSS'],
      githubLink: 'https://github.com/K-Tikaraya/Expense_Tracker',
    },
    {
      title: 'Code Editor',
      description:
        'An interactive HTML code editor featuring real-time preview, syntax highlighting, responsive design, dark/light mode, and a live coding option.',
      image: '/images/project-codeeditor.jpg', // replace with your screenshot
      techStack: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/K-Tikaraya/CodeEditor', // replace with actual repo
    },
    {
      title: 'Color Picking Extension',
      description:
        'A browser extension enabling users to pick any color on the screen, view picked colors, and copy or clear them with a single click.',
      image: '/images/project-colorpicker.jpg', // replace with your screenshot
      techStack: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/K-Tikaraya/ColorPickerExtension', // replace with actual repo
    },
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
              <ProjectLink
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i> Code
              </ProjectLink>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default ProjectsSection;
