// src/components/HeaderDefault.tsx
import { Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeaderDefault() {
    return (
        <header className="border-b border-slate-700/50 bg-slate-900">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* --- LOGO E TÍTULO --- */}
                <div className="flex items-center gap-8">
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

                {/* <nav className="hidden md:flex space-x-8">
                    <Link
                        to="/status"
                        className="text-white text-700 hover:text-white-900 font-medium"
                    >
                        Status
                    </Link>
                </nav> */}

                <div className="flex items-center gap-4">
                    <Link
                        className="px-4 py-2 text-white text-700 hover:text-gray-700 hover:text-white cursor-pointer font-medium"
                        to="/status"
                    >
                        Status
                    </Link>
                    <Link
                        to="/contato"
                        className="px-4 py-2 border border-white border-500 text-white text-500 text-sm font-semibold rounded hover:text-blue-700 hover:bg-blue-50 transition-colors"
                    >
                        Contato
                    </Link>
                    <Link
                        className="px-4 py-2 border border-white border-500 text-white text-700 text-sm font-semibold rounded hover:text-blue-700 hover:bg-blue-50 transition-colors"
                        to="/login"
                    >
                        Login
                    </Link>
                    <Link
                        className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded"
                        to="/signup"
                    >
                        Sign up
                    </Link>
                </div>
            </div>
        </header>
    );
}
