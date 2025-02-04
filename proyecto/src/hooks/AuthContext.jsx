import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('auth_token') || null);

  useEffect(() => {
    if (token) {
      // Si tienes un token, ya está autenticado, podrías almacenar el estado del usuario
      // pero sin hacer una solicitud a `/api/user` si no la necesitas.
      setUser({ token }); // Puedes guardar el token o cualquier estado relevante
    }
  }, [token]);

  const login = (newToken) => {
    setToken(newToken);
    localStorage.setItem('auth_token', newToken); // Guardar el token en localStorage
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('auth_token'); // Limpiar el token
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
