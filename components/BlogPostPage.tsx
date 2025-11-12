import React, { useEffect, useRef } from 'react';
import type { BlogData } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import HoverText from './HoverText';

// Add types for window properties from CDN scripts to avoid TypeScript errors.
declare global {
  interface Window {
    marked: {
      parse: (markdown: string) => string;
    };
    renderMathInElement: (element: HTMLElement, options: object) => void;
    Chart: any; // Add Chart.js to global window interface
  }
}

// FIX: Define a simple interface for the Chart instance to provide type safety for the destroy method.
interface ChartInstance {
  destroy: () => void;
}

interface BlogPostPageProps {
  post: BlogData;
  animationsEnabled: boolean;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, animationsEnabled }) => {
  const { t } = useLanguage();
  const contentRef = useRef<HTMLDivElement>(null);
  // FIX: Use the ChartInstance interface for the ref to ensure type-safe access to chart methods.
  const chartInstances = useRef<{ [key: string]: ChartInstance }>({});

  useEffect(() => {
    // Cleanup function to destroy charts when component unmounts or post changes
    return () => {
      Object.values(chartInstances.current).forEach(chart => chart.destroy());
      chartInstances.current = {};
    };
  }, [post]);

  useEffect(() => {
    if (post && contentRef.current && window.marked && window.renderMathInElement) {
      // Destroy previous charts before rendering new ones
      Object.values(chartInstances.current).forEach(chart => chart.destroy());
      chartInstances.current = {};

      let content = post.content;
      const mathExpressions: string[] = [];
      const placeholder = (index: number) => `%%LATEX_PLACEHOLDER_${index}%%`;
      const mathRegex = /(\\\[[\s\S]*?\\\]|\\\([\s\S]*?\\\))/g;

      content = content.replace(mathRegex, (match) => {
        const index = mathExpressions.length;
        mathExpressions.push(match);
        return placeholder(index);
      });

      let html = window.marked.parse(content);
      
      html = html.replace(/%%LATEX_PLACEHOLDER_(\d+)%%/g, (_, indexStr) => {
        const index = parseInt(indexStr, 10);
        return mathExpressions[index];
      });
      
      contentRef.current.innerHTML = html;
      
      window.renderMathInElement(contentRef.current, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '\\[', right: '\\]', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\(', right: '\\)', display: false },
        ],
        throwOnError: false,
      });

      // Render charts
      if (window.Chart) {
        renderCharts();
      }
    }
  }, [post]);

  const renderCharts = () => {
    const chartCanvases = contentRef.current?.querySelectorAll('canvas');
    if (!chartCanvases) return;

    const theme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
    const gridColor = theme === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(255, 255, 255, 0.1)';
    const textColor = theme === 'light' ? '#222222' : '#e0e0e0';

    chartCanvases.forEach(canvas => {
      const chartId = canvas.id;
      const chartFunction = canvas.dataset.chartFunction;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      if (chartFunction === 'parabola') {
        const a = parseFloat(canvas.dataset.a || '1');
        const b = parseFloat(canvas.dataset.b || '0');
        const c = parseFloat(canvas.dataset.c || '0');
        const labels = Array.from({ length: 21 }, (_, i) => i - 10);
        const data = labels.map(x => a * x * x + b * x + c);
        const chartData = {
          labels,
          datasets: [{
            label: `f(x) = ${a}x² + ${b}x + ${c}`,
            data,
            borderColor: '#36a2eb',
            tension: 0.1,
            fill: false,
          }]
        };
        chartInstances.current[chartId] = new window.Chart(ctx, {
          type: 'line',
          data: chartData,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { labels: { color: textColor, font: { family: "'JetBrains Mono', monospace" } } },
                tooltip: { bodyFont: { family: "'JetBrains Mono', monospace" }, titleFont: { family: "'JetBrains Mono', monospace" } }
            },
            scales: {
              y: { 
                  ticks: { color: textColor, font: { family: "'JetBrains Mono', monospace" } },
                  grid: { color: gridColor }
              },
              x: { 
                  ticks: { color: textColor, font: { family: "'JetBrains Mono', monospace" } },
                  grid: { color: gridColor }
              },
            }
          }
        });
      } else if (chartFunction === 'sine') {
        const amplitude = parseFloat(canvas.dataset.amplitude || '1');
        const frequency = parseFloat(canvas.dataset.frequency || '1');
        const labels = Array.from({ length: 100 }, (_, i) => (i * 4 * Math.PI) / 99);
        const data = labels.map(x => amplitude * Math.sin(frequency * x));
        const chartData = {
          labels: labels.map(l => l.toFixed(2)),
          datasets: [{
            label: `x(t) = ${amplitude}sin(${frequency}t)`,
            data,
            borderColor: '#ff6384',
            tension: 0.1,
            fill: false,
          }]
        };
        chartInstances.current[chartId] = new window.Chart(ctx, {
          type: 'line',
          data: chartData,
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { labels: { color: textColor, font: { family: "'JetBrains Mono', monospace" } } },
                tooltip: { bodyFont: { family: "'JetBrains Mono', monospace" }, titleFont: { family: "'JetBrains Mono', monospace" } }
            },
            scales: {
              y: { 
                  ticks: { color: textColor, font: { family: "'JetBrains Mono', monospace" } },
                  grid: { color: gridColor }
              },
              x: { 
                  ticks: { color: textColor, font: { family: "'JetBrains Mono', monospace" } },
                  grid: { color: gridColor }
              },
            }
          }
        });
      } else if (chartFunction === 'golden-ratio') {
        const chartData = {
          labels: ['Longer Segment (a)', 'Shorter Segment (b)'],
          datasets: [{
            data: [1.618, 1],
            backgroundColor: ['#36a2eb', '#ff6384'],
            borderColor: ['#36a2eb', '#ff6384'],
            borderWidth: 1
          }]
        };
        chartInstances.current[chartId] = new window.Chart(ctx, {
            type: 'bar',
            data: chartData,
            options: {
                indexAxis: 'y', // This makes it a horizontal bar chart
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    title: {
                        display: true,
                        text: 'Golden Ratio (a/b ≈ 1.618)',
                        color: textColor,
                        font: { family: "'JetBrains Mono', monospace" }
                    },
                    tooltip: { 
                      bodyFont: { family: "'JetBrains Mono', monospace" }, 
                      titleFont: { family: "'JetBrains Mono', monospace" } 
                    }
                },
                scales: {
                  y: {
                      ticks: { color: textColor, font: { family: "'JetBrains Mono', monospace" } },
                      grid: { color: 'transparent' }
                  },
                  x: {
                      ticks: { color: textColor, font: { family: "'JetBrains Mono', monospace" } },
                      grid: { color: gridColor }
                  },
                }
            }
        });
      }
    });
  };

  if (!post) {
    return (
      <div className="content_section blog-section">
        <p className="hero-bio">Post not found.</p>
        <HoverText
          as="a"
          href="#"
          text={t.blog.backToHome}
          className="text-block project-link"
          disabled={!animationsEnabled}
        />
      </div>
    );
  }

  return (
    <div className="content_section blog-section">
      <HoverText as="h1" text={post.title} className="content-title" disabled={!animationsEnabled} />
      <p className="blog-post-date">{post.date}</p>
      <div ref={contentRef} className="blog-post-content"></div>
      <div className="blog-post-nav">
        <HoverText
          as="a"
          href="#/blog"
          text={t.blog.backToBlog}
          className="text-block project-link"
          disabled={!animationsEnabled}
        />
        <HoverText
          as="a"
          href="#"
          text={t.blog.backToHome}
          className="text-block project-link"
          disabled={!animationsEnabled}
        />
      </div>
    </div>
  );
};

export default BlogPostPage;