import type { Metadata } from 'next';
import BrushStroke from '@/components/BrushStroke';
import ProjectCard from '@/components/ProjectCard';
import SectionTitle from '@/components/SectionTitle';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Proyectos',
  description:
    'Portafolio de proyectos web de Fernando Hidalgo: facturación, inventario, PWA y más.',
  openGraph: {
    title: 'Proyectos | Fernando Hidalgo',
    description: 'Soluciones web para cafeterías, farmacias y PyMEs.',
  },
};

export default function ServiciosPage() {
  return (
    <>
      <section className="section-light relative overflow-hidden py-16 md:py-24">
        <BrushStroke className="right-0 top-8 w-full max-w-2xl" color="pink" />
        <div className="relative z-10 mx-auto w-[92%] max-w-7xl text-center">
          <p className="font-nav mb-6 text-xs uppercase tracking-[0.4em] text-brand-muted">
            Portafolio
          </p>
          <SectionTitle align="center">Proyectos</SectionTitle>
          <p className="prose-body-normal mx-auto mt-10 max-w-2xl">
            Herramientas web para negocios locales: facturación, inventario, análisis de ventas y
            más.
          </p>
        </div>
      </section>

      <section className="section-dark py-20 md:py-28">
        <div className="mx-auto grid w-[92%] max-w-7xl grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.url}
              project={project}
              accent={i % 2 === 0 ? 'pink' : 'purple'}
              inverted
            />
          ))}
        </div>
      </section>
    </>
  );
}
