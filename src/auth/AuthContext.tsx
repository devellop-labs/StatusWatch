import { createContext, useState, useEffect, ReactNode } from 'react';

interface AuthContextType {
  isAdmin: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  isAdmin: false,
  login: async () => {},
  logout: () => {}
});

export function AuthProvider({ children }: { children: ReactNode }) {
  // Aqui você pode usar localStorage, cookies ou qualquer mecanismo para persistir o token
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    // Na carga inicial, verifica se já há um token válido de admin no localStorage
    const saved = localStorage.getItem('isAdmin');
    return saved === 'true';
  });

  useEffect(() => {
    // Sincroniza a flag de admin no localStorage
    localStorage.setItem('isAdmin', isAdmin ? 'true' : 'false');
  }, [isAdmin]);

  async function login(username: string, password: string) {
    // Exemplo: aqui você deve chamar sua API de autenticação (back-end)
    // e verificar se é um admin. Por enquanto, vamos simular:
    if (username === 'admin' && password === 'senhaAdmin') {
      setIsAdmin(true);
    } else {
      throw new Error('Credenciais inválidas');
    }
  }

  function logout() {
    setIsAdmin(false);
  }

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
