import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import HoverText from './HoverText';

interface BlogPageProps {
  animationsEnabled: boolean;
}

const BlogPage: React.FC<BlogPageProps> = ({ animationsEnabled }) => {
  const { t } = useLanguage();
  return (
    <div id="blog" className="content_section blog-section">
      <div className="w-layout-grid grid_list title-grid">
        <div className="content-title">{t.blog.title}</div>
      </div>
       <HoverText
          as="a"
          href="#"
          text={t.blog.backToHome}
          className="text-block project-link"
          disabled={!animationsEnabled}
        />

      {t.blog.posts.map(post => (
        <div key={post.id} className="w-layout-grid grid_list projects-grid">
          <div className="number-block">{post.id}</div>
          <div className="grid_item">
             <HoverText
                as="a"
                href={`#/blog/${post.slug}`}
                text={post.title}
                className="text-block"
                disabled={!animationsEnabled}
              />
              <p className="project-description">{post.date}</p>
              <p className="project-description">{post.excerpt}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;