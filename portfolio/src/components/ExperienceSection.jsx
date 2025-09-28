import React from 'react';
import styled from 'styled-components';

const ExperienceContainer = styled.section`
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

const TimelineContainer = styled.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 2px;
    height: 100%;
    background-color: #e0e0e0;
  }
`;

const ExperienceItem = styled.div`
  position: relative;
  padding-left: 30px;
  margin-bottom: 50px;
  
  &::before {
    content: '';
    position: absolute;
    left: -4px;
    top: 5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #64ffda;
    border: 2px solid white;
  }
`;

const JobTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const Company = styled.h4`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 0.5rem;
`;

const Period = styled.p`
  font-size: 1rem;
  color: #888;
  margin-bottom: 1rem;
  font-style: italic;
`;

const Responsibilities = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ResponsibilityItem = styled.li`
  margin-bottom: 1rem;
  padding-left: 20px;
  position: relative;
  color: #555;
  line-height: 1.6;

  &::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: #64ffda;
  }
`;

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Solutions Inc.',
      period: 'January 2023 - Present',
      responsibilities: [
        'Lead a team of 5 developers in developing and maintaining enterprise-level web applications',
        'Implemented microservices architecture resulting in 40% improvement in system scalability',
        'Mentored junior developers and conducted code reviews to ensure code quality',
        'Collaborated with product managers to define technical requirements and project timelines'
      ]
    }
  ];

  return (
    <ExperienceContainer id="experience">
      <SectionTitle>Experience</SectionTitle>
      <TimelineContainer>
        {experiences.map((exp, index) => (
          <ExperienceItem key={index}>
            <JobTitle>{exp.title}</JobTitle>
            <Company>{exp.company}</Company>
            <Period>{exp.period}</Period>
            <Responsibilities>
              {exp.responsibilities.map((resp, idx) => (
                <ResponsibilityItem key={idx}>{resp}</ResponsibilityItem>
              ))}
            </Responsibilities>
          </ExperienceItem>
        ))}
      </TimelineContainer>
    </ExperienceContainer>
  );
};

export default ExperienceSection;