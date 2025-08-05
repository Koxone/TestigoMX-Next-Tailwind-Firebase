"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function NavBar() {
  const router = useRouter();
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
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div
          onClick={() => router.push("/")}
          className="cursor-pointer text-xl font-semibold"
        >
          <Image
            src="/2-Vacio-White.png"
            className="object-contain"
            width={64}
            height={64}
            alt="TestigoMX Logo"
          />
        </div>
        <div className="flex space-x-4 text-sm">
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <button
                type="button"
                onClick={() => router.push(href)}
                className={`rounded-md px-3 py-2 ${
                  isActive
                    ? "bg-accent text-secondary"
                    : "text-secondary/80 hover:text-secondary"
                } transition-colors duration-150`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
