"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * Navigation bar for Testigo.mx.
 * Provides links to the main sections of the site and keeps the aesthetic
 * restrained and dignified. The current path is highlighted subtly.
 */
export default function NavBar() {
  const pathname = usePathname();
  const links = [
    { href: '/', label: 'Inicio' },
    { href: '/gallery', label: 'Galería' },
    { href: '/upload', label: 'Carga' },
    { href: '/moderation', label: 'Moderación' },
    { href: '/about', label: 'Acerca' },
  ];
  return (
    <nav className="bg-primary text-secondary shadow-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="text-xl font-serif font-semibold">
          <Link href="/">
            <span>Testigo.mx</span>
          </Link>
        </div>
        <div className="flex space-x-4 text-sm">
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link key={href} href={href}
                className={`px-3 py-2 rounded-md ${isActive ? 'bg-accent text-secondary' : 'text-secondary/80 hover:text-secondary'} transition-colors duration-150`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}