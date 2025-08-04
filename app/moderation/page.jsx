import ModerationList from '../../components/ModerationList';
import objects from '../../data/objects';

export default function ModerationPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-2xl font-serif mb-4">Panel de moderación</h1>
      <p className="text-sm mb-6">
        Revisa los hallazgos enviados y decide si se deben aprobar, editar o rechazar. Esta sección sólo está visible
        para usuarios con permisos de moderador.
      </p>
      <ModerationList objects={objects} />
    </div>
  );
}