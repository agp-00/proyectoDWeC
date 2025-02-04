import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import { AuthProvider } from './hooks/AuthContext';  // Importar AuthProvider

// Definir las páginas de tu aplicación
import Home from "./pages/Home"; // Página de inicio
import Espacios from "./pages/Espacios"; // Página de espacios
import Comentarios from "./pages/Comentarios"; // Página de servicios
import Contacto from "./pages/Contacto"; // Página de contacto
import Footer from "./components/Footer";

// Definir el componente App con las rutas
function App() {
  return (
    <AuthProvider> {/* Envolver la app con AuthProvider */}
      <BrowserRouter basename="/">
        <div className="App">
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/" element={<Home />} />
            <Route path="/espacios" element={<Espacios />} />
            <Route path="/comentarios" element={<Comentarios />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
