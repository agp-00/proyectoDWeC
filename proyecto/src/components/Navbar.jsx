import { Link } from "react-router-dom";

export default function Navbar() {
    return (
      <nav className="bg-gray-800 shadow-lg flex items-center mt-16">
        <div className="container mx-auto flex justify-center space-x-8 p-4">
          <Link to="/" className="text-white text-lg hover:text-gray-300">Inicio</Link>
          <Link to="/espacios" className="text-white text-lg hover:text-gray-300">Espacios</Link>
          <Link to="/comentarios" className="text-white text-lg hover:text-gray-300">Comentarios</Link>
          <Link to="/contacto" className="text-white text-lg hover:text-gray-300">Contacto</Link>
        </div>
      </nav>
    );
}