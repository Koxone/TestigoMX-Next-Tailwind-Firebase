"use client";

import { useState } from 'react';
import SensitiveImage from './SensitiveImage';

/**
 * ModerationList provides a simple interface for moderators to accept,
 * edit or reject pending entries. Actions only update local state in this
 * demonstration; in a production app they would persist changes via API.
 */
export default function ModerationList({ objects }) {
  // Mark all objects as pending initially with local status
  const initial = objects.map((obj) => ({ ...obj, status: 'pending' }));
  const [items, setItems] = useState(initial);

  const updateStatus = (id, status) => {
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, status } : item)));
  };

  return (
    <div className="space-y-4">
      {items.map((obj) => (
        <div key={obj.id} className="border border-primary/10 rounded-lg p-4 bg-muted">
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <div className="relative w-full sm:w-32 h-24">
              <SensitiveImage src={obj.image} alt={obj.type} />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold mb-1">{obj.type} – {obj.color}</p>
              <p className="text-sm mb-1">Ubicación: {obj.location}</p>
              <p className="text-sm mb-1">Colectivo: {obj.collective}</p>
              <p className="text-sm mb-1">Fecha: {obj.date}</p>
              <p className="text-sm mb-1">Estado actual: <span className="capitalize">{obj.status}</span></p>
            </div>
            {obj.status === 'pending' && (
              <div className="flex flex-col gap-2">
                <button onClick={() => updateStatus(obj.id, 'approved')} className="px-3 py-1 bg-primary text-secondary rounded text-xs">Aceptar</button>
                <button onClick={() => alert('Funcionalidad de edición no implementada')} className="px-3 py-1 bg-accent text-secondary rounded text-xs">Editar</button>
                <button onClick={() => updateStatus(obj.id, 'rejected')} className="px-3 py-1 bg-danger text-secondary rounded text-xs">Rechazar</button>
              </div>
            )}
          </div>
        </div>
      ))}
      {items.every((item) => item.status !== 'pending') && (
        <p className="text-center text-sm text-primary/80 mt-4">No hay elementos pendientes.</p>
      )}
    </div>
  );
}