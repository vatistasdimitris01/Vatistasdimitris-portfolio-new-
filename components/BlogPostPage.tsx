import React from 'react';
import type { BlogData } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import HoverText from './HoverText';

interface BlogPostPageProps {
  post: BlogData;
  animationsEnabled: boolean;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ post, animationsEnabled }) => {
  const { t } = useLanguage();
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
      <p className="blog-post-content">{post.content}</p>
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
