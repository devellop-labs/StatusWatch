// src/components/Breadcrumbs.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Este componente lê o pathname atual e transforma em:
 * Home / Segmento1 / Segmento2 / ...
 * Cada segmento é um Link para a rota acumulada.
 *
 * Exemplo:
 *  - Path: "/settings/profile"
 *  - Breadcrumb: [Home] / [Settings] / [Profile]
 */
export default function Breadcrumbs() {
    const location = useLocation();
    // location.pathname pode ser "/" ou "/settings" ou "/settings/profile"
    const pathname = location.pathname;

    // Quebra em segmentos, removendo possíveis strings vazias
    const segments = pathname.split('/').filter((seg) => seg !== '');

    // Montar lista de “rotas acumuladas”:
    // - index 0: "/"
    // - index 1: "/settings"
    // - index 2: "/settings/profile"
    const paths = segments.map((seg, idx) => {
        return {
            name: seg, // ex: "settings", depois vamos capitalizar
            path: '/' + segments.slice(0, idx + 1).join('/')
        };
    });

    return (
        <nav className="bg-slate-800 border-b border-slate-700/50 text-slate-400 px-4 py-2">
            <ol className="flex items-center space-x-1 text-sm">
                {/* Always render Home link */}
                <li>
                    <Link to="/" className="hover:text-white">
                        Home
                    </Link>
                </li>

                {/* Render slash + cada segmento */}
                {paths.map((item, idx) => (
                    <React.Fragment key={item.path}>
                        <li>/</li>
                        <li>
                            {/*
                Se for último item da array, deixa sem link (ou estiliza como “ativo”).
                Senão, renderiza como link para item.path.
              */}
                            {idx < paths.length - 1 ? (
                                <Link to={item.path} className="hover:text-white">
                                    {capitalize(item.name)}
                                </Link>
                            ) : (
                                <span className="text-white font-semibold">
                                    {capitalize(item.name)}
                                </span>
                            )}
                        </li>
                    </React.Fragment>
                ))}
            </ol>
        </nav>
    );
}

// Função utilitária para transformar "settings" em "Settings"
function capitalize(str: string) {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}
