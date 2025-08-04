"use client";

/**
 * FilterBar renders a set of select inputs for the gallery. It accepts a list of
 * objects to derive unique filter options and a callback to update the
 * selected filters in the parent component.
 */
export default function FilterBar({ objects, filters, onFilterChange }) {
  // Extract unique values for each field
  const uniqueValues = (key) => {
    const vals = new Set(objects.map((obj) => obj[key]));
    return Array.from(vals);
  };
  const fields = [
    { key: 'type', label: 'Tipo' },
    { key: 'color', label: 'Color' },
    { key: 'location', label: 'Ubicación' },
    { key: 'state', label: 'Estado' },
  ];

  const handleChange = (key, value) => {
    onFilterChange({ ...filters, [key]: value });
  };

  return (
    <div className="bg-muted border border-primary/10 rounded-lg p-4 mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {fields.map(({ key, label }) => (
        <div key={key} className="flex flex-col">
          <label htmlFor={key} className="text-xs font-semibold text-primary mb-1">
            {label}
          </label>
          <select
            id={key}
            name={key}
            value={filters[key] || ''}
            onChange={(e) => handleChange(key, e.target.value)}
            className="p-2 border border-primary/20 rounded bg-secondary text-primary text-sm"
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
  );
}