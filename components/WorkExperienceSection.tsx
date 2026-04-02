import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import HoverText from './HoverText';

interface WorkExperienceProps {
  animationsEnabled: boolean;
}

const WorkExperienceSection: React.FC<WorkExperienceProps> = ({ animationsEnabled }) => {
  const { t } = useLanguage();
  return (
    <div id="work-experience" className="content_section">
      <div className="w-layout-grid grid_list title-grid">
        <h2 className="content-title" style={{ margin: 0 }}>{t.workExperience.title}</h2>
      </div>

      {t.workExperience.experiences.map(data => (
        <div key={data.id} className="w-layout-grid grid_list work-experience-grid">
          <div className="number-block">{data.id}</div>
          <div className="grid_item">
            <HoverText text={data.role} className="text-block" disabled={!animationsEnabled} />
            {data.description && (
              <div className="experience-description" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem', textTransform: 'none' }}>
                {data.description}
              </div>
            )}
          </div>
          <div className="grid_item">
            <HoverText text={data.company} className="text-block" disabled={!animationsEnabled} />
          </div>
          <div className="grid_item">
            <HoverText text={data.period} className="text-block" disabled={!animationsEnabled} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkExperienceSection;