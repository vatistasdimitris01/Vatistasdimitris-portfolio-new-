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
        <div className="content-title">{t.certificates.title}</div>
      </div>

      {t.certificates.certificates.map(data => (
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
              <p className="project-description">{data.issuer} - {data.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CertificatesSection;
