
import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import FixedSidebar from './components/FixedSidebar';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import Skills from './components/skills';

const AppContainer = styled.div`
 
  
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const MainContent = styled.main`
  padding: 0 0px;
`;

function App() {
  return (
    <>
      <FixedSidebar />
      <AppContainer>
        <MainContent>
          <Header />
          <AboutSection />
          <Skills />
          <ExperienceSection />
          <ProjectsSection />
        </MainContent>
      </AppContainer>
    </>
  );
}

export default App;
