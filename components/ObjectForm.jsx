"use client";

import { useState } from "react";
import SensitiveImage from "./SensitiveImage";

/**
 * Form for uploading a new forensic object. It contains required fields and
 * client‑side validation. When the form is submitted, it logs the data and
 * resets. In a production environment this would send data to a server.
 */
export default function ObjectForm() {
  const initialState = {
    type: "",
    color: "",
    state: "",
    date: "",
    location: "",
    collective: "",
    description: "",
    isPrivate: false,
    imageFile: null,
  };
  const [form, setForm] = useState(initialState);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setForm((prev) => ({ ...prev, imageFile: file }));
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple client‑side validation
    const requiredFields = ["type", "color", "state", "date", "location", "description"];
    const missing = requiredFields.filter((f) => !form[f]);
    if (missing.length) {
      alert("Por favor completa todos los campos obligatorios.");
      return;
    }
    // Simulate submission
    console.log("Form submission", form);
    setSubmitted(true);
    // Reset form after submission
    setForm(initialState);
    setPreviewUrl(null);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-muted border border-primary/10 p-6 rounded-lg max-w-xl mx-auto text-sm">
      <h2 className="text-lg  mb-4">Subir nuevo hallazgo</h2>
      <div className="flex flex-col space-y-4">
        <div>
          <label htmlFor="image" className="block mb-1 font-semibold">
            Imagen (contenido sensible)
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full text-sm"
            required
          />
          {previewUrl && (
            <div className="mt-2 w-full h-48 relative">
              <SensitiveImage src={previewUrl} alt="Vista previa" />
            </div>
          )}
        </div>
        <div>
          <label htmlFor="type" className="block mb-1 font-semibold">
            Tipo de objeto*
          </label>
          <input
            type="text"
            id="type"
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full p-2 border border-primary/20 rounded bg-secondary"
            required
          />
        </div>
        <div>
          <label htmlFor="color" className="block mb-1 font-semibold">
            Color*
          </label>
          <input
            type="text"
            id="color"
            name="color"
            value={form.color}
            onChange={handleChange}
            className="w-full p-2 border border-primary/20 rounded bg-secondary"
            required
          />
        </div>
        <div>
          <label htmlFor="state" className="block mb-1 font-semibold">
            Estado de conservación*
          </label>
          <input
            type="text"
            id="state"
            name="state"
            value={form.state}
            onChange={handleChange}
            className="w-full p-2 border border-primary/20 rounded bg-secondary"
            required
          />
        </div>
        <div>
          <label htmlFor="date" className="block mb-1 font-semibold">
            Fecha de hallazgo*
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full p-2 border border-primary/20 rounded bg-secondary"
            required
          />
        </div>
        <div>
          <label htmlFor="location" className="block mb-1 font-semibold">
            Ubicación*
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={form.location}
            onChange={handleChange}
            className="w-full p-2 border border-primary/20 rounded bg-secondary"
            required
          />
        </div>
        <div>
          <label htmlFor="collective" className="block mb-1 font-semibold">
            Colectivo responsable
          </label>
          <input
            type="text"
            id="collective"
            name="collective"
            value={form.collective}
            onChange={handleChange}
            className="w-full p-2 border border-primary/20 rounded bg-secondary"
          />
        </div>
        <div>
          <label htmlFor="description" className="block mb-1 font-semibold">
            Descripción*
          </label>
          <textarea
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full p-2 border border-primary/20 rounded bg-secondary"
            rows={3}
            required
          />
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="isPrivate"
            name="isPrivate"
            checked={form.isPrivate}
            onChange={handleChange}
            className="mr-2"
          />
          <label htmlFor="isPrivate" className="text-sm">
            Marcar como caso privado (solo visible a usuarios con permiso)
          </label>
        </div>
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-primary text-secondary rounded hover:bg-accent transition-colors"
        >
          Enviar hallazgo
        </button>
        {submitted && <p className="text-green-600 mt-2">El hallazgo se ha enviado (demostración).</p>}
      </div>
    </form>
  );
}
