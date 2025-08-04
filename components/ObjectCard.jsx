"use client";

import Link from 'next/link';
import SensitiveImage from './SensitiveImage';

/**
 * Displays a single object in the gallery list. The layout is inspired by
 * forensic files rather than a commercial card grid. Each object appears as
 * a file with its most important attributes visible.
 */
export default function ObjectCard({ object }) {
  return (
    <article className="border border-primary/10 bg-muted rounded-lg p-4 flex flex-col sm:flex-row items-start gap-4 mb-4">
      <div className="relative w-full sm:w-40 h-32 shrink-0">
        <SensitiveImage src={object.image} alt={`Imagen de ${object.type}`} />
      </div>
      <div className="flex-1">
        <header className="flex items-center flex-wrap gap-2 mb-2">
          <span className="bg-primary text-secondary px-2 py-1 rounded text-xs uppercase">
            {object.type}
          </span>
          <span className="bg-accent text-secondary px-2 py-1 rounded text-xs uppercase">
            {object.color}
          </span>
          <span className="bg-primary/70 text-secondary px-2 py-1 rounded text-xs uppercase">
            {object.state}
          </span>
        </header>
        <p className="text-sm mb-1"><strong>Fecha de hallazgo:</strong> {object.date}</p>
        <p className="text-sm mb-1"><strong>Ubicación:</strong> {object.location}</p>
        <p className="text-sm mb-1"><strong>Colectivo:</strong> {object.collective}</p>
        <p className="text-sm truncate"><strong>Descripción:</strong> {object.description}</p>
        <div className="mt-3">
          <Link href={`/object/${object.id}`} className="underline text-primary hover:text-accent">Ver detalle</Link>
        </div>
      </div>
    </article>
  );
}