import React from 'react';
import { personalInfo } from '../constants';
import HoverText from './HoverText';

const HeroSection: React.FC = () => {
  return (
    <div id="about" className="hero-section">
      <HoverText text={personalInfo.title} className="content-title" />
      <p className="hero-bio">
        {personalInfo.bio}
      </p>
    </div>
  );
};

export default HeroSection;