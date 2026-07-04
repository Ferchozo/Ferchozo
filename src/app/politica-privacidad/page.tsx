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
      <section className="section-dark relative overflow-hidden py-16">
        <BrushStroke className="left-1/2 top-4 w-64 -translate-x-1/2" color="pink" />
        <div className="relative z-10 mx-auto w-[92%] max-w-3xl text-center">
          <SectionTitle align="center" size="sm">
            Privacidad
          </SectionTitle>
        </div>
      </section>

      <section className="section-darker pb-20 pt-4">
        <div className="prose-body-normal mx-auto w-[92%] max-w-3xl space-y-6 normal-case">
          <p>
            <strong className="text-white">Última actualización:</strong> 14 de Diciembre de 2025
          </p>

          <h2 className="font-display text-2xl text-brand-pink">1. Información General</h2>
          <p>
            Esta aplicación, <strong className="text-white">Pharmacy Tool</strong>, desarrollada por{' '}
            <strong className="text-white">Fernando Hidalgo</strong> (en adelante, &ldquo;el
            Desarrollador&rdquo;), se proporciona como un servicio gratuito/comercial y está
            prevista para ser utilizada tal cual.
          </p>

          <h2 className="font-display text-2xl text-brand-pink">2. Recopilación y Uso de Información</h2>
          <p>
            La información que solicitamos se conservará en su dispositivo y no la recopilaremos
            de ninguna manera, excepto según lo descrito en esta política de privacidad.
          </p>
          <ul className="ml-6 list-disc">
            <li>Google Play Services</li>
          </ul>

          <h2 className="font-display text-2xl text-brand-pink">3. Permisos del Dispositivo</h2>
          <ul className="ml-6 list-disc space-y-2">
            <li>
              <strong className="text-white">Cámara:</strong> Escaneo de códigos de barras/QR. No se
              guardan fotos personales.
            </li>
            <li>
              <strong className="text-white">Almacenamiento:</strong> Base de datos de inventario
              local en el dispositivo.
            </li>
          </ul>

          <h2 className="font-display text-2xl text-brand-pink">4. Seguridad</h2>
          <p>
            Valoramos su confianza al proporcionarnos su Información Personal, por lo que nos
            esforzamos por utilizar medios comercialmente aceptables para protegerla.
          </p>

          <h2 className="font-display text-2xl text-brand-pink">5. Enlaces a otros sitios</h2>
          <p>
            Este Servicio puede contener enlaces a otros sitios externos no operados por nosotros.
          </p>

          <h2 className="font-display text-2xl text-brand-pink">6. Cambios a esta Política</h2>
          <p>Podemos actualizar nuestra Política de Privacidad de vez en cuando.</p>

          <h2 className="font-display text-2xl text-brand-pink">7. Contáctenos</h2>
          <p>
            <strong className="text-white">ferchoshidalgo@gmail.com</strong>
          </p>
        </div>
      </section>
    </>
  );
}
