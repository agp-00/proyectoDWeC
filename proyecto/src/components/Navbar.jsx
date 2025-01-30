import { Link } from "react-router-dom";

export default function Navbar() {
    return (
      <nav className="bg-blue-800 shadow-lg">
        <div className="container mx-auto flex space-x-4 p-4">
          <Link to="/" className="text-white text-lg hover:text-gray-300">Inicio</Link>
          <Link to="/espacios" className="text-white text-lg hover:text-gray-300">Espacios</Link>
          <Link to="/servicios" className="text-white text-lg hover:text-gray-300">Servicios</Link>
          <Link to="/contacto" className="text-white text-lg hover:text-gray-300">Contacto</Link>
        </div>
      </nav>
    );
}