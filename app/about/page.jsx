export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-2xl font-serif">Acerca del proyecto</h1>
      <section>
        <h2 className="text-xl font-serif mb-2">¿Qué es Testigo.mx?</h2>
        <p className="text-sm">
          Testigo.mx es una plataforma digital orientada a construir una base de datos accesible, ética y detallada de
          prendas de vestir, objetos personales, identificaciones, restos humanos y otros hallazgos forenses relacionados
          con personas desaparecidas en México. No tiene fines comerciales y busca servir como herramienta de consulta
          y esperanza para familiares, colectivos de búsqueda y especialistas.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-serif mb-2">¿Por qué nace este proyecto?</h2>
        <p className="text-sm">
          México atraviesa una crisis humanitaria sin precedentes, con más de cien mil personas desaparecidas y cientos
          de fosas clandestinas donde se recuperan miles de objetos sin identificar. Actualmente no existe una plataforma
          que permita indexar, visualizar y filtrar estos hallazgos de forma abierta y segura. Testigo.mx nace para llenar
          ese vacío, apoyando la identificación y respetando la dignidad de las víctimas y el dolor de sus familias.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-serif mb-2">¿Para quién es esta plataforma?</h2>
        <ul className="list-disc pl-6 text-sm space-y-1">
          <li>Familiares de personas desaparecidas</li>
          <li>Colectivos de búsqueda y buscadoras</li>
          <li>Especialistas forenses y defensores de derechos humanos</li>
          <li>Periodistas y ciudadanía en general</li>
        </ul>
      </section>
      <section>
        <h2 className="text-xl font-serif mb-2">Principios éticos</h2>
        <ul className="list-disc pl-6 text-sm space-y-1">
          <li>Respeto absoluto a la dignidad y privacidad de las víctimas y sus familias.</li>
          <li>Moderación cuidadosa de contenido sensible; las imágenes nunca se muestran sin advertencia previa.</li>
          <li>Plataforma sin fines lucrativos, operada con transparencia y consentimiento informado.</li>
          <li>Acompañamiento de especialistas forenses y colectivos en la gestión de la información.</li>
        </ul>
      </section>
    </div>
  );
}