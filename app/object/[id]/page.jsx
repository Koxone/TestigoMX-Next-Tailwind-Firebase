import objects from '../../../data/objects';
import SensitiveImage from '../../../components/SensitiveImage';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function ObjectDetailPage({ params }) {
  const { id } = params;
  const object = objects.find((o) => o.id === id);
  if (!object) {
    notFound();
  }
  return (
    <div className="max-w-4xl mx-auto">
      <Link href="/gallery" className="text-sm underline text-primary mb-4 inline-block">← Volver a la galería</Link>
      <h1 className="text-2xl font-serif mb-4">Detalle del hallazgo</h1>
      <div className="border border-primary/10 bg-muted p-6 rounded-lg flex flex-col sm:flex-row gap-6">
        <div className="relative w-full sm:w-64 h-64">
          <SensitiveImage src={object.image} alt={`Imagen de ${object.type}`} />
        </div>
        <div className="flex-1 text-sm space-y-2">
          <p><strong>Tipo:</strong> {object.type}</p>
          <p><strong>Color:</strong> {object.color}</p>
          <p><strong>Estado de conservación:</strong> {object.state}</p>
          <p><strong>Fecha de hallazgo:</strong> {object.date}</p>
          <p><strong>Ubicación aproximada:</strong> {object.location}</p>
          <p><strong>Colectivo responsable:</strong> {object.collective}</p>
          <p><strong>Número de expediente:</strong> {object.fileNumber || 'N/A'}</p>
          <p><strong>Descripción:</strong> {object.description}</p>
          <p><strong>Notas:</strong> {object.notes}</p>
          <div className="mt-4">
            <a
              href={`mailto:contacto@testigo.mx?subject=Consulta%20hallazgo%20${object.id}`}
              className="inline-block px-4 py-2 bg-primary text-secondary rounded hover:bg-accent"
            >
              Contactar colectivo
            </a>
            {/* Example link to downloadable PDF, if exists */}
            {/* {object.pdf && (
              <a href={object.pdf} className="ml-4 underline">Descargar ficha forense</a>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}