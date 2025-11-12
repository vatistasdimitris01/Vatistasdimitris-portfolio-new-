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
  }
}

interface BlogPostPageProps {
  post: BlogData;
  animationsEnabled: boolean;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, animationsEnabled }) => {
  const { t } = useLanguage();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (post && contentRef.current && window.marked && window.renderMathInElement) {
      // 1. Parse markdown content into HTML. Emojis are text and will render fine.
      const html = window.marked.parse(post.content);
      contentRef.current.innerHTML = html;

      // 2. Find and render any LaTeX math expressions in the generated HTML.
      window.renderMathInElement(contentRef.current, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '\\[', right: '\\]', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\(', right: '\\)', display: false },
        ],
        throwOnError: false, // Prevents crashing on a parse error
      });
    }
  }, [post]);

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