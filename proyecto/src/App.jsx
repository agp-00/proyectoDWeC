import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './hooks/AuthContext';  // Importar AuthProvider

// Definir las páginas de tu aplicación
import Home from "./pages/Home"; // Página de inicio
import Espacios from "./pages/Espacios"; // Página de espacios
import Comentarios from "./pages/Comentarios"; // Página de servicios
import Contacto from "./pages/Contacto"; // Página de contacto
import Footer from "./components/Footer";
import Login from "./pages/Login"; // Página de login
import Sidebar from "./components/Sidebar"; // Agregar Sidebar

function App() {
  const [filters, setFilters] = useState({
    islands: [],
    municipalities: [],
    modalities: [],
    services: [],
    spaceTypes: []
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters); // Actualizar los filtros con los nuevos valores
  };

  return (
    <AuthProvider> {/* Envolver la app con AuthProvider */}
      <BrowserRouter basename="/">
        <div className="App">
          {/* Sidebar para cambiar filtros */}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/espacios" element={<Espacios filters={filters} />} />
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
