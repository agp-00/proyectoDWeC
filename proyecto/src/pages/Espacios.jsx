import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SpaceList from "../components/SpaceList";

export default function Home({ onSearch }) {
  const [spaces, setSpaces] = useState([]);
  const [query, setQuery] = useState("");
  const handleSearch = () => {
    onSearch(query); // Llama a la función de búsqueda
  };

  useEffect(() => {
    // Aquí puedes cargar los datos de los espacios desde tu backend

  }, []);

  const handleApplyFilters = () => {
    // Aquí iría la lógica para aplicar filtros
    console.log("Filtros aplicados");
  };

  return (
    <div className="min-h-screen bg-gray-100 w-full">
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <Header />
      </div>

      {/* NAVBAR Sticky debajo del header */}
      <div className="sticky top-[60px] z-40 bg-white shadow-sm">
        <Navbar />
      </div>
      <main className="flex w-full h-full">
          <Sidebar onApplyFilters={handleApplyFilters}/>
        <div className="flex-1 p-8 w-full h-full">
          {/* Contenedor del input de búsqueda */}
          <div className="h-min flex items-center mx-4 w-full relative">
            <input
              type="text"
              placeholder="Buscar espacios..."
              className="w-full px-4 py-2 rounded-full bg-gray-700 text-white focus:outline-none pr-10"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onClick={(e) => e.key === "Enter" && handleSearch()} // Buscar al presionar Enter
            />
            <button
              onClick={handleSearch}
              className="absolute right-5 text-white"
            >
              <FiSearch size={20} />
            </button>
          </div>

          <div className="w-full h-80 justify-center items-center flex">
            <SpaceList spaces={spaces} />
          </div>
        </div>
      </main>
    </div>
  );
}
