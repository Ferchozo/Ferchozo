import Link from 'next/link';
import HeroImage from '@/components/HeroImage';
import SocialLinks from '@/components/SocialLinks';

export default function HomePage() {
  return (
    <section className="py-16">
      <div className="mx-auto flex w-[90%] max-w-6xl flex-wrap items-center justify-between gap-10">
        <div className="max-w-xl flex-1">
          <h2 className="mb-4 text-2xl text-[#b5b5b5]">Conóceme como Fernando</h2>
          <h1 className="mb-4 text-4xl font-bold text-pink-400 md:text-5xl">Desarrollador Web</h1>
          <p className="mb-8 text-lg leading-relaxed text-gray-200">
            &ldquo;Analizo problemas complejos de la experiencia del usuario y creo soluciones
            integrales que conectan personas. Transformo desafíos en oportunidades, siempre con un
            enfoque humano y creativo.&rdquo;
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/servicios"
              className="rounded-md bg-pink-500 px-6 py-3 font-medium text-white transition hover:bg-gradient-to-r hover:from-pink-300 hover:to-pink-600"
            >
              Ver proyectos
            </Link>
            <a
              href="https://drive.google.com/file/d/1qCIwGmwZEII01R93nHeDieBRLqbZeruZ/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-pink-500 px-6 py-3 font-medium text-white transition hover:bg-gradient-to-r hover:from-pink-300 hover:to-pink-600"
            >
              Descarga CV
            </a>
          </div>
          <SocialLinks />
        </div>
        <div className="flex flex-1 justify-center">
          <HeroImage />
        </div>
      </div>
    </section>
  );
}
