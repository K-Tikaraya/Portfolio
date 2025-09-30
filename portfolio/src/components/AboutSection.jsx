import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 8rem 4rem;
  width: 100vw;
 background: linear-gradient(135deg, #0b0f2a, #141936, #1b1f44);
  color: #fff;
  min-height: 100vh;
`;

const Title = styled.h2`
  font-size: 2.8rem;
  color: #ffcc66;
  font-weight: 800;
  margin-bottom: 2rem;
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  max-width: 700px;
  margin-bottom: 1rem;
`;

const EducationContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const EduCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #ffcc66;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(255, 204, 102, 0.3);
  }
`;

const EduTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 700;
  color: #ffcc66;
  margin-bottom: 0.3rem;
`;

const EduDetail = styled.p`
  font-size: 1rem;
  color: #c7c9d9;
  line-height: 1.5;
`;

export default function About() {
  return (
    <Section id="about">
      <Title>About Me</Title>
      <Text>
        Hi, I'm Kiran Tikaraya, a Full-stack Developer with 2+ years of experience.
        I specialize in building dynamic, responsive, and scalable web applications.
        My expertise spans modern frontend frameworks like React.js, backend technologies like Node.js, and AI/ML integration.
      </Text>
      <Text>
        I enjoy tackling challenging problems, exploring innovative solutions, and constantly learning new technologies.
        When I’m not coding, I like contributing to open-source projects, writing tech blogs, and experimenting with AI applications.
      </Text>

      <EducationContainer>
        <EduCard>
          <EduTitle>B.Tech Computer Science</EduTitle>
          <EduDetail>Indian Institute of Engineering Science and Technology, Shibpur (2021 - 2025)</EduDetail>
        </EduCard>
       
      </EducationContainer>
    </Section>
  );
}
