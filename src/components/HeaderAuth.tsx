// src/components/Header.tsx
import { useState, useRef, useEffect } from 'react';
import { Clock, Github, Bell, HelpCircle, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Header() {
    const [openNotif, setOpenNotif] = useState(false);
    const [openHelp, setOpenHelp] = useState(false);
    const [openAccount, setOpenAccount] = useState(false);
    const notifRef = useRef<HTMLDivElement>(null);
    const helpRef = useRef<HTMLDivElement>(null);
    const accRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    // Fecha qualquer dropdown quando clica fora
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
                setOpenNotif(false);
            }
            if (helpRef.current && !helpRef.current.contains(e.target as Node)) {
                setOpenHelp(false);
            }
            if (accRef.current && !accRef.current.contains(e.target as Node)) {
                setOpenAccount(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    function handleLogout() {
        // aqui você pode limpar token, chamar sua API de logout, etc
        // só de exemplo, vamos redirecionar para /login
        localStorage.removeItem('isAdmin');
        navigate('/login');
    }

    return (
        <header className="border-b border-slate-700/50 bg-slate-900">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* --- LOGO E TÍTULO --- */}
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <div className="absolute inset-0 bg-emerald-500 blur-lg opacity-20"></div>
                            <Link to="/" className="flex items-center gap-4">
                                <div className="relative bg-gradient-to-br from-emerald-400 to-blue-500 rounded-xl p-2">
                                    <svg
                                        viewBox="0 0 24 24"
                                        width="32"
                                        height="32"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="text-white"
                                    >
                                        <path d="M12 19V5" />
                                        <path d="M5 12l7-7 7 7" />
                                        <path d="M3 19h18" />
                                        <circle cx="12" cy="19" r="2" />
                                    </svg>
                                </div></Link>

                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <h1 className="flex flex-col items-start">
                            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 text-transparent bg-clip-text">
                                StatusWatch
                            </span>
                            <span className="text-xs text-slate-400">
                                <small>by Devellop Labs</small>
                            </span>
                        </h1>
                        <a
                            href="https://github.com/sioaeko/statuswatch"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-3 py-1 text-sm text-slate-400 hover:text-white transition-colors bg-slate-800/50 rounded-full border border-slate-700/50 hover:border-slate-600"
                        >
                            <Github className="h-4 w-4" />
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    {/* --- RELOGIO --- */}
                    <div className="hidden md:flex items-center gap-2 text-slate-400">
                        <Clock className="h-5 w-5" />
                        <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
                    </div>

                    {/* --- ÍCONES DO LADO DIREITO --- */}
                    <div className="flex items-center gap-6">
                        {/* 1) Ícone de Notificações */}
                        <div className="relative" ref={notifRef}>
                            <button onClick={() => setOpenNotif(prev => !prev)} className="p-2 rounded-full hover:bg-slate-800/50 transition-colors">
                                <Bell className="h-6 w-6 text-slate-300" />
                            </button>
                            {openNotif && (
                                <div className="absolute right-0 mt-2 w-64 bg-slate-800 border border-slate-700 rounded-lg shadow-lg z-20">
                                    {/* Aqui você pode listar as notificações reais; por ora, vou colocar itens de exemplo */}
                                    <div className="px-4 py-2 text-white border-b border-slate-700/50">Notificações</div>
                                    <ul className="max-h-64 overflow-y-auto">
                                        <li className="px-4 py-2 hover:bg-slate-700/50 cursor-pointer text-slate-300 text-sm">
                                            Site “www.exemplo.com” caiu em 10:15
                                        </li>
                                        <li className="px-4 py-2 hover:bg-slate-700/50 cursor-pointer text-slate-300 text-sm">
                                            Issue #23 foi fechada automaticamente
                                        </li>
                                        <li className="px-4 py-2 hover:bg-slate-700/50 cursor-pointer text-slate-300 text-sm">
                                            Novo usuário cadastrado: cliente@exemplo.com
                                        </li>
                                        {/* … */}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* 2) Ícone de Ajuda */}
                        <div className="relative" ref={helpRef}>
                            <button onClick={() => setOpenHelp(prev => !prev)} className="p-2 rounded-full hover:bg-slate-800/50 transition-colors">
                                <HelpCircle className="h-6 w-6 text-slate-300" />
                            </button>
                            {openHelp && (
                                <div className="absolute right-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-lg shadow-lg z-20">
                                    <div className="px-4 py-2 text-white border-b border-slate-700/50">Ajuda</div>
                                    <ul>
                                        <li
                                            className="px-4 py-2 hover:bg-slate-700/50 cursor-pointer text-slate-300 text-sm"
                                            onClick={() => window.open('https://seusite.com/suporte/duvidas', '_blank')}
                                        >
                                            Conversar com o suporte
                                        </li>
                                        <li
                                            className="px-4 py-2 hover:bg-slate-700/50 cursor-pointer text-slate-300 text-sm"
                                            onClick={() => window.open('https://seusite.com/central-ajuda', '_blank')}
                                        >
                                            Central de ajuda
                                        </li>
                                        <li
                                            className="px-4 py-2 hover:bg-slate-700/50 cursor-pointer text-slate-300 text-sm"
                                            onClick={() => window.open('https://seusite.com/novidades', '_blank')}
                                        >
                                            Novidades e lançamentos
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* 3) Ícone de Menu/Conta */}
                        <div className="relative" ref={accRef}>
                            <button onClick={() => setOpenAccount(prev => !prev)} className="flex items-center gap-1 p-2 rounded-full hover:bg-slate-800/50 transition-colors">
                                {/* Avatar (pode ser <img> dinâmico ou estático) */}
                                <img
                                    src="https://avatars.githubusercontent.com/u/1234567?v=4"
                                    alt="Avatar"
                                    className="h-8 w-8 rounded-full object-cover"
                                />
                                <ChevronDown className="h-4 w-4 text-slate-300" />
                            </button>
                            {openAccount && (
                                <div className="absolute right-0 mt-2 w-40 bg-slate-800 border border-slate-700 rounded-lg shadow-lg z-20">
                                    <div className="px-4 py-2 text-white border-b border-slate-700/50">Minha Conta</div>
                                    <ul>
                                        <li
                                            className="px-4 py-2 hover:bg-slate-700/50 cursor-pointer text-slate-300 text-sm"
                                            onClick={() => navigate('/settings')}
                                        >
                                            Configurações
                                        </li>
                                        <li
                                            className="px-4 py-2 hover:bg-slate-700/50 cursor-pointer text-slate-300 text-sm"
                                            onClick={() => navigate('/profile')}
                                        >
                                            Minha Conta
                                        </li>
                                        <li
                                            className="px-4 py-2 hover:bg-red-600/50 cursor-pointer text-red-400 text-sm"
                                            onClick={handleLogout}
                                        >
                                            Logout
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
