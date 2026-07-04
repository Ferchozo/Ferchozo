import type { Metadata } from 'next';
import BrushStroke from '@/components/BrushStroke';
import SectionTitle from '@/components/SectionTitle';

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad de Pharmacy Tool por Fernando Hidalgo.',
};

export default function PoliticaPrivacidadPage() {
  return (
    <>
      <section className="section-light relative overflow-hidden py-16 md:py-20">
        <BrushStroke className="left-1/2 top-4 w-80 -translate-x-1/2" color="purple" />
        <div className="relative z-10 mx-auto w-[92%] max-w-3xl text-center">
          <SectionTitle align="center">Privacidad</SectionTitle>
        </div>
      </section>

      <section className="section-dark pb-24 pt-8">
        <div className="prose-body-normal mx-auto w-[92%] max-w-3xl space-y-8">
          <p>
            <strong className="text-white">Última actualización:</strong> 14 de Diciembre de 2025
          </p>

          <div>
            <h2 className="font-display text-4xl text-brand-pink">1. Información General</h2>
            <p className="mt-4 text-white/70">
              Esta aplicación, <strong className="text-white">Pharmacy Tool</strong>, desarrollada
              por <strong className="text-white">Fernando Hidalgo</strong>, se proporciona como
              servicio gratuito/comercial.
            </p>
          </div>

          <div>
            <h2 className="font-display text-4xl text-brand-pink">2. Recopilación de Información</h2>
            <p className="mt-4 text-white/70">
              La información se conserva en su dispositivo y no la recopilamos excepto según esta
              política.
            </p>
            <ul className="mt-4 ml-6 list-disc text-white/70">
              <li>Google Play Services</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-4xl text-brand-pink">3. Permisos del Dispositivo</h2>
            <ul className="mt-4 ml-6 list-disc space-y-2 text-white/70">
              <li>
                <strong className="text-white">Cámara:</strong> Escaneo de códigos de barras/QR.
              </li>
              <li>
                <strong className="text-white">Almacenamiento:</strong> Base de datos local de
                inventario.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-4xl text-brand-pink">4. Contáctenos</h2>
            <p className="mt-4 text-white/70">
              <strong className="text-white">ferchoshidalgo@gmail.com</strong>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
