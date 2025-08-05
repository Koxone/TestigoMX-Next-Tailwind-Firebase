export default function DashboardPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-serif mb-4">Panel de usuario</h1>
      <p className="text-sm mb-4">
        Esta sección es una vista general personalizada. Aquí podrían aparecer tus objetos cargados, notificaciones
        de moderación y sugerencias de hallazgos. Actualmente se muestra como un espacio reservado para futuras funciones.
      </p>
      <div className="bg-muted border border-primary/10 p-6 rounded-lg">
        <p className="text-primary/80">No hay datos para mostrar en tu panel por el momento.</p>
      </div>
    </div>
  );
}