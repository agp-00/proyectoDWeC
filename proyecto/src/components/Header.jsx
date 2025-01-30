import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado de login
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Estado para el dropdown del idioma
    const [selectedLanguage, setSelectedLanguage] = useState("es"); // Idioma por defecto
  
    const handleLoginLogout = () => {
      setIsLoggedIn(!isLoggedIn);
    };
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    const handleLanguageChange = (lang) => {
      setSelectedLanguage(lang);
      setIsDropdownOpen(false); // Cerrar dropdown al seleccionar un idioma
    };
  
    return (
      <header className="fixed top-0 left-0 w-full bg-gray-800 text-white z-50 shadow-lg">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <div className="text-xl font-bold">
            <Link to="/" className="text-white">
              BaleArt
            </Link>
          </div>
  
          {/* Barra de búsqueda */}
          <div className="flex-1 mx-4">
            <input
              type="text"
              placeholder="Buscar espacios..."
              className="w-full px-4 py-2 rounded-full bg-gray-700 text-white focus:outline-none"
            />
          </div>
  
          {/* Selector de idioma con bandera (Desplegable) */}
          <div className="relative">
            <button onClick={toggleDropdown} className="w-10 h-10 rounded-full overflow-hidden">
              {/* Bandera del idioma seleccionado */}
              <img
                src={`https://flagcdn.com/w20/${selectedLanguage}.png`} // Cambia según el idioma seleccionado
                alt="Idioma"
                className="w-full h-full object-cover"
              />
            </button>
  
            {/* Menú desplegable */}
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-gray-700 text-white rounded-lg shadow-lg">
                <ul>
                  <li
                    onClick={() => handleLanguageChange("es")}
                    className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                  >
                    Español
                  </li>
                  <li
                    onClick={() => handleLanguageChange("ca")}
                    className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                  >
                    Catalán
                  </li>
                  <li
                    onClick={() => handleLanguageChange("en")}
                    className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                  >
                    Inglés
                  </li>
                </ul>
              </div>
            )}
          </div>
  
          {/* Botón Login/Logout con icono */}
          <div className="flex items-center space-x-6 ml-6"> {/* Añadí ml-6 para separarlo más a la derecha */}
            {/* Icono de usuario */}
            <i className="fas fa-user text-white"></i>
            <button
              onClick={handleLoginLogout}
              className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none"
            >
              {isLoggedIn ? "Cerrar sesión" : "Iniciar sesión"}
            </button>
          </div>
        </div>
  
        {/* Barra de navegación */}
        <nav className="bg-gray-700">
          <div className="container mx-auto flex space-x-4 p-2">
            <Link to="/" className="text-white hover:text-gray-400">
              Inicio
            </Link>
            <Link to="/espacios" className="text-white hover:text-gray-400">
              Espacios
            </Link>
            <Link to="/servicios" className="text-white hover:text-gray-400">
              Servicios
            </Link>
            <Link to="/contacto" className="text-white hover:text-gray-400">
              Contacto
            </Link>
          </div>
        </nav>
      </header>
    );
  }
  