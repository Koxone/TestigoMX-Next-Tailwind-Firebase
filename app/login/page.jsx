"use client";

import { useState } from 'react';

/**
 * Login and registration page. Allows toggling between a login form and a
 * registration form while preserving the aesthetic of the rest of the site.
 */
export default function LoginPage() {
  const [mode, setMode] = useState('login');
  const [form, setForm] = useState({ email: '', password: '', confirm: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password || (mode === 'register' && form.password !== form.confirm)) {
      setMessage('Por favor completa los campos correctamente.');
      return;
    }
    // Simulate login/register success
    setMessage(mode === 'login' ? 'Inicio de sesión exitoso (demostración).' : 'Registro exitoso (demostración).');
    // Reset form
    setForm({ email: '', password: '', confirm: '' });
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-serif mb-4">{mode === 'login' ? 'Iniciar sesión' : 'Registrarse'}</h1>
      <div className="bg-muted border border-primary/10 rounded-lg p-6 text-sm">
        <div className="flex mb-4">
          <button
            onClick={() => { setMode('login'); setMessage(''); }}
            className={`flex-1 py-2 ${mode === 'login' ? 'bg-primary text-secondary' : 'bg-secondary text-primary'} rounded-l`}
          >
            Iniciar sesión
          </button>
          <button
            onClick={() => { setMode('register'); setMessage(''); }}
            className={`flex-1 py-2 ${mode === 'register' ? 'bg-primary text-secondary' : 'bg-secondary text-primary'} rounded-r`}
          >
            Registrarse
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1 font-semibold">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-2 border border-primary/20 rounded bg-secondary"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 font-semibold">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full p-2 border border-primary/20 rounded bg-secondary"
              required
            />
          </div>
          {mode === 'register' && (
            <div>
              <label htmlFor="confirm" className="block mb-1 font-semibold">Confirmar contraseña</label>
              <input
                type="password"
                id="confirm"
                name="confirm"
                value={form.confirm}
                onChange={handleChange}
                className="w-full p-2 border border-primary/20 rounded bg-secondary"
                required
              />
            </div>
          )}
          <button type="submit" className="w-full py-2 bg-primary text-secondary rounded hover:bg-accent transition-colors">
            {mode === 'login' ? 'Entrar' : 'Registrarse'}
          </button>
        </form>
        {message && <p className="mt-4 text-green-600">{message}</p>}
      </div>
    </div>
  );
}