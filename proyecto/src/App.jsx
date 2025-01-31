import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Definir las páginas de tu aplicación
import Home from "./pages/Home"; // Página de inicio
import Espacios from "./pages/Espacios"; // Página de espacios
import Comentarios from "./pages/Comentarios"; // Página de servicios
import Contacto from "./pages/Contacto"; // Página de contacto

// Definir el componente App con las rutas
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Espacios" element={<Espacios />} />
          <Route path="/Comentarios" element={<Comentarios />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
