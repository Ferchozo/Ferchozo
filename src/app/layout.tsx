import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import './globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ferchozo.github.io/Ferchozo'),
  title: {
    default: 'Fernando Hidalgo | Desarrollador Web',
    template: '%s | Fernando Hidalgo',
  },
  description:
    'Desarrollador web autodidacta. Portafolio, proyectos para PyMEs y soluciones con HTML, CSS, JavaScript e IoT.',
  authors: [{ name: 'Fernando Hidalgo' }],
  openGraph: {
    title: 'Fernando Hidalgo | Desarrollador Web',
    description:
      'Desarrollador web autodidacta. Transformo desafíos en soluciones digitales con enfoque humano y creativo.',
    type: 'website',
    images: ['/Recursos/img/fer2.png'],
  },
  icons: {
    icon: '/Recursos/img/fh logo 1.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
