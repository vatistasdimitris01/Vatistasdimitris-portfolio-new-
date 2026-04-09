import React, { useEffect, useRef } from 'react';

const Background: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowTopRef = useRef<HTMLDivElement>(null);
  const glowBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let scrollY = 0;
    let currentScrollY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const sensitivity = window.innerWidth < 768 ? 20 : 40;
      mouseX = (e.clientX - window.innerWidth / 2) / sensitivity;
      mouseY = (e.clientY - window.innerHeight / 2) / sensitivity;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    const animate = () => {
      const isMobile = window.innerWidth < 768;
      const lerpFactor = isMobile ? 0.03 : 0.05; // Slightly slower lerp on mobile for stability
      
      // Lerp mouse movement for smoothness
      currentX += (mouseX - currentX) * lerpFactor;
      currentY += (mouseY - currentY) * lerpFactor;
      
      // Lerp scroll for smoothness
      currentScrollY += (scrollY - currentScrollY) * lerpFactor;

      if (containerRef.current) {
        // Rotate and translate based on mouse + scroll
        const scrollRotation = currentScrollY * (isMobile ? 0.003 : 0.005);
        containerRef.current.style.transform = `rotate(${-20 + scrollRotation}deg) translate(${currentX}px, ${currentY}px)`;
      }

      if (glowTopRef.current) {
        // Shift glow based on scroll
        const shiftX = currentScrollY * (isMobile ? 0.03 : 0.05);
        const shiftY = currentScrollY * (isMobile ? 0.01 : 0.02);
        glowTopRef.current.style.transform = `translate(${shiftX}px, ${shiftY}px)`;
        glowTopRef.current.style.opacity = `${Math.max(0.2, 1 - currentScrollY / (isMobile ? 2000 : 4000))}`;
      }

      if (glowBottomRef.current) {
        // Shift glow based on scroll
        const shiftX = -currentScrollY * (isMobile ? 0.01 : 0.02);
        const shiftY = -currentScrollY * (isMobile ? 0.03 : 0.05);
        glowBottomRef.current.style.transform = `translate(${shiftX}px, ${shiftY}px)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    const animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="bg-fixed-container">
      <div className="ambient-glow glow-top-right" ref={glowTopRef}></div>
      <div className="ambient-glow glow-bottom-left" ref={glowBottomRef}></div>

      <div className="light-container" ref={containerRef}>
        <div className="shimmer-band">
          <div className="band"></div>
          <div className="band"></div>
        </div>
      </div>

      <div className="led-mask"></div>
      <div className="noise"></div>
    </div>
  );
};

export default Background;
