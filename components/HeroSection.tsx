import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import HoverText from './HoverText';

interface HeroSectionProps {
  animationsEnabled: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ animationsEnabled }) => {
  const { t } = useLanguage();

  return (
    <div id="about" className="hero-section">
      <HoverText as="h2" text={t.hero.title} className="content-title" disabled={!animationsEnabled} style={{ margin: 0 }} />
      <p className="hero-bio">
        {t.hero.bio}
      </p>
    </div>
  );
};

export default HeroSection;