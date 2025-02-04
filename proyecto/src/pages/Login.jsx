import React from 'react';
import LoginForm from '../components/LoginForm';
import Header from '../components/Header';

const Login = () => {
  const handleLogin = (token) => {
    // Aquí puedes manejar la lógica de lo que ocurre después de que el usuario inicie sesión
    console.log('User logged in, token:', token);
  };

  return (
    <>
      <Header />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h2>
          <LoginForm handleLogin={handleLogin} />
        </div>
      </div>
    </>
  );
};

export default Login;
