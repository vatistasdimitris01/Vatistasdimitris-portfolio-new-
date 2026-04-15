import React, { useEffect, useRef } from 'react';

const Background: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const glowTopRef = useRef<HTMLDivElement>(null);
  const glowBottomRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Toggle this to show/hide the "sun" light bands and ambient glows
  const SHOW_SUN = false;

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

    // Game of Life variables
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const cellSize = 8;
    let cols = Math.ceil(width / cellSize);
    let rows = Math.ceil(height / cellSize);
    let grid = createGrid(cols, rows);

    function createGrid(cols: number, rows: number, seed = false) {
      const newGrid = new Array(cols).fill(null).map(() => new Array(rows).fill(0));
      if (seed) {
        const edgeWidth = Math.floor(cols * 0.15); // Seed within 15% of each side
        for (let i = 0; i < cols; i++) {
          const distToEdge = Math.min(i, cols - 1 - i);
          if (distToEdge < edgeWidth) {
            for (let j = 0; j < rows; j++) {
              // Higher probability at the very edge, tapering off towards the center
              const prob = 0.4 * (1 - distToEdge / edgeWidth);
              if (Math.random() < prob) {
                newGrid[i][j] = 1;
              }
            }
          }
        }
      }
      return newGrid;
    }

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      cols = Math.ceil(width / cellSize);
      rows = Math.ceil(height / cellSize);
      grid = createGrid(cols, rows, true); // Seed on resize/init
    };

    window.addEventListener('resize', resize);
    resize();

    let lastTime = 0;
    const fps = 8;
    const interval = 1000 / fps;

    const animate = (time: number) => {
      const isMobile = window.innerWidth < 768;
      const lerpFactor = isMobile ? 0.03 : 0.05;
      
      currentX += (mouseX - currentX) * lerpFactor;
      currentY += (mouseY - currentY) * lerpFactor;
      currentScrollY += (scrollY - currentScrollY) * lerpFactor;

      if (containerRef.current) {
        const scrollRotation = currentScrollY * (isMobile ? 0.003 : 0.005);
        containerRef.current.style.transform = `rotate(${-20 + scrollRotation}deg) translate(${currentX}px, ${currentY}px)`;
      }

      if (glowTopRef.current) {
        const shiftX = currentScrollY * (isMobile ? 0.03 : 0.05);
        const shiftY = currentScrollY * (isMobile ? 0.01 : 0.02);
        glowTopRef.current.style.transform = `translate(${shiftX}px, ${shiftY}px)`;
        glowTopRef.current.style.opacity = `${Math.max(0.2, 1 - currentScrollY / (isMobile ? 2000 : 4000))}`;
      }

      if (glowBottomRef.current) {
        const shiftX = -currentScrollY * (isMobile ? 0.01 : 0.02);
        const shiftY = -currentScrollY * (isMobile ? 0.03 : 0.05);
        glowBottomRef.current.style.transform = `translate(${shiftX}px, ${shiftY}px)`;
      }

      // Game of Life Update
      if (time - lastTime > interval) {
        lastTime = time;
        
        // Seed from "sun" (simulated sweep position)
        const sweepProgress = (Math.sin(time / 4000) + 1) / 2; // 0 to 1
        const sweepX = sweepProgress * width;
        const sweepCol = Math.floor(sweepX / cellSize);
        
        if (sweepCol >= 0 && sweepCol < cols && Math.random() > 0.5) {
          for (let i = 0; i < 2; i++) {
            const r = Math.floor(Math.random() * rows);
            grid[sweepCol][r] = 1;
          }
        }

        // Mouse seeding
        const mCol = Math.floor((mouseX * 40 + width / 2) / cellSize);
        const mRow = Math.floor((mouseY * 40 + height / 2) / cellSize);
        if (mCol >= 0 && mCol < cols && mRow >= 0 && mRow < rows) {
          grid[mCol][mRow] = 1;
        }

        grid = updateGrid(grid, cols, rows);
        drawGrid(ctx, grid, cols, rows, cellSize);
      }

      requestAnimationFrame(animate);
    };

    function updateGrid(grid: number[][], cols: number, rows: number) {
      const nextGrid = createGrid(cols, rows);
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const state = grid[i][j];
          const neighbors = countNeighbors(grid, i, j, cols, rows);

          if (state === 0 && neighbors === 3) {
            nextGrid[i][j] = 1;
          } else if (state === 1 && (neighbors < 2 || neighbors > 3)) {
            nextGrid[i][j] = 0;
          } else {
            nextGrid[i][j] = state;
          }
        }
      }
      return nextGrid;
    }

    function countNeighbors(grid: number[][], x: number, y: number, cols: number, rows: number) {
      let sum = 0;
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          const col = (x + i + cols) % cols;
          const row = (y + j + rows) % rows;
          sum += grid[col][row];
        }
      }
      sum -= grid[x][y];
      return sum;
    }

    function drawGrid(ctx: CanvasRenderingContext2D, grid: number[][], cols: number, rows: number, cellSize: number) {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      ctx.fillStyle = 'rgba(220, 170, 110, 0.3)'; // Increased opacity for better visibility without sun
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          if (grid[i][j] === 1) {
            ctx.fillRect(i * cellSize, j * cellSize, cellSize - 1, cellSize - 1);
          }
        }
      }
    }

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    const animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div className="bg-fixed-container">
      <canvas 
        ref={canvasRef} 
        style={{ 
          position: 'absolute', 
          inset: 0, 
          zIndex: 0, 
          opacity: 0.6,
          pointerEvents: 'none'
        }} 
      />
      {SHOW_SUN && (
        <>
          <div className="ambient-glow glow-top-right" ref={glowTopRef}></div>
          <div className="ambient-glow glow-bottom-left" ref={glowBottomRef}></div>

          <div className="light-container" ref={containerRef}>
            <div className="shimmer-band">
              <div className="band"></div>
              <div className="band"></div>
            </div>
          </div>
        </>
      )}

      <div className="led-mask"></div>
      <div className="noise"></div>
    </div>
  );
};

export default Background;
