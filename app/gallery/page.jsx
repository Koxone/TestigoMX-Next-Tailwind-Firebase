"use client";

import { useState, useMemo } from "react";
import objects from "../../data/objects";
import FilterBar from "../../components/FilterBar";
import ObjectCard from "../../components/ObjectCard";
import SearchInput from "../../components/Inputs/SearchInput";

export default function GalleryPage() {
  const [filters, setFilters] = useState({
    category: "",
    type: "",
    color: "",
    location: "",
    state: "",
    tags: "",
  });

  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return objects.filter((obj) => {
      const lowerSearch = search.toLowerCase();
      const tagString = Array.isArray(obj.tags) ? obj.tags.join(" ") : "";
      const texto =
        `${obj.type} ${obj.color} ${obj.location} ${obj.description} ${tagString}`.toLowerCase();
      return (
        (filters.category ? obj.category === filters.category : true) &&
        (filters.type ? obj.type === filters.type : true) &&
        (filters.color ? obj.color === filters.color : true) &&
        (filters.location ? obj.location === filters.location : true) &&
        (filters.state ? obj.state === filters.state : true) &&
        (!lowerSearch || texto.includes(lowerSearch))
      );
    });
  }, [filters, search]);

  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="mb-4 text-2xl">Galería de objetos recuperdos</h1>
      <FilterBar
        objects={objects}
        filters={filters}
        onFilterChange={setFilters}
        onSearchChange={setSearch}
        search={search}
      />
      <div>
        {filtered.length ? (
          filtered.map((obj) => <ObjectCard key={obj.id} object={obj} />)
        ) : (
          <p className="text-sm text-primary/80">
            No se encontraron objetos con los filtros seleccionados.
          </p>
        )}
      </div>
    </div>
  );
}
