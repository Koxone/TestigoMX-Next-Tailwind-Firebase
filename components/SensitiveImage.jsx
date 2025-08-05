"use client";

import { useState } from "react";
import Image from "next/image";

export default function SensitiveImage({ src, alt, className, ...rest }) {
  const [revealed, setRevealed] = useState(false);
  return (
    <div className={`relative ${className || ""} h-full`}>
      {/* Actual image */}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100%"
        className={`transition-filter rounded-md object-cover duration-200 ${revealed ? "" : "scale-105 blur-md"}`}
        {...rest}
      />
      {!revealed && (
        <button
          type="button"
          onClick={() => setRevealed(true)}
          className="absolute inset-0 flex flex-col items-center justify-center rounded-md bg-primary/70 p-4 text-xs text-secondary"
        >
          <span className="font-semibold">Contenido sensible</span>
          <span className="mt-1">Haz clic para ver</span>
        </button>
      )}
    </div>
  );
}
