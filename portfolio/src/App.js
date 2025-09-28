
import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import FixedSidebar from './components/FixedSidebar';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import EducationSection from './components/EducationSection';
import ProjectsSection from './components/ProjectsSection';

const AppContainer = styled.div`
  margin-left: 100px; // Space for fixed sidebar
  
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

const MainContent = styled.main`
  padding: 0 20px;
`;

function App() {
  return (
    <>
      <FixedSidebar />
      <AppContainer>
        <MainContent>
          <Header />
          <AboutSection />
          <ExperienceSection />
          <EducationSection />
          <ProjectsSection />
        </MainContent>
      </AppContainer>
    </>
  );
}

export default App;
