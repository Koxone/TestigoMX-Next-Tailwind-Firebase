"use client";

import { useState } from 'react';
import Image from 'next/image';

/**
 * Wrapper around next/image that hides potentially sensitive images behind
 * an overlay. A click on the overlay reveals the image. This helps respect
 * the dignity of victims and families by preventing accidental viewing.
 */
export default function SensitiveImage({ src, alt, className, ...rest }) {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className={`relative ${className || ''}`}>
      {/* Actual image */}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100%"
        className={`object-cover rounded-md transition-filter duration-200 ${revealed ? '' : 'blur-md scale-105'}`}
        {...rest}
      />
      {!revealed && (
        <button
          type="button"
          onClick={() => setRevealed(true)}
          className="absolute inset-0 flex flex-col items-center justify-center bg-primary/70 text-secondary text-xs p-4 rounded-md"
        >
          <span className="font-semibold">Contenido sensible</span>
          <span className="mt-1">Haz clic para ver</span>
        </button>
      )}
    </div>
  );
}