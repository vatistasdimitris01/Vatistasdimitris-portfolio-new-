import React, { useRef, useEffect, memo } from 'react';
import { gsap } from 'gsap';

interface HoverTextProps {
  text: string;
  as?: React.ElementType;
  className?: string;
  href?: string;
  target?: string;
  // FIX: Add rel prop to support anchor tag attributes and fix type error.
  rel?: string;
}

const lettersAndSymbols = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', ';', ':', '<', '>', ','];

const HoverText: React.FC<HoverTextProps> = ({ text, as: Component = 'div', className, ...props }) => {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const words = text.split(' ');
    element.innerHTML = words.map(word => {
      const chars = word.split('').map(char => `<span class="char">${char === ' ' ? '&nbsp;' : char}</span>`).join('');
      return `<span class="word">${chars}</span>`;
    }).join('');

    const chars = Array.from(element.querySelectorAll('.char')) as HTMLElement[];
    const originalChars = chars.map(c => c.innerHTML);

    const animate = () => {
      gsap.killTweensOf(chars);
      chars.forEach((char, position) => {
        const initialHTML = originalChars[position];
        let repeatCount = 0;

        gsap.fromTo(char, 
          { opacity: 0 }, 
          {
            duration: 0.03,
            innerHTML: () => lettersAndSymbols[Math.floor(Math.random() * lettersAndSymbols.length)],
            opacity: 1,
            repeat: 3,
            repeatRefresh: true,
            repeatDelay: 0.04,
            delay: (position + 1) * 0.07,
            onStart: () => {
              gsap.set(char, { '--opa': 1 });
            },
            onRepeat: () => {
              repeatCount++;
              if (repeatCount === 1) {
                gsap.set(char, { '--opa': 0 });
              }
            },
            onComplete: () => {
              gsap.set(char, { 
                innerHTML: initialHTML,
                delay: 0.03
              });
            },
          }
        );
      });
    };

    const triggerElement = element.closest('.grid_list, .nav_item') || element;
    
    triggerElement.addEventListener('mouseenter', animate);

    // Animate on load. A small delay can make it feel smoother.
    const onLoadTimeout = setTimeout(animate, 100);

    return () => {
      triggerElement.removeEventListener('mouseenter', animate);
      clearTimeout(onLoadTimeout);
      // Kill any running animations when the component unmounts.
      gsap.killTweensOf(chars);
    };
  }, [text]);

  // The component receives the text and doesn't render it directly,
  // letting the useEffect hook handle the initial innerHTML setup.
  return <Component ref={elementRef} className={`hover-effect hover-effect--cursor-square ${className || ''}`} {...props} />;
};

export default memo(HoverText);