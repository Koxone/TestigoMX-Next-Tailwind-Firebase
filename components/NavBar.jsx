"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  const links = [
    { href: "/", label: "Inicio" },
    { href: "/gallery", label: "Galería" },
    { href: "/upload", label: "Carga" },
    { href: "/moderation", label: "Moderación" },
    { href: "/about", label: "Acerca" },
  ];
  return (
    <nav className="bg-primary text-secondary shadow-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="text-xl border  font-semibold">
          {/* <Image
          src=} /> */}
        </div>
        <div className="flex space-x-4 text-sm">
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`px-3 py-2 rounded-md ${
                  isActive ? "bg-accent text-secondary" : "text-secondary/80 hover:text-secondary"
                } transition-colors duration-150`}
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
