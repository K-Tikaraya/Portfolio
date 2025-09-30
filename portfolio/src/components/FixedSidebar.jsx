import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faDownload, faHouse } from '@fortawesome/free-solid-svg-icons';

// Pulse animation for hover glow
const pulse = keyframes`
  0% { box-shadow: 0 0 0px rgba(100, 255, 218, 0.6); }
  50% { box-shadow: 0 0 15px rgba(100, 255, 218, 0.8); }
  100% { box-shadow: 0 0 0px rgba(100, 255, 218, 0.6); }
`;

const BottomBox = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;              /* smaller gap */
  padding: 8px 16px;      /* smaller padding */
  background: rgba(10, 25, 47, 0.6);
  backdrop-filter: blur(12px);
  border-radius: 12px;    /* smaller rounded corners */
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 6px 15px rgba(0,0,0,0.25); /* subtle shadow */
  z-index: 1000;
`;

const IconLink = styled.a`
  color: #8892b0;
  font-size: 16px;        /* smaller icon */
  display: inline-flex;
  width: 40px;            /* smaller width */
  height: 40px;           /* smaller height */
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  transition: transform 0.25s ease, color 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    color: #ffcc66;
    transform: translateY(-3px) scale(1.05); /* smaller hover scale */
    background: rgba(255,255,255,0.12);
    animation: ${pulse} 1s infinite;
  }
`;

export default function SocialBar() {
  const links = [
    { platform: 'Home', url: '#home', icon: faHouse }, // home button
    { platform: 'GitHub', url: 'https://github.com/K-Tikaraya', icon: faGithub },
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/Kiran-Tikaraya', icon: faLinkedinIn },
    { platform: 'Email', url: 'mailto:ktikaraya@gmail.com', icon: faEnvelope },
    { platform: 'Resume', url: '/Kiran_Tikaraya_Resume.pdf', icon: faDownload },
  ];

  // Smooth scroll function
  const handleScroll = (url) => {
    if (url === '#home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <BottomBox>
      {links.map(link => (
        <IconLink
          key={link.platform}
          href={link.url}
          onClick={(e) => { 
            e.preventDefault(); 
            handleScroll(link.url); 
          }}
          aria-label={link.platform}
        >
          <FontAwesomeIcon icon={link.icon} />
        </IconLink>
      ))}
    </BottomBox>
  );
}
