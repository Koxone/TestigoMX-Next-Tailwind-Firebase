"use client";

/**
 * SearchInput is a reusable search field that adheres to the Testigo.mx
 * aesthetic. It accepts a `value` string and an `onChange` callback to
 * propagate updates to parent components. A placeholder guides the user.
 */
export default function SearchInput({
  value,
  onChange,
  placeholder = "Buscar...",
}) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded border border-primary/20 bg-secondary p-2 text-primary placeholder:text-primary/50 focus:border-primary focus:outline-none"
    />
  );
}
