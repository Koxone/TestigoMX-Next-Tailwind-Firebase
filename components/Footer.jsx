/**
 * Site footer containing basic information and contact links.
 */
export default function Footer() {
  return (
    <footer className="bg-primary text-secondary py-6 mt-12">
      <div className="max-w-6xl mx-auto px-4 text-sm">
        <p className="mb-2">&copy; {new Date().getFullYear()} Testigo.mx – Proyecto humanitario sin fines de lucro.</p>
        <p>Para contacto institucional o prensa escribe a <a href="mailto:contacto@testigo.mx" className="underline">contacto@testigo.mx</a>.</p>
      </div>
    </footer>
  );
}