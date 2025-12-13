import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import HoverText from './HoverText';

interface BurgerMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, toggleMenu }) => {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme } = useTheme();

  const handleScrollTo = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    toggleMenu();
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
            <a onClick={() => handleScrollTo('about')}>{t.hero.title}</a>
            <a onClick={() => handleScrollTo('work-experience')}>{t.workExperience.title}</a>
            <a onClick={() => handleScrollTo('projects')}>{t.projects.title}</a>
        </div>
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