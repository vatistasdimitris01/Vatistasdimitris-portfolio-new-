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
      let content = post.content;
      const mathExpressions: string[] = [];
      const placeholder = (index: number) => `%%LATEX_PLACEHOLDER_${index}%%`;

      // Regex to find content between \(...\) and \[...\], which are used in the blog posts.
      // This is to protect the LaTeX expressions from being misinterpreted by the Markdown parser.
      const mathRegex = /(\\\[[\s\S]*?\\\]|\\\([\s\S]*?\\\))/g;

      // 1. Replace all math expressions with a unique placeholder.
      content = content.replace(mathRegex, (match) => {
        const index = mathExpressions.length;
        mathExpressions.push(match);
        return placeholder(index);
      });

      // 2. Parse the sanitized markdown content into HTML.
      let html = window.marked.parse(content);
      
      // 3. Restore the original math expressions into the generated HTML.
      html = html.replace(/%%LATEX_PLACEHOLDER_(\d+)%%/g, (_, indexStr) => {
        const index = parseInt(indexStr, 10);
        return mathExpressions[index];
      });
      
      contentRef.current.innerHTML = html;
      
      // 4. Let KaTeX find and render the math expressions now present in the DOM.
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
