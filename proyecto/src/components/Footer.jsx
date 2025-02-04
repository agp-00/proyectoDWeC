import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-6 mt-auto w-full">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <div className="text-lg font-bold">
            <Link to="/" className="text-white">
              BaleArt
            </Link>
          </div>
  
          <nav className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/" className="hover:text-gray-400">Inicio</Link>
            <Link to="/Espacios" className="hover:text-gray-400">Espacios</Link>
            <Link to="/Comentarios" className="hover:text-gray-400">Comentarios</Link>
            <Link to="/Contacto" className="hover:text-gray-400">Contacto</Link>
          </nav>
  
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaFacebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaInstagram size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
  
        <div className="border-t border-gray-700 mt-4 pt-4 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} BaleArt. Todos los derechos reservados.
        </div>
      </footer>
    );
  }
  