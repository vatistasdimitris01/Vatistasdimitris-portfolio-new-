import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import HoverText from './HoverText';

interface CertificatesSectionProps {
  animationsEnabled: boolean;
}

const CertificatesSection: React.FC<CertificatesSectionProps> = ({ animationsEnabled }) => {
  const { t } = useLanguage();
  return (
    <div id="certificates" className="content_section">
      <div className="w-layout-grid grid_list title-grid">
        <h2 className="content-title" style={{ margin: 0 }}>{t.certificates.title}</h2>
      </div>

      {t.certificates.certificates.map(data => (
        <a 
          key={data.id} 
          href={data.url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="w-layout-grid grid_list projects-grid"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div className="number-block">{data.id}</div>
          <div className="grid_item">
             <HoverText 
                as="div" 
                text={data.title} 
                className="text-block" 
                disabled={!animationsEnabled}
              />
              <p className="project-description">{data.issuer} - {data.date}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default CertificatesSection;
