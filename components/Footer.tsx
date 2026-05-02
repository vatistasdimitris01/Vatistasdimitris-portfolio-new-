import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import HoverText from './HoverText';

interface FooterProps {
  animationsEnabled: boolean;
}

const Footer: React.FC<FooterProps> = ({ animationsEnabled }) => {
  const { t } = useLanguage();

  return (
    <footer className="footer-section" style={{ padding: '4rem 2rem', borderTop: '1px solid var(--border-color)', marginTop: '4rem' }}>
      <div className="footer-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
        <div className="contact-info" style={{ textAlign: 'center' }}>
          <HoverText
            as="a"
            href="mailto:vatistasdim.ae@icloud.com"
            text="vatistasdim.ae@icloud.com"
            className="text-block"
            disabled={!animationsEnabled}
            style={{ fontSize: '1.25rem', textTransform: 'lowercase' }}
          />
        </div>
        
        <div className="social-links" style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <HoverText
            as="a"
            href="https://github.com/vatistasdimitris01"
            target="_blank"
            text="GITHUB"
            className="text-block"
            disabled={!animationsEnabled}
            style={{ fontSize: '0.85rem', letterSpacing: '0.2em' }}
          />
          <HoverText
            as="a"
            href="https://x.com/vatistasdim"
            target="_blank"
            text="TWITTER / X"
            className="text-block"
            disabled={!animationsEnabled}
            style={{ fontSize: '0.85rem', letterSpacing: '0.2em' }}
          />
          <HoverText
            as="a"
            href="https://www.instagram.com/vatistasdimitris/"
            target="_blank"
            text="INSTAGRAM"
            className="text-block"
            disabled={!animationsEnabled}
            style={{ fontSize: '0.85rem', letterSpacing: '0.2em' }}
          />
        </div>
        
        <div className="copyright" style={{ marginTop: '2rem', fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>
          © {new Date().getFullYear()} DIMITRIS VATISTAS. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
