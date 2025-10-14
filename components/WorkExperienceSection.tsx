import React from 'react';
import { workExperience } from '../constants';
import HoverText from './HoverText';

const WorkExperienceSection: React.FC = () => {
  return (
    <div className="content_section">
      <div className="w-layout-grid grid_list title-grid">
        <div className="content-title">WORK EXPERIENCE</div>
      </div>

      {workExperience.map(data => (
        <div key={data.id} className="w-layout-grid grid_list work-experience-grid">
          <div className="number-block">{data.id}</div>
          <div className="grid_item">
            <HoverText text={data.role} className="text-block" />
          </div>
          <div className="grid_item">
            <HoverText text={data.company} className="text-block" />
          </div>
          <div className="grid_item">
            <HoverText text={data.period} className="text-block" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperienceSection;