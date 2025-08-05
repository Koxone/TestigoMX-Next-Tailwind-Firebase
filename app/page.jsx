import Image from "next/image";
import Stats from "../components/Stats";
import objects from "../data/objects";
import Link from "next/link";

export default function HomePage() {
  // Compute stats
  const total = objects.length;
  const zones = new Set(objects.map((o) => o.location)).size;
  const collectives = new Set(objects.map((o) => o.collective)).size;
  return (
    <div>
      {/* Hero section */}
      <section className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
        <Image src="/abstract-bg.png" alt="Fondo abstracto azul" fill sizes="100%" className="object-cover" priority />
        <div className="absolute inset-0 bg-primary/70 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl text-secondary mb-2">Bienvenido a Testigo.mx</h1>
          <p className="text-sm sm:text-base md:text-lg text-secondary/90 max-w-2xl mb-4">
            Plataforma humanitaria para documentar, clasificar y visualizar hallazgos forenses relacionados con personas
            desaparecidas en México.
          </p>
          <Link
            href="/gallery"
            className="inline-block px-5 py-2 bg-secondary text-primary font-semibold rounded hover:bg-muted transition-colors"
          >
            Ver galería
          </Link>
        </div>
      </section>
      {/* Statistics section */}
      <Stats total={total} zones={zones} collectives={collectives} />
      {/* Intro text */}
      <section className="mt-8 max-w-3xl mx-auto text-base leading-relaxed">
        <h2 className="text-xl mb-2">Nuestra misión</h2>
        <p className="mb-4">
          Testigo.mx nace para servir como un repositorio seguro y consultable de objetos personales y restos
          recuperados en búsquedas de campo y fosas clandestinas. Su objetivo es apoyar a familiares y colectivos de
          búsqueda en la difícil labor de identificar a sus seres queridos, respetando en todo momento la dignidad de
          las víctimas.
        </p>
        <p>
          Explora nuestra galería para consultar hallazgos, utiliza los filtros para afinar tu búsqueda y, si formas
          parte de un colectivo, contribuye cargando información de manera ética y responsable.
        </p>
      </section>
    </div>
  );
}
