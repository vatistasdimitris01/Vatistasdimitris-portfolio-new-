import React, { useState } from 'react';
import Nav from './components/Nav';
import HeroSection from './components/HeroSection';
import WorkExperienceSection from './components/WorkExperienceSection';
import ProjectsSection from './components/ProjectsSection';

const App: React.FC = () => {
  const [animationsEnabled, setAnimationsEnabled] = useState(true);

  const toggleAnimations = () => {
    setAnimationsEnabled(prev => !prev);
  };

  return (
    <div className="page-wrapper">
      <main className="main-wrapper">
        <div className="section_hero">
          <div className="padding-global">
            <div className="hero_wrapper">
              <Nav animationsEnabled={animationsEnabled} toggleAnimations={toggleAnimations} />
              <HeroSection animationsEnabled={animationsEnabled} />
              <WorkExperienceSection animationsEnabled={animationsEnabled} />
              <ProjectsSection animationsEnabled={animationsEnabled} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;