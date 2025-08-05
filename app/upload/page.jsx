import ObjectForm from "../../components/ObjectForm";

export default function UploadPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl  mb-4">Formulario de carga</h1>
      <p className="text-sm mb-6">
        Por favor proporciona tanta información como sea posible sobre el objeto hallado. Las imágenes serán tratadas de
        manera confidencial y nunca se mostrarán sin advertencia previa. Los campos marcados con * son obligatorios.
      </p>
      <ObjectForm />
    </div>
  );
}
