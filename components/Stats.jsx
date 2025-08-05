/**
 * Small component to display three simple statistics about the data set.
 * The stats reflect total hallazgos, zonas y colectivos representados.
 * Accepts numbers via props to promote reusability.
 */
export default function Stats({ total, zones, collectives }) {
  const items = [
    { label: "Hallazgos", value: total },
    { label: "Zonas", value: zones },
    { label: "Colectivos", value: collectives },
  ];
  return (
    <div className="grid grid-cols-3 gap-4 max-w-md mx-auto text-center mt-8">
      {items.map(({ label, value }) => (
        <div key={label} className="bg-muted text-primary p-4 rounded-lg border border-primary/10">
          <p className="text-2xl font-semibold ">{value}</p>
          <p className="text-sm uppercase tracking-wide text-primary/80 mt-1">{label}</p>
        </div>
      ))}
    </div>
  );
}
