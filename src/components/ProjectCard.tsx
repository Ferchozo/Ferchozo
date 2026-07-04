'use client';

import Image from 'next/image';
import type { Project } from '@/data/projects';
import { assetUrl } from '@/lib/config';

interface ProjectCardProps {
  project: Project;
  accent?: 'pink' | 'purple';
  inverted?: boolean;
}

export default function ProjectCard({
  project,
  accent = 'pink',
  inverted = false,
}: ProjectCardProps) {
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
      <div className="relative mx-auto mb-8 h-56 w-56">
        <div
          className={`circle-backdrop ${circleClass} absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 transition-transform duration-300 group-hover:scale-110`}
        />
        <Image
          src={assetUrl(project.image)}
          alt={project.title}
          width={220}
          height={220}
          className="img-editorial relative z-10 mx-auto h-52 w-52 rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h2
        className={`font-display text-3xl transition md:text-4xl ${
          inverted
            ? 'text-brand-pink group-hover:text-white'
            : 'text-brand-pink group-hover:text-ink-black'
        }`}
      >
        {project.title}
      </h2>
      <p
        className={`prose-body-normal mx-auto mt-4 max-w-xs text-sm ${
          inverted ? 'text-white/60' : 'text-ink-black/60'
        }`}
      >
        {project.description}
      </p>
      <p className="font-nav mt-3 text-[10px] uppercase tracking-[0.25em] text-brand-purple">
        {project.tech}
      </p>
    </article>
  );
}
