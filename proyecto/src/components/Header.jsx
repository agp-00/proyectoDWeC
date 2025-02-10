import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../hooks/AuthContext"; // Importar el contexto de autenticación
import "flag-icons/css/flag-icons.min.css"; // Importa flag-icons

export default function Header() {
  const { user, logout } = useContext(AuthContext); // Obtener el usuario y la función logout desde el contexto
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("es"); // Idioma por defecto

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    setIsDropdownOpen(false);
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

        {/* Selector de idioma con bandera (Desplegable) */}
        <div className="relative ml-auto">
          <button
            onClick={toggleDropdown}
            className="w-10 h-10 flex items-center justify-center rounded-full overflow-hidden"
          >
            {/* Bandera del idioma seleccionado con flag-icons */}
            <span className={`fi fi-${selectedLanguage} w-10 h-10 rounded-full`}></span>
          </button>

          {/* Menú desplegable */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-gray-700 text-white rounded-lg shadow-lg">
              <ul>
                <li
                  onClick={() => handleLanguageChange("es")}
                  className="px-4 py-2 hover:bg-gray-600 cursor-pointer flex items-center"
                >
                  <span className="fi fi-es mr-2 w-6 h-6 rounded-full"></span> Español
                </li>
                <li
                  onClick={() => handleLanguageChange("es-ct")}
                  className="px-4 py-2 hover:bg-gray-600 cursor-pointer flex items-center"
                >
                  <span className="fi fi-es-ct mr-2 w-6 h-6 rounded-full"></span> Catalán
                </li>
                <li
                  onClick={() => handleLanguageChange("gb")}
                  className="px-4 py-2 hover:bg-gray-600 cursor-pointer flex items-center"
                >
                  <span className="fi fi-gb mr-2 w-6 h-6 rounded-full"></span> Inglés
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Botón Login/Logout */}
        <div className="flex items-center space-x-6 ml-6">
          {user ? (
            // Si el usuario está autenticado, mostrar "Cerrar sesión"
            <button
              onClick={logout}
              className="bg-red-600 px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none"
            >
              Cerrar sesión
            </button>
          ) : (
            // Si no está autenticado, mostrar "Iniciar sesión"
            <Link to="/login">
              <button className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none">
                Iniciar sesión
              </button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
