import { useState, useContext } from 'react';
import AuthContext from '../hooks/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useContext(AuthContext); // Acceder al contexto de autenticación
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://baleart.test/api/login', {
        email: email.trim(), // Eliminar espacios adicionales
        password: password.trim() // Eliminar espacios adicionales
      });

      // Guardar el token usando el contexto
      login(response.data.access_token);

      // Redirigir al usuario a la página principal o donde quieras
      navigate('/');

    } catch (err) {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Correo electrónico"
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Contraseña"
        />
        <button type="submit">Iniciar sesión</button>
        {error && <p>{error}</p>}
      </form>
    </div>
    

    
  );
};

export default Login;
