import React from 'react';
import HoverText from './HoverText';

interface NavProps {
  animationsEnabled: boolean;
  toggleAnimations: () => void;
}

const Nav: React.FC<NavProps> = ({ animationsEnabled, toggleAnimations }) => {
  return (
    <div className="nav_component">
      <div className="nav_list">
        <HoverText as="a" href="#" text="Dimitris Vatistas" className="nav-title nav-name" disabled={!animationsEnabled} />
        <div className="nav_item">
          <HoverText
            as="div"
            onClick={toggleAnimations}
            text={`[ ANIMATIONS: ${animationsEnabled ? 'ON' : 'OFF'} ]`}
            className="animation-toggle"
            disabled={true} // The toggle itself should not animate
          />
          <div className="social-links">
            <a href="https://www.instagram.com/vatistasdimitris/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"></path>
              </svg>
            </a>
            <a href="https://x.com/vatistasdim" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="X">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;