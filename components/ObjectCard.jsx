"use client";

import Link from "next/link";
import SensitiveImage from "./SensitiveImage";

export default function ObjectCard({ object }) {
  return (
    <article className="mb-4 flex flex-col items-start gap-4 rounded-lg border border-primary/10 bg-muted p-4 sm:flex-row">
      <div className="relative h-32 w-full shrink-0 sm:w-40">
        <SensitiveImage src={object.image} alt={`Imagen de ${object.type}`} />
      </div>
      <div className="flex-1">
        <header className="mb-2 flex flex-wrap items-center gap-2">
          <span className="rounded bg-primary px-2 py-1 text-xs uppercase text-secondary">
            {object.type}
          </span>
          <span className="rounded bg-accent px-2 py-1 text-xs uppercase text-secondary">
            {object.color}
          </span>
          <span className="rounded bg-primary/70 px-2 py-1 text-xs uppercase text-secondary">
            {object.state}
          </span>
        </header>
        <p className="mb-1 text-sm">
          <strong>Fecha de hallazgo:</strong> {object.date}
        </p>
        <p className="mb-1 text-sm">
          <strong>Ubicación:</strong> {object.location}
        </p>
        <p className="mb-1 text-sm">
          <strong>Colectivo:</strong> {object.collective}
        </p>
        <p className="truncate text-sm">
          <strong>Descripción:</strong> {object.description}
        </p>
        <div className="mt-3">
          <Link
            href={`/object/${object.id}`}
            className="text-primary underline hover:text-accent"
          >
            Ver detalle
          </Link>
        </div>
      </div>
    </article>
  );
}
