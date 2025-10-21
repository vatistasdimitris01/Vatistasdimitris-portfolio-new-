import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext'; // Import useTheme
import HoverText from './HoverText';

interface BurgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, toggleMenu }) => {
  const { language, toggleLanguage, t } = useLanguage();
  // Removed `toggleTheme` from useTheme as it's no longer manually toggled
  const { theme } = useTheme(); 

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    toggleMenu(); // Close menu after clicking a link
  };

  return (
    <>
      <div className={`burger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle navigation menu" aria-expanded={isOpen}>
        <div className="burger-icon">
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
        </div>
      </div>
      <nav className={`nav-panel ${isOpen ? 'open' : ''}`} aria-hidden={!isOpen}>
        <div className="nav-panel-links">
            <a onClick={() => scrollToSection('work-experience')}>{t.workExperience.title}</a>
            <a onClick={() => scrollToSection('projects')}>{t.projects.title}</a>
        </div>
        {/* Removed theme toggle HoverText */}
        <HoverText
          as="div"
          onClick={toggleLanguage}
          text={`[ ${language === 'en' ? 'EN' : 'GR'} ]`}
          className="language-toggle"
          disabled={true}
        />
      </nav>
    </>
  );
};

export default BurgerMenu;