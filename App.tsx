import React from 'react';
import Nav from './components/Nav';
import HeroSection from './components/HeroSection';
import WorkExperienceSection from './components/WorkExperienceSection';
import ProjectsSection from './components/ProjectsSection';


const App: React.FC = () => {
  return (
    <div className="page-wrapper">
      <main className="main-wrapper">
        <div className="section_hero">
          <div className="padding-global">
            <div className="hero_wrapper">
              <Nav />
              <HeroSection />
              <WorkExperienceSection />
              <ProjectsSection />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
