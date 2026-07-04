'use client';

import Image from 'next/image';
import type { Project } from '@/data/projects';
import { assetUrl } from '@/lib/config';

interface ProjectCardProps {
  project: Project;
  accent?: 'pink' | 'purple';
}

export default function ProjectCard({ project, accent = 'pink' }: ProjectCardProps) {
  const openProject = () => {
    window.open(assetUrl(project.url), '_blank', 'noopener');
  };

  const circleClass =
    accent === 'pink' ? 'circle-backdrop-pink' : 'circle-backdrop-purple';

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={openProject}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openProject();
        }
      }}
      className="group cursor-pointer text-center"
    >
      <div className="relative mx-auto mb-6 h-52 w-52">
        <div
          className={`circle-backdrop ${circleClass} absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 transition-transform group-hover:scale-110`}
        />
        <Image
          src={assetUrl(project.image)}
          alt={project.title}
          width={200}
          height={200}
          className="img-editorial relative z-10 mx-auto h-48 w-48 rounded-full object-cover shadow-2xl transition-transform group-hover:scale-105"
        />
      </div>
      <h2 className="font-display text-2xl text-brand-pink transition group-hover:text-white">
        {project.title}
      </h2>
      <p className="prose-body mx-auto mt-3 max-w-xs text-xs normal-case md:opacity-0 md:transition md:group-hover:opacity-100">
        {project.description}
      </p>
      <p className="font-nav mt-2 text-[10px] uppercase tracking-[0.2em] text-brand-purple">
        {project.tech}
      </p>
    </article>
  );
}
