import type { Metadata } from 'next';
import ProjectCard from '@/components/ProjectCard';
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
    <main className="min-h-[70vh] py-12">
      <div className="mx-auto w-[90%] max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-pink-400">Mis Proyectos</h1>
          <p className="mx-auto max-w-2xl text-lg text-[#b5b5b5]">
            Herramientas web pensadas para resolver problemas reales en negocios locales:
            facturación, inventario, análisis de ventas y más.
          </p>
        </div>
        <section className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.url} project={project} />
          ))}
        </section>
      </div>
    </main>
  );
}
