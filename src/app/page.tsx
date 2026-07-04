import Link from 'next/link';
import BrushStroke from '@/components/BrushStroke';
import HeroImage from '@/components/HeroImage';
import SectionTitle from '@/components/SectionTitle';
import SocialLinks from '@/components/SocialLinks';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="section-dark relative overflow-hidden py-16 md:py-24">
        <BrushStroke className="right-0 top-12 w-64 md:w-96" color="purple" />
        <div className="relative z-10 mx-auto flex w-[92%] max-w-7xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl flex-1 lg:order-1">
            <p className="font-nav mb-4 text-xs uppercase tracking-[0.35em] text-brand-muted">
              Portfolio · Ecuador
            </p>
            <h1 className="title-display mb-2">Fercho</h1>
            <p className="font-nav mb-6 text-lg uppercase tracking-[0.3em] text-white md:text-xl">
              Desarrollador Web
            </p>
            <p className="prose-body-normal mb-10 max-w-md">
              Analizo problemas complejos de la experiencia del usuario y creo soluciones
              integrales que conectan personas. Transformo desafíos en oportunidades con un
              enfoque humano y creativo.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/servicios" className="btn-pill-filled">
                Ver proyectos
              </Link>
              <a
                href="https://drive.google.com/file/d/1qCIwGmwZEII01R93nHeDieBRLqbZeruZ/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-pill"
              >
                Descarga CV
              </a>
            </div>
            <SocialLinks />
          </div>
          <div className="flex flex-1 justify-center lg:order-2">
            <HeroImage circleColor="pink" />
          </div>
        </div>
      </section>

      {/* About 1 */}
      <section className="section-darker relative overflow-hidden py-20 md:py-28">
        <BrushStroke className="left-0 top-8 w-56 rotate-180 md:w-80" color="pink" />
        <div className="relative z-10 mx-auto flex w-[92%] max-w-7xl flex-col items-center gap-16 md:flex-row">
          <div className="flex-1">
            <HeroImage circleColor="purple" className="max-w-xs" />
          </div>
          <div className="max-w-lg flex-1">
            <SectionTitle size="sm">Quién soy</SectionTitle>
            <p className="prose-body mt-8">
              Desarrollador autodidacta apasionado por resolver problemas reales con tecnología.
              Desde una farmacia en Ecuador hasta automatización con ESP8266 y Raspberry Pi.
            </p>
            <p className="prose-body-normal mt-6 normal-case">
              Combino desarrollo web con hardware para crear sistemas funcionales, útiles y
              modernos para PyMEs y proyectos personales.
            </p>
          </div>
        </div>
      </section>

      {/* About 2 */}
      <section className="section-alt relative overflow-hidden py-20 md:py-28">
        <div className="relative z-10 mx-auto flex w-[92%] max-w-7xl flex-col items-center gap-16 md:flex-row-reverse">
          <div className="flex-1 md:text-right">
            <SectionTitle size="sm" align="right">
              Lo que hago
            </SectionTitle>
            <p className="prose-body mt-8 md:ml-auto">
              Facturación · Inventarios · PWA · IoT · Dashboards
            </p>
            <p className="prose-body-normal mt-6 normal-case md:ml-auto md:max-w-md">
              Busco colaborar en proyectos de automatización, herramientas para negocios locales
              y apps que mezclen software con hardware.
            </p>
            <div className="mt-10 md:flex md:justify-end">
              <Link href="/servicios" className="btn-pill">
                Explorar trabajos
              </Link>
            </div>
          </div>
          <div className="flex flex-1 justify-center">
            <div className="relative">
              <div className="circle-backdrop circle-backdrop-pink left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 md:h-80 md:w-80" />
              <div className="relative z-10 flex h-64 w-64 items-center justify-center md:h-80 md:w-80">
                <span className="title-display text-center text-6xl text-white md:text-8xl">
                  &lt;/&gt;
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-darker relative py-20 text-center md:py-24">
        <BrushStroke className="left-1/2 top-0 w-72 -translate-x-1/2" color="purple" />
        <div className="relative z-10 mx-auto w-[92%] max-w-2xl">
          <SectionTitle align="center">Hablemos</SectionTitle>
          <p className="prose-body-normal mx-auto mt-8 max-w-lg">
            ¿Tienes un proyecto en mente? Siempre estoy dispuesto a colaborar, aprender o
            simplemente conversar.
          </p>
          <a
            href="mailto:ferchoshidalgo@gmail.com"
            className="btn-pill-filled mt-10 inline-block"
          >
            Escríbeme
          </a>
        </div>
      </section>
    </>
  );
}
