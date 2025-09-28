import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 100px 0;

  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: #a5320cff;
  }
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 50px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const AboutText = styled.div`
  p {
    margin-bottom: 1rem;
    font-size: 1.1rem;
    line-height: 1.7;
    color: #555;
  }
`;

const SkillsContainer = styled.div`
  background: #f8f9fa;
  padding: 25px;
  border-radius: 8px;
`;

const SkillsTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  list-style-type: none;
  padding: 0;
`;

const SkillItem = styled.li`
  font-size: 1rem;
  color: #555;
  padding: 8px 0;
  display: flex;
  align-items: center;

  &:before {
    content: '▹';
    color: #64ffda;
    margin-right: 10px;
  }
`;

const AboutSection = () => {
  const skills = [
    'JavaScript (ES6+)',
    'React.js',
    'Node.js',
    'Python',
    'SQL',
    'MongoDB',
    'Git',
    'RESTful APIs',
    'TypeScript',
    'Express.js',
    'Docker',
    'AWS'
  ];

  return (
    <AboutContainer id="about">
      <SectionTitle>About Me</SectionTitle>
      <AboutContent>
        <AboutText>
          <p>
            Hello! I'm a passionate software developer with a strong foundation in both frontend and backend technologies. 
            My journey in software development began during my college years, and since then, I've been continuously learning 
            and growing in this ever-evolving field.
          </p>
          <p>
            I specialize in building exceptional digital experiences, focusing on creating efficient, scalable, and user-friendly 
            applications. With a keen eye for detail and a love for clean code, I strive to write maintainable and efficient 
            solutions to complex problems.
          </p>
          <p>
            Currently, I'm focused on building accessible, human-centered products while constantly expanding my knowledge in 
            emerging technologies and best practices in software development.
          </p>
        </AboutText>
        <SkillsContainer>
          <SkillsTitle>Skills</SkillsTitle>
          <SkillsList>
            {skills.map((skill, index) => (
              <SkillItem key={index}>{skill}</SkillItem>
            ))}
          </SkillsList>
        </SkillsContainer>
      </AboutContent>
    </AboutContainer>
  );
};

export default AboutSection;