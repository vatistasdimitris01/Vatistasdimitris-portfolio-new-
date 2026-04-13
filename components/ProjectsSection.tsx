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
        <h2 className="content-title" style={{ margin: 0 }}>{t.projects.title}</h2>
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
              
              {data.caseStudy && (
                <div className="case-study-container" style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div className="case-study-item">
                    <span className="case-study-label" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>{t.projects.caseStudyLabels.problem}</span>
                    <p className="case-study-text" style={{ textTransform: 'none', fontSize: '0.95rem', fontWeight: 300, margin: 0 }}>{data.caseStudy.problem}</p>
                  </div>
                  <div className="case-study-item">
                    <span className="case-study-label" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>{t.projects.caseStudyLabels.solution}</span>
                    <p className="case-study-text" style={{ textTransform: 'none', fontSize: '0.95rem', fontWeight: 300, margin: 0 }}>{data.caseStudy.solution}</p>
                  </div>
                  <div className="case-study-item">
                    <span className="case-study-label" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>{t.projects.caseStudyLabels.tech}</span>
                    <p className="case-study-text" style={{ textTransform: 'none', fontSize: '0.95rem', fontWeight: 300, margin: 0 }}>{data.caseStudy.techDecisions}</p>
                  </div>
                  <div className="case-study-item">
                    <span className="case-study-label" style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', marginBottom: '0.25rem' }}>{t.projects.caseStudyLabels.results}</span>
                    <p className="case-study-text" style={{ textTransform: 'none', fontSize: '0.95rem', fontWeight: 400, margin: 0, color: 'var(--text-color)' }}>{data.caseStudy.results}</p>
                  </div>
                </div>
              )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsSection;