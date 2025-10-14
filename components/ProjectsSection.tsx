import React from 'react';
import { projects } from '../constants';
import HoverText from './HoverText';

const ProjectsSection: React.FC = () => {
  return (
    <div className="content_section">
      <div className="w-layout-grid grid_list title-grid">
        <div className="content-title">PROJECTS</div>
      </div>

      {projects.map(data => (
        <div key={data.id} className="w-layout-grid grid_list projects-grid">
          <div className="number-block">{data.id}</div>
          <div className="grid_item">
             <HoverText as="a" href={data.url} target="_blank" rel="noopener noreferrer" text={data.title} className="text-block" />
          </div>
          <div className="grid_item">
            <HoverText text={data.description} className="text-block" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsSection;