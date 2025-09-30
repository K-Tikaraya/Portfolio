import React from "react";
import styled from "styled-components";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiTypescript, SiCplusplus, SiTailwindcss } from "react-icons/si";

const SkillsSection = styled.section`
  padding: 8rem 4rem;
  width: 100vw;
  background: linear-gradient(135deg, #0b0f2a, #141936, #1b1f44);
  color: #fff;
  min-height: 100vh;
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
`;

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #1b1f44;
  padding: 1.2rem;
  border-radius: 30px;
  transition: transform 0.25s ease, background 0.25s ease;
  &:hover {
    transform: scale(1.12);
    background: #252a5c;
    box-shadow: 0 0 20px rgba(255, 204, 102, 0.6);
  }
`;

const Icon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: ${({ color }) => color || "#fff"};
`;

const SkillName = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: #ddd;
`;

export default function Skills() {
  return (
    <SkillsSection id="skills">
      <Title>Skills</Title>
      <SkillsGrid>
        <SkillCard>
          <Icon color="#e34c26"><FaHtml5 /></Icon>
          <SkillName>HTML5</SkillName>
        </SkillCard>
        <SkillCard>
          <Icon color="#1572B6"><FaCss3Alt /></Icon>
          <SkillName>CSS3</SkillName>
        </SkillCard>
        <SkillCard>
          <Icon color="#f7df1e"><FaJsSquare /></Icon>
          <SkillName>JavaScript</SkillName>
        </SkillCard>
        <SkillCard>
          <Icon color="#3178c6"><SiTypescript /></Icon>
          <SkillName>TypeScript</SkillName>
        </SkillCard>
        <SkillCard>
          <Icon color="#61dafb"><FaReact /></Icon>
          <SkillName>React.js</SkillName>
        </SkillCard>
        <SkillCard>
          <Icon color="#68a063"><FaNodeJs /></Icon>
          <SkillName>Node.js</SkillName>
        </SkillCard>
        <SkillCard>
          <Icon color="#4DB33D"><SiMongodb /></Icon>
          <SkillName>MongoDB</SkillName>
        </SkillCard>
        <SkillCard>
          <Icon color="#38bdf8"><SiTailwindcss /></Icon>
          <SkillName>Tailwind CSS</SkillName>
        </SkillCard>
        <SkillCard>
          <Icon color="#00599c"><SiCplusplus /></Icon>
          <SkillName>C/C++</SkillName>
        </SkillCard>
        <SkillCard>
          <Icon color="#3776ab"><FaPython /></Icon>
          <SkillName>Python</SkillName>
        </SkillCard>
        <SkillCard>
          <Icon color="#f1502f"><FaGitAlt /></Icon>
          <SkillName>Git</SkillName>
        </SkillCard>
      </SkillsGrid>
    </SkillsSection>
  );
}
