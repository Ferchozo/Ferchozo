'use client';

import Image from 'next/image';
import type { Project } from '@/data/projects';
import { assetUrl } from '@/lib/config';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const openProject = () => {
    window.open(assetUrl(project.url), '_blank', 'noopener');
  };

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
      className="group relative cursor-pointer overflow-hidden rounded-xl bg-[#2a2a2a] shadow-lg transition hover:-translate-y-1.5 hover:shadow-pink-500/20"
    >
      <Image
        src={assetUrl(project.image)}
        alt={project.title}
        width={400}
        height={200}
        className="h-48 w-full object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/85 p-6 text-center opacity-100 transition md:opacity-0 md:group-hover:opacity-100">
        <h2 className="mb-3 text-xl font-semibold text-pink-400">{project.title}</h2>
        <p className="mb-2 text-sm leading-relaxed text-gray-300">{project.description}</p>
        <p className="text-xs text-purple-400">
          <strong>Tecnologías:</strong> {project.tech}
        </p>
      </div>
    </article>
  );
}
