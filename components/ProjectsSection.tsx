import React from 'react';
import { projects } from '../constants';
import HoverText from './HoverText';

interface ProjectsSectionProps {
  animationsEnabled: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ animationsEnabled }) => {
  return (
    <div className="content_section">
      <div className="w-layout-grid grid_list title-grid">
        <div className="content-title">PROJECTS</div>
      </div>

      {projects.map(data => (
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