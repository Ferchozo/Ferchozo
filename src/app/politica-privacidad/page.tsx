import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description: 'Política de privacidad de Pharmacy Tool por Fernando Hidalgo.',
};

export default function PoliticaPrivacidadPage() {
  return (
    <section className="mx-auto w-[90%] max-w-3xl py-16">
      <h1 className="mb-8 text-center text-4xl font-bold text-pink-400">Política de Privacidad</h1>

      <p className="mb-6 text-gray-300">
        <strong className="text-white">Última actualización:</strong> 14 de Diciembre de 2025
      </p>

      <h2 className="mb-4 mt-8 text-2xl text-pink-400">1. Información General</h2>
      <p className="mb-4 leading-relaxed text-gray-300">
        Esta aplicación, <strong className="text-white">Pharmacy Tool</strong>, desarrollada por{' '}
        <strong className="text-white">Fernando Hidalgo</strong> (en adelante, &ldquo;el
        Desarrollador&rdquo;), se proporciona como un servicio gratuito/comercial y está prevista
        para ser utilizada tal cual. Esta página se utiliza para informar a los visitantes sobre
        nuestras políticas con respecto a la recopilación, el uso y la divulgación de información
        personal si alguien decide utilizar nuestro Servicio.
      </p>

      <h2 className="mb-4 mt-8 text-2xl text-pink-400">2. Recopilación y Uso de Información</h2>
      <p className="mb-4 leading-relaxed text-gray-300">
        Para una mejor experiencia al usar nuestro Servicio, es posible que le solicitemos que nos
        proporcione cierta información de identificación personal. La información que solicitamos se
        conservará en su dispositivo y no la recopilaremos de ninguna manera, excepto según lo
        descrito en esta política de privacidad.
      </p>
      <p className="mb-4 leading-relaxed text-gray-300">
        La aplicación utiliza servicios de terceros que pueden recopilar información utilizada para
        identificarlo (por ejemplo, para estadísticas de fallos o publicidad):
      </p>
      <ul className="mb-4 ml-8 list-disc text-gray-300">
        <li>Google Play Services</li>
      </ul>

      <h2 className="mb-4 mt-8 text-2xl text-pink-400">3. Permisos del Dispositivo</h2>
      <p className="mb-4 leading-relaxed text-gray-300">
        La aplicación puede requerir acceso a ciertas funciones de su dispositivo móvil para
        funcionar correctamente:
      </p>
      <ul className="mb-4 ml-8 list-disc text-gray-300">
        <li>
          <strong className="text-white">Cámara:</strong> Se utiliza exclusivamente para la función
          de escaneo de códigos de barras/QR de los productos farmacéuticos. No se capturan ni
          guardan fotos personales.
        </li>
        <li>
          <strong className="text-white">Almacenamiento:</strong> Se utiliza para guardar la base de
          datos de su inventario localmente en su dispositivo.
        </li>
      </ul>

      <h2 className="mb-4 mt-8 text-2xl text-pink-400">4. Seguridad</h2>
      <p className="mb-4 leading-relaxed text-gray-300">
        Valoramos su confianza al proporcionarnos su Información Personal, por lo que nos esforzamos
        por utilizar medios comercialmente aceptables para protegerla. Pero recuerde que ningún
        método de transmisión a través de Internet o método de almacenamiento electrónico es 100%
        seguro y confiable, y no podemos garantizar su seguridad absoluta.
      </p>

      <h2 className="mb-4 mt-8 text-2xl text-pink-400">5. Enlaces a otros sitios</h2>
      <p className="mb-4 leading-relaxed text-gray-300">
        Este Servicio puede contener enlaces a otros sitios. Si hace clic en un enlace de un tercero,
        será dirigido a ese sitio. Tenga en cuenta que estos sitios externos no son operados por
        nosotros.
      </p>

      <h2 className="mb-4 mt-8 text-2xl text-pink-400">6. Cambios a esta Política de Privacidad</h2>
      <p className="mb-4 leading-relaxed text-gray-300">
        Podemos actualizar nuestra Política de Privacidad de vez en cuando. Por lo tanto, se le
        recomienda revisar esta página periódicamente para ver si hay cambios.
      </p>

      <h2 className="mb-4 mt-8 text-2xl text-pink-400">7. Contáctenos</h2>
      <p className="leading-relaxed text-gray-300">
        Si tiene alguna pregunta o sugerencia sobre nuestra Política de Privacidad, no dude en
        contactarnos en:{' '}
        <strong className="text-white">ferchoshidalgo@gmail.com</strong>.
      </p>
    </section>
  );
}
