import React from 'react';
import { personalInfo } from '../constants';
import HoverText from './HoverText';

interface HeroSectionProps {
  animationsEnabled: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ animationsEnabled }) => {
  return (
    <div id="about" className="hero-section">
      <HoverText text={personalInfo.title} className="content-title" disabled={!animationsEnabled} />
      <p className="hero-bio">
        {personalInfo.bio}
      </p>
    </div>
  );
};

export default HeroSection;