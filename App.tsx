import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import HeroSection from './components/HeroSection';
import WorkExperienceSection from './components/WorkExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import BurgerMenu from './components/BurgerMenu';

const App: React.FC = () => {
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isMenuOpen]);

  const toggleAnimations = () => {
    setAnimationsEnabled(prev => !prev);
  };

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <div className="page-wrapper">
      <BurgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
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