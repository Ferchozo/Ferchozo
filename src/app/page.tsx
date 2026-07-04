import Link from 'next/link';
import BrushStroke from '@/components/BrushStroke';
import CodeSymbol from '@/components/CodeSymbol';
import HeroImage from '@/components/HeroImage';
import ScrollReveal from '@/components/ScrollReveal';
import SectionTitle from '@/components/SectionTitle';
import SocialLinks from '@/components/SocialLinks';
import TerminalTypewriter from '@/components/TerminalTypewriter';

export default function HomePage() {
  return (
    <>
      {/* Hero — fondo claro */}
      <section className="section-light relative overflow-hidden py-12 md:py-20 lg:py-28">
        <BrushStroke className="-right-10 top-16 w-[120%] max-w-none md:top-24" color="pink" />
        <ScrollReveal>
          <div className="relative z-10 mx-auto flex w-[92%] max-w-7xl flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex-1 lg:max-w-xl">
              <h1 className="title-hero-name mb-4">
                Fernando
                <span className="block">Hidalgo</span>
              </h1>
              <p className="font-nav mb-4 text-xl uppercase tracking-[0.35em] text-ink-black md:text-2xl">
                Desarrollador Web
              </p>
              <TerminalTypewriter />
              <p className="prose-body-normal mb-10 mt-6 max-w-md">
                Transformo desafíos en soluciones digitales con enfoque humano y creativo.
                Desarrollo web, automatización e IoT para negocios reales.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/servicios" className="btn-pill-dark">
                  Ver proyectos
                </Link>
                <a
                  href="https://drive.google.com/file/d/1qCIwGmwZEII01R93nHeDieBRLqbZeruZ/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-pill-outline"
                >
                  Descarga CV
                </a>
              </div>
              <SocialLinks variant="light" />
            </div>
            <div className="flex flex-1 justify-center overflow-visible">
              <HeroImage circleColor="pink" size="lg" />
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* About — fondo negro */}
      <section className="section-dark relative overflow-hidden py-20 md:py-32">
        <BrushStroke className="-left-8 top-10 w-[110%] rotate-180" color="purple" />
        <ScrollReveal delay={80}>
          <div className="relative z-10 mx-auto flex w-[92%] max-w-7xl flex-col items-center gap-16 md:flex-row">
            <div className="flex flex-1 justify-center">
              <HeroImage circleColor="purple" size="md" />
            </div>
            <div className="max-w-lg flex-1">
              <SectionTitle>Quién soy</SectionTitle>
              <p className="prose-body mt-10">
                Desarrollador autodidacta · Farmacia · ESP8266 · Raspberry Pi
              </p>
              <p className="prose-body-normal mt-8">
                Combino desarrollo web con hardware para crear sistemas funcionales para PyMEs.
                Desde una farmacia local hasta automatización con microcontroladores.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Skills — fondo claro */}
      <section className="section-light relative overflow-hidden py-20 md:py-32">
        <BrushStroke className="right-0 top-6 w-2/3" color="pink" />
        <ScrollReveal delay={80}>
          <div className="relative z-10 mx-auto flex w-[92%] max-w-7xl flex-col items-center gap-16 md:flex-row-reverse">
            <div className="flex-1 md:text-right">
              <SectionTitle align="right">Lo que hago</SectionTitle>
              <p className="prose-body mt-10 md:ml-auto">
                Facturación · Inventario · PWA · IoT · Dashboards
              </p>
              <p className="prose-body-normal mt-8 md:ml-auto md:max-w-md">
                Busco colaborar en proyectos de automatización y herramientas para negocios locales.
              </p>
              <div className="mt-12 md:flex md:justify-end">
                <Link href="/servicios" className="btn-pill-dark">
                  Explorar trabajos
                </Link>
              </div>
            </div>
            <div className="relative flex flex-1 justify-center">
              <div className="circle-backdrop circle-backdrop-purple h-72 w-72 md:h-96 md:w-96" />
              <div className="relative z-10 flex h-72 w-72 items-center justify-center md:h-96 md:w-96">
                <CodeSymbol />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* CTA — fondo negro */}
      <section className="section-dark relative py-24 text-center md:py-32">
        <BrushStroke className="left-1/2 top-0 w-96 -translate-x-1/2" color="pink" />
        <ScrollReveal delay={80}>
          <div className="relative z-10 mx-auto w-[92%] max-w-2xl">
            <SectionTitle align="center">Hablemos</SectionTitle>
            <p className="prose-body-normal mx-auto mt-10 max-w-lg">
              ¿Tienes un proyecto en mente? Siempre estoy dispuesto a colaborar, aprender o
              conversar.
            </p>
            <a href="mailto:ferchoshidalgo@gmail.com" className="btn-pill-accent mt-12 inline-block">
              Escríbeme
            </a>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
