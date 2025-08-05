"use client";

import SearchInput from "./Inputs/SearchInput";

/**
 * FilterBar renders a set of select inputs for the gallery.
 * It accepts a list of objects to derive unique filter options
 * and a callback to update the selected filters in the parent component.
 */
export default function FilterBar({
  objects,
  filters,
  onFilterChange,
  search,
  onSearchChange,
}) {
  // Extract unique values for each field
  const uniqueValues = (key) => {
    const vals = new Set(objects.map((obj) => obj[key]).filter(Boolean));
    return Array.from(vals);
  };

  const fields = [
    { key: "category", label: "Categoría" },
    { key: "type", label: "Tipo" },
    { key: "color", label: "Color" },
    { key: "location", label: "Ubicación" },
  ];

  const handleChange = (key, value) => {
    onFilterChange({ ...filters, [key]: value });
  };

  return (
    <div className="mb-6 grid grid-cols-1 grid-rows-[auto_1fr] gap-4 rounded-lg border border-primary/10 bg-muted p-4 sm:grid-cols-2 lg:grid-cols-1">
      <SearchInput
        value={search}
        onChange={onSearchChange}
        placeholder="Buscar..."
      />
      <div className="grid grid-cols-4 gap-4">
        {fields.map(({ key, label }) => (
          <div key={key} className="flex flex-col">
            <label
              htmlFor={key}
              className="mb-1 text-xs font-semibold text-primary"
            >
              {label}
            </label>
            <select
              id={key}
              name={key}
              value={filters[key] ?? ""}
              onChange={(e) => handleChange(key, e.target.value)}
              className="rounded border border-primary/20 bg-secondary p-2 text-sm capitalize text-primary"
            >
              <option value="">Todos</option>
              {uniqueValues(key).map((val) => (
                <option key={val} value={val} className="capitalize">
                  {val}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
}
