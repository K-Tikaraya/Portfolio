import React from 'react';
import styled from 'styled-components';

const EducationContainer = styled.section`
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

const EducationCard = styled.div`
  background: #ffffff;
  border-radius: 10px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Degree = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 0.5rem;
`;

const Institution = styled.h4`
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

const Description = styled.p`
  color: #555;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const Achievements = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Achievement = styled.li`
  margin-bottom: 0.5rem;
  padding-left: 20px;
  position: relative;
  color: #555;

  &::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: #64ffda;
  }
`;

const EducationSection = () => {
  const educationData = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'University of Technology',
      period: '2019 - 2021',
      description: 'Specialized in Artificial Intelligence and Machine Learning',
      achievements: [
        'Graduated with distinction (3.8/4.0 GPA)',
        'Published research paper on Deep Learning applications',
        'Teaching Assistant for Data Structures course',
        'Member of the Computer Science Honor Society'
      ]
    },
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'Tech Institute',
      period: '2015 - 2019',
      description: 'Foundation in Computer Science and Software Engineering',
      achievements: [
        'First Class Honours (3.7/4.0 GPA)',
        'Led the university coding club',
        'Won first place in national coding competition',
        'Completed internship at leading tech company'
      ]
    }
  ];

  return (
    <EducationContainer id="education">
      <SectionTitle>Education</SectionTitle>
      {educationData.map((edu, index) => (
        <EducationCard key={index}>
          <Degree>{edu.degree}</Degree>
          <Institution>{edu.institution}</Institution>
          <Period>{edu.period}</Period>
          <Description>{edu.description}</Description>
          <Achievements>
            {edu.achievements.map((achievement, idx) => (
              <Achievement key={idx}>{achievement}</Achievement>
            ))}
          </Achievements>
        </EducationCard>
      ))}
    </EducationContainer>
  );
};

export default EducationSection;