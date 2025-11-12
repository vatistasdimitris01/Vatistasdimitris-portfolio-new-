import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import HoverText from './HoverText';

interface FooterProps {
  animationsEnabled: boolean;
}

const Footer: React.FC<FooterProps> = ({ animationsEnabled }) => {
  const { t } = useLanguage();

  return (
    <footer className="footer-section">
      <HoverText
        as="a"
        href="#/blog"
        text={t.blog.title}
        className="text-block"
        disabled={!animationsEnabled}
      />
    </footer>
  );
};

export default Footer;
