import { useState } from "react";
import axios from "axios";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    try {
      // Enviar las credenciales a la API
      const response = await axios.post('http://baleart.test/api/login', {
        email,
        password,
      });

      // Si la autenticación es exitosa, guarda el token en cookies o en el almacenamiento local
      localStorage.setItem('auth_token', response.data.token);

      // Actualiza el estado del usuario
      setUser(response.data.user);

      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError(err.response ? err.response.data.message : 'Error de conexión');
    }
  };

  return {
    login,
    loading,
    error,
    user,
  };
};

export default useLogin;
