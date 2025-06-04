
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import Login from './pages/Login';
import ProtectedRoute from './auth/ProtectedRoute';
import { AuthProvider } from './auth/AuthContext';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />

        {/* Rotas da aplicação */}
        <Routes>
          {/* Rota de login fica pública */}
          <Route path="/login" element={<Login />} />

          {/* Rota principal (/) só para admin */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* Rota de configurações (Settings) - protegida */}
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />

          {/* Rota de perfil (Profile) - protegida */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* Se quiser, adicione “404” ou redirecionamento padrão */}
          <Route path="*" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;