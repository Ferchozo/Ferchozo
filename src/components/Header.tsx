'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Proyectos' },
  { href: '/politica-privacidad', label: 'Política de privacidad' },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#1c1c1c]/95 backdrop-blur-sm">
      <div className="mx-auto flex w-[90%] max-w-6xl items-center justify-between py-4">
        <Link href="/" className="shrink-0">
          <Image
            src="/Recursos/img/fh logo 1.png"
            alt="Fernando Hidalgo"
            width={50}
            height={50}
            priority
          />
        </Link>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>

        <nav
          className={`absolute left-0 right-0 top-full border-b border-white/10 bg-[#1c1c1c] px-[5%] py-6 md:static md:flex md:items-center md:border-0 md:bg-transparent md:p-0 ${
            menuOpen ? 'block' : 'hidden md:flex'
          }`}
        >
          <ul className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-medium transition-colors hover:text-pink-400 ${
                    isActive(link.href) ? 'text-pink-400' : 'text-white'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href="https://www.instagram.com/ferchonand0/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-md bg-[#6200ea] px-6 py-3 text-center font-medium text-white transition hover:bg-gradient-to-r hover:from-[#9e47ff] hover:to-[#fa3232] md:ml-8 md:mt-0"
          >
            Sígueme
          </a>
        </nav>
      </div>
    </header>
  );
}
