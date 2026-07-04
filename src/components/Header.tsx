'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/servicios', label: 'Proyectos' },
  { href: '/politica-privacidad', label: 'Privacidad' },
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
    <header className="sticky top-0 z-50 border-b border-ink-black/10 bg-ink-white/95 backdrop-blur-sm">
      <div className="mx-auto flex w-[92%] max-w-7xl items-center justify-between py-4 md:py-5">
        <Link
          href="/"
          className="font-display text-2xl text-brand-pink md:text-3xl"
        >
          FH
        </Link>

        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-ink-black transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-ink-black transition-opacity ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-ink-black transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>

        <nav
          className={`absolute left-0 right-0 top-full border-b border-ink-black/10 bg-ink-white px-[4%] py-8 md:static md:flex md:items-center md:border-0 md:bg-transparent md:p-0 ${
            menuOpen ? 'block' : 'hidden md:flex'
          }`}
        >
          <ul className="flex flex-col gap-5 md:flex-row md:items-center md:gap-12">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-nav text-sm uppercase tracking-[0.25em] transition-colors hover:text-brand-pink ${
                    isActive(link.href) ? 'text-brand-pink' : 'text-ink-black'
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
            className="btn-pill-dark mt-8 md:ml-12 md:mt-0"
          >
            Hablemos
          </a>
        </nav>
      </div>
    </header>
  );
}
