import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import HeroSection from './components/HeroSection';
import WorkExperienceSection from './components/WorkExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import BurgerMenu from './components/BurgerMenu';
import { useTheme } from './contexts/ThemeContext';
import Footer from './components/Footer';
import BlogPage from './components/BlogPage';
import BlogPostPage from './components/BlogPostPage';
import { useLanguage } from './contexts/LanguageContext';

const App: React.FC = () => {
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();
  const [route, setRoute] = useState(window.location.hash);
  const { t } = useLanguage();

  // Effect for theme and scroll lock
  useEffect(() => {
    document.body.classList.remove('dark-theme', 'light-theme');
    document.body.classList.add(`${theme}-theme`);

    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
      document.body.classList.remove('dark-theme', 'light-theme');
    };
  }, [isMenuOpen, theme]);

  // Effect for routing
  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
      window.scrollTo(0, 0); // Scroll to top on route change
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initial check

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const toggleAnimations = () => {
    setAnimationsEnabled(prev => !prev);
  };

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const renderContent = () => {
    if (route.startsWith('#/blog/')) {
      const slug = route.substring('#/blog/'.length);
      const post = t.blog.posts.find(p => p.slug === slug);
      // Fallback to blog list if post not found
      return post 
        ? <BlogPostPage post={post} animationsEnabled={animationsEnabled} /> 
        : <BlogPage animationsEnabled={animationsEnabled} />;
    }
    if (route === '#/blog') {
      return <BlogPage animationsEnabled={animationsEnabled} />;
    }
    return (
      <>
        <HeroSection animationsEnabled={animationsEnabled} />
        <WorkExperienceSection animationsEnabled={animationsEnabled} />
        <ProjectsSection animationsEnabled={animationsEnabled} />
      </>
    );
  };

  return (
    <div className="page-wrapper">
      <BurgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <main className="main-wrapper">
        <div className="section_hero">
          <div className="padding-global">
            <div className="hero_wrapper">
              <Nav animationsEnabled={animationsEnabled} toggleAnimations={toggleAnimations} />
              {renderContent()}
            </div>
          </div>
        </div>
      </main>
      <Footer animationsEnabled={animationsEnabled} />
    </div>
  );
};

export default App;