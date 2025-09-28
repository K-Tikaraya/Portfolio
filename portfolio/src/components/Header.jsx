import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Navbar
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.875rem 1.25rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(15, 15, 35, 0.85);
  backdrop-filter: blur(12px);
  z-index: 1000;
  border-bottom: 1px solid rgba(255,255,255,0.08);
`;

const Logo = styled.a`
  color: #fff;
  font-size: 1.3rem;
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 0.5px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: center;
`;

const NavLink = styled.a`
  color: #ddd;
  text-decoration: none;
  font-size: 0.95rem;
  opacity: 0.85;
  transition: color 0.2s ease, opacity 0.2s ease;
  &:hover { color: #ffcc66; opacity: 1; }
`;

const DownloadButton = styled.a`
  background: #4169e1;
  color: #fff;
  padding: 0.45rem 0.9rem;
  border-radius: 6px;
  text-decoration: none;
  font-size: 0.92rem;
  transition: background-color 0.2s ease, transform 0.2s ease;
  &:hover { background: #5379f6; transform: translateY(-1px); }
`;

// Hero Section
const HeaderContainer = styled.header`
  padding: 8rem 2rem 2rem;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  align-items: center;
  background: linear-gradient(135deg, #0b0f2a, #141936, #1b1f44);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 6rem 1.5rem 2rem;
  }
`;

const TextContainer = styled.div`
  max-width: 620px;
`;

const Name = styled.h1`
  font-size: 3.3rem;
  margin-bottom: 0.75rem;
  color: #ffcc66;
  font-weight: 800;
  line-height: 1.2;
  @media (max-width: 768px) { font-size: 2.5rem; }
`;

const Role = styled.h2`
  font-size: 1.6rem;
  color: #9fa8da;
  margin-bottom: 1.25rem;
  font-weight: 600;
  @media (max-width: 768px) { font-size: 1.2rem; }
`;

const Description = styled.p`
  font-size: 1.05rem;
  color: #c7c9d9;
  max-width: 600px;
  line-height: 1.7;
  margin-bottom: 1.8rem;
  @media (max-width: 768px) { font-size: 0.98rem; }
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1rem;
  @media (max-width: 768px) { justify-content: center; }
`;

const PrimaryButton = styled.a`
  background: #4169e1;
  color: #fff;
  padding: 0.65rem 1.2rem;
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.95rem;
  transition: background-color 0.25s ease, transform 0.2s ease;
  &:hover { background: #5379f6; transform: translateY(-2px); }
`;

const SecondaryButton = styled.a`
  border: 1px solid #ffcc66;
  color: #ffcc66;
  padding: 0.65rem 1.2rem;
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.95rem;
  transition: background-color 0.25s ease, transform 0.2s ease;
  &:hover { background: rgba(255,204,102,0.08); transform: translateY(-2px); }
`;

// Image Section
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ProfileImage = styled.img`
  width: 330px;
  height: 330px;
  object-fit: cover;
  border-radius: 50%;
  border: 6px solid #2b2f55;
  box-shadow: 0 12px 28px rgba(0,0,0,0.35);
`;

export default function Header() {
  return (
    <>
      {/* Navbar */}
      <Nav>
        <Logo href="#top">Kiran</Logo>
        <NavLinks>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <DownloadButton href="/Kiran_Tikaraya_Resume.pdf" download>
            Resume
          </DownloadButton>
        </NavLinks>
      </Nav>

      {/* Hero Section */}
      <HeaderContainer id="top">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <TextContainer>
            <Name>Hi, I'm Kiran Tikaraya</Name>
            <Role>Full-stack Developer | CS Undergrad @ IIEST</Role>
            <Description>
              Currently pursuing Computer Science at IIEST Shibpur with a strong 
              foundation in Data Structures, Algorithms, and System Design.  
              <br /><br />
              I’ve interned at <span style={{color:"#ffcc66", fontWeight:"600"}}>Microsoft</span>, where I 
              engineered AI-driven testing workflows using Playwright & Model Context Protocol, 
              boosting bug detection by 50%.  
              <br /><br />
              I love building impactful products — from <span style={{color:"#9fa8da"}}>AlgoWatch</span>, a Codeforces 
              tracker for students, to scalable MERN apps like Expense Tracker.
            </Description>
            <Buttons>
              <PrimaryButton href="#projects">View Projects</PrimaryButton>
              <SecondaryButton href="https://github.com/K-Tikaraya" target="_blank">
                GitHub
              </SecondaryButton>
              <SecondaryButton href="https://www.linkedin.com/in/kiran-tikaraya/" target="_blank">
                LinkedIn
              </SecondaryButton>
            </Buttons>
          </TextContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ImageContainer>
            <ProfileImage src="public/images/IMG_20250121_222528_146.jpg" alt="Kiran Tikaraya" />
          </ImageContainer>
        </motion.div>
      </HeaderContainer>
    </>
  );
}
