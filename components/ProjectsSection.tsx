import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import HoverText from './HoverText';

interface ProjectsSectionProps {
  animationsEnabled: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ animationsEnabled }) => {
  const { t } = useLanguage();
  return (
    <div id="projects" className="content_section">
      <div className="w-layout-grid grid_list title-grid">
        <div className="content-title">{t.projects.title}</div>
      </div>

      {t.projects.projects.map(data => (
        <div key={data.id} className="w-layout-grid grid_list projects-grid">
          <div className="number-block">{data.id}</div>
          <div className="grid_item">
             <HoverText 
                as="a" 
                href={data.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                text={data.title} 
                className="text-block" 
                disabled={!animationsEnabled}
              />
              <p className="project-description">{data.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsSection;