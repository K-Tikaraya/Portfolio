import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
// import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";

// Navbar
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem; /* Increased padding for a more spacious feel */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(11, 15, 42, 0.98); /* Slightly less transparent */
  backdrop-filter: blur(16px); /* More blur effect */
  z-index: 1000;
  border-bottom: 1px solid rgba(255,255,255,0.1); /* Slightly more visible border */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* More pronounced shadow */

  @media (max-width: 768px) {
    flex-direction: column; /* Stack items vertically on smaller screens */
    padding: 1rem;
  }
`;

const Logo = styled.a`
  color: #fff;
  font-size: 1.8rem; /* Significantly larger */
  text-decoration: none;
  font-weight: 900; /* Even bolder */
  letter-spacing: 1px; /* More distinct letter spacing */
  transition: color 0.3s ease, transform 0.3s ease; /* Added transform transition */
  &:hover {
    color: #ffdb80; /* Brighter accent color on hover */
    transform: scale(1.05); /* Subtle scale effect on hover */
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem; /* Space below logo on small screens */
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem; /* Increased gap for more separation */
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack links vertically on smaller screens */
    gap: 0.8rem; /* Smaller gap for stacked links */
    margin-bottom: 1rem;
  }
`;

const NavLink = styled.a`
  position: relative;
  color: #e0e0e0; /* Slightly brighter default link color */
  text-decoration: none;
  font-size: 1.15rem; /* Larger font size for links */
  font-weight: 500;
  opacity: 0.9;
  transition: color 0.3s ease, opacity 0.3s ease, transform 0.2s ease;
  padding-bottom: 0.3rem; /* More space for the underline */
  
  &:hover { 
    color: #ffcc66; 
    opacity: 1; 
    transform: translateY(-2px); /* Lift effect on hover */
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 3px; /* Thicker underline */
    background-color: #ffcc66; 
    bottom: 0;
    left: 50%; /* Start underline from center */
    transform: translateX(-50%); /* Center the underline */
    transition: width 0.3s ease-out; /* Smooth and snappier animation */
  }
  &:hover::after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding-bottom: 0.2rem;
  }
`;

const DownloadButton = styled.a`
  background: #5a8aff; /* Brighter blue */
  color: #fff;
  padding: 0.6rem 1.2rem; /* More padding */
  border-radius: 25px; /* More rounded, pill-like shape */
  text-decoration: none;
  font-size: 1rem; /* Larger font size */
  font-weight: 700; /* Bolder text */
  letter-spacing: 0.5px;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
  border: none; /* Ensure no default border */

  &:hover { 
    background: #7caeff; /* Lighter blue on hover */
    transform: translateY(-3px) scale(1.02); /* More pronounced lift and slight scale */
    box-shadow: 0 8px 18px rgba(90, 138, 255, 0.6); /* Stronger glow effect */
  }

  @media (max-width: 768px) {
    margin-top: 1rem; /* Space above button on small screens */
  }
`;

// Hero Section (No changes needed here for navbar enhancements)
const HeaderContainer = styled.header`
  width: 100vw; /* make full width */
  min-height: 100vh;
  padding: 3rem 4rem 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.3rem;
  align-items: center;
  background: linear-gradient(135deg, #0b0f2a, #141936, #1b1f44);

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 6rem 1.5rem 2rem;
  }
`;

const TextContainer = styled.div`
  max-width: 610px;
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

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  @media (max-width: 768px) { justify-content: center; }
`;

const IconLink = styled.a`
  color: #c7c9d9;
  font-size: 1.4rem;
  transition: color 0.25s ease;
  &:hover { color: #ffcc66; }
`;

// Image Section
const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ProfileImage = styled.img`
  width: 320px;
  height: 320px;
  object-fit: cover;
  object-position: 40% 20%;
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
          {/* Added 'About' link and reordered */}
          <NavLink href="#about">About</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
        </NavLinks>
        <DownloadButton href="/Kiran_Tikaraya_Resume.pdf" download>
          Resume
        </DownloadButton>
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
              Full-stack Developer with 2+ years of experience, passionate about{" "}
              <span style={{color:"#c7c3bcff"}}>AI</span>, Problem solving, modern{" "}
              <span style={{color:"#9fa8da"}}>frontend</span> and{" "}
              <span style={{color:"#9fa8da"}}>backend</span> technologies.  
              Constantly exploring new challenges and building innovative solutions.  
              Find me on GitHub, LinkedIn, and Email where I share projects and insights.
            </Description>
          </TextContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <ImageContainer>
            <ProfileImage src="/images/IMG_20250121_222528_146.jpg" alt="Kiran Tikaraya" />
          </ImageContainer>
        </motion.div>
      </HeaderContainer>
    </>
  );
}
