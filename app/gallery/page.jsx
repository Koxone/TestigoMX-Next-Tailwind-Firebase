"use client";

import { useState, useMemo } from 'react';
import objects from '../../data/objects';
import FilterBar from '../../components/FilterBar';
import ObjectCard from '../../components/ObjectCard';

export default function GalleryPage() {
  const [filters, setFilters] = useState({ type: '', color: '', location: '', state: '' });
  // Filter objects based on current filters
  const filtered = useMemo(() => {
    return objects.filter((obj) => {
      return (
        (filters.type ? obj.type === filters.type : true) &&
        (filters.color ? obj.color === filters.color : true) &&
        (filters.location ? obj.location === filters.location : true) &&
        (filters.state ? obj.state === filters.state : true)
      );
    });
  }, [filters]);

  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-2xl font-serif mb-4">Galería de objetos hallados</h1>
      <FilterBar objects={objects} filters={filters} onFilterChange={setFilters} />
      <div>
        {filtered.length ? (
          filtered.map((obj) => <ObjectCard key={obj.id} object={obj} />)
        ) : (
          <p className="text-sm text-primary/80">No se encontraron objetos con los filtros seleccionados.</p>
        )}
      </div>
    </div>
  );
}