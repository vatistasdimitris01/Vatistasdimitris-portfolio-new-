import React from 'react';
import type { ProjectData } from '../types';
import HoverText from './HoverText';

interface ProjectDetailPageProps {
  project: ProjectData;
}

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ project }) => {
  if (!project) {
    return (
        <div className="project-detail-section">
            <p className="hero-bio">Project not found. <a href="#">Go back home</a>.</p>
        </div>
    );
  }

  return (
    <div className="project-detail-section">
      <HoverText as="h1" text={project.title} className="content-title" />
      <p className="hero-bio">{project.description}</p>
      <HoverText
        as="a"
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        text="[ Open Project ]"
        className="text-block project-link"
      />
      <HoverText
        as="a"
        href="#"
        text="[ Back to Home ]"
        className="text-block project-link"
      />
    </div>
  );
};

export default ProjectDetailPage;