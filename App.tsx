import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import HeroSection from './components/HeroSection';
import WorkExperienceSection from './components/WorkExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ProjectDetailPage from './components/ProjectDetailPage';
import { projects } from './constants';


const App: React.FC = () => {
  const [currentProjectSlug, setCurrentProjectSlug] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const match = hash.match(/^#\/project\/(.*)$/);
      if (match && match[1]) {
        setCurrentProjectSlug(match[1]);
      } else {
        setCurrentProjectSlug(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check on load

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const project = currentProjectSlug ? projects.find(p => p.slug === currentProjectSlug) : null;

  return (
    <div className="page-wrapper">
      <main className="main-wrapper">
        <div className="section_hero">
          <div className="padding-global">
            <div className="hero_wrapper">
              <Nav />
              {project ? (
                <ProjectDetailPage project={project} />
              ) : (
                <>
                  <HeroSection />
                  <WorkExperienceSection />
                  <ProjectsSection />
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;