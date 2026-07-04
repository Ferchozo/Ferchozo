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
      <section className="section-dark relative overflow-hidden py-16 md:py-20">
        <BrushStroke className="right-0 top-6 w-64 md:w-96" color="pink" />
        <div className="relative z-10 mx-auto w-[92%] max-w-7xl text-center">
          <p className="font-nav mb-4 text-xs uppercase tracking-[0.35em] text-brand-muted">
            Portafolio
          </p>
          <SectionTitle align="center">Mis Proyectos</SectionTitle>
          <p className="prose-body-normal mx-auto mt-8 max-w-2xl">
            Herramientas web pensadas para resolver problemas reales en negocios locales:
            facturación, inventario, análisis de ventas y más.
          </p>
        </div>
      </section>

      <section className="section-darker pb-24 pt-4">
        <div className="mx-auto grid w-[92%] max-w-7xl grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.url} project={project} accent={i % 2 === 0 ? 'pink' : 'purple'} />
          ))}
        </div>
      </section>
    </>
  );
}
