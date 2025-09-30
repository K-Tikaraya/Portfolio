import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const ExperienceSection = styled.section`
  width: 100vw;
  min-height: 100vh;
  padding: 8rem 4rem;
  background: linear-gradient(135deg, #0b0f2a, #141936, #1b1f44);
  color: #fff;
`;

const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: 700;
  color: #ffcc66;
  margin-bottom: 4rem;
  text-align: left;  /* stays on top-left */
  max-width: 950px;
  margin-left: auto;
  margin-right: auto;
`;

const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 950px;
  margin: 0 auto;
`;

const ExperienceCard = styled(motion.div)`
  display: flex;
  align-items: flex-start; /* keep text aligned to top */
  gap: 2.5rem;
  background: #1b1f44;
  padding: 2rem;
  border-radius: 16px;
  border-left: 5px solid #ffcc66;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    background: #252a5c;
    box-shadow: 0 0 25px rgba(255, 204, 102, 0.4);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
`;

const LogoWrapper = styled.div`
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 0; /* this keeps logo vertically centered */
`;

const CompanyLogo = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  border-radius: 16px;
  background: #1b1f44;
  padding: 10px;
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.35);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1) rotate(3deg);
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Role = styled.h3`
  font-size: 1.7rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.6rem;
`;

const Company = styled.h4`
  font-size: 1.3rem;
  color: #9fa8da;
  margin-bottom: 0.3rem;
`;
const Date = styled.p`
  font-size: 0.95rem;
  color: #aaa;
  margin-bottom: 0.3rem;
  text-align: right;  // this will push the text to the right
`;


const BulletList = styled.ul`
  margin-left: 1.2rem;
  color: #c7c9d9;
  font-size: 0.96rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    margin-left: 0;
    padding-left: 0;
    list-style: none;
  }
`;

export default function Experience() {
  return (
    <ExperienceSection id="experience">
      {/* Section heading stays at the very top */}
      <Title>Experience</Title>

      <Timeline>
        <ExperienceCard
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <LogoWrapper>
            <CompanyLogo src="/images/microsoft.png" alt="Microsoft" />
          </LogoWrapper>

          <Content>
            <Role>Software Engineer Intern</Role>
            <Company>Microsoft</Company>
            <Date>May 2025 – July 2025</Date>
            <BulletList>
              <li>Engineered AI-driven testing workflows by integrating Playwright with GitHub Copilot via Model Context Protocol, cutting bug detection time by 50%.</li>
              <li>Built CI/CD pipelines in Azure DevOps (YAML) with automated MCP test runs, improving scalability and reliability.</li>
              <li>Enhanced testing coverage by 40% and reduced post-deployment bugs by 35%.</li>
              <li>Reduced manual test creation by 70% by automating Playwright script generation.</li>
            </BulletList>
          </Content>
        </ExperienceCard>
      </Timeline>
    </ExperienceSection>
  );
}
