import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faDownload } from '@fortawesome/free-solid-svg-icons';

const BottomBar = styled.nav`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  gap: 24px;
  padding: 10px 16px;
  background: transparent;
  backdrop-filter: blur(8px);
  border-top: 1px solid rgba(255,255,255,0.08);

  @media (max-width: 768px) {
    gap: 16px;
    padding: 8px 12px;
  }
`;

const IconLink = styled.a`
  color: #8892b0;
  font-size: 20px;
  display: inline-flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.08);
  transition: transform .2s ease, color .2s ease, background .2s ease;

  &:hover {
    color: #64ffda;
    transform: translateY(-3px);
    background: rgba(255,255,255,0.1);
  }
`;

export default function SocialBar() {
  const links = [
    { platform: 'GitHub', url: 'https://github.com/K-Tikaraya', icon: faGithub },
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/Kiran-Tikaraya', icon: faLinkedinIn },
    { platform: 'Email', url: 'mailto:ktikaraya@gmail.com', icon: faEnvelope },
    { platform: 'Resume', url: '/Kiran_Tikaraya_Resume.pdf', icon: faDownload },
  ];

  return (
    <BottomBar>
      {links.map(link => (
        <IconLink key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.platform}>
          <FontAwesomeIcon icon={link.icon} />
        </IconLink>
      ))}
    </BottomBar>
  );
}
