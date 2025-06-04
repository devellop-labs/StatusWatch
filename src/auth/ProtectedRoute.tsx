import { Navigate } from 'react-router-dom';
import { useAuth } from './useAuth';

interface ProtectedRouteProps {
  children: JSX.Element;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAdmin } = useAuth();

  if (!isAdmin) {
    // não é admin: redireciona para /login
    return <Navigate to="/login" replace />;
  }

  // se for admin, renderiza a rota
  return children;
}
