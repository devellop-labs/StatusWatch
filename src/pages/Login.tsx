import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Lock, Eye, EyeOff } from 'lucide-react';

import { useAuth } from '../auth/useAuth';

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleTogglePass() {
    setShowPass((prev) => !prev);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await login(username, password);
      navigate('/');
    } catch (err: any) {
      setError(err.message);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-800">
      <div className="w-full max-w-sm rounded-lg p-6">
        <div className="flex justify-center">
          <img
            src="https://devellop.com.br/static/logo.png"
            alt="Devellop Logo"
            className="h-16 object-contain"
          />
        </div>

        <form onSubmit={handleSubmit} className="p-8 rounded-md w-full max-w-sm bg-white shadow-lg space-y-5">
          {/* <h2 className="text-xl font-bold mb-4 text-white">Login Admin</h2> */}
          {error && <p className="text-red-400 mb-2">{error}</p>}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>

            <input
              type="text"
              value={username}
              placeholder="Email"
              onChange={e => setUsername(e.target.value)}
              required
              className="w-full pl-10 pr-3 py-2 border-b border-gray-300 focus:border-blue-500 focus:outline-none text-gray-700 placeholder-gray-400 rounded focus:ring-0"
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>

            <input
              type="password"
              value={password}
              placeholder="Senha"
              onChange={e => setPassword(e.target.value)}
              required
              className="w-full pl-10 pr-3 py-2 border-b border-gray-300 focus:border-blue-500 focus:outline-none text-gray-700 placeholder-gray-400 rounded focus:ring-0"
            />

            <button
              type="button"
              onClick={handleTogglePass}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 focus:outline-none"
              tabIndex={-1}
            >
              {showPass ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>

          <div className="flex items-center justify-between mt-1">
            <Link
              to="/recuperar-senha"
              className="text-sm text-gray-600 hover:underline"
            >
              Recuperar senha
            </Link>
            <button
              type="submit"
              className="px-4 py-2 bg-emerald-500 hover:bg-emerald-700 text-white text-sm font-semibold rounded transition-colors"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>

    </div>
  );
}
