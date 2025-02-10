import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import SpaceList from "../components/SpaceList";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Espacios() {
  const [spaces, setSpaces] = useState([]);
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({
    island: "",
    municipality: "",
    modality: "",
    service: "",
    spaceType: "",
  });

  // Obtener el token desde localStorage o sessionStorage
  const token = localStorage.getItem("token"); // O usa sessionStorage si lo guardas allí

  // Función para aplicar filtros desde Sidebar
  const handleApplyFilters = (newFilters) => {
    setFilters(newFilters);
  };

  // Función de búsqueda
  const handleSearch = () => {
    if (query === "") return; // No hacer nada si el campo de búsqueda está vacío
    const filteredSpaces = spaces.filter((space) =>
      space.nom.toLowerCase().includes(query.toLowerCase())
    );
    setSpaces(filteredSpaces);
  };

  useEffect(() => {
    // Obtener los espacios desde la API
    const applyFilters = async () => {
      const filterParams = new URLSearchParams();

      // Agregar los filtros a los parámetros de la URL solo si no están vacíos
      if (filters.island) filterParams.append("island", filters.island);
      if (filters.municipality) filterParams.append("municipality", filters.municipality);
      if (filters.modality) filterParams.append("modality", filters.modality);
      if (filters.service) filterParams.append("service", filters.service);
      if (filters.spaceType) filterParams.append("spaceType", filters.spaceType);

      try {
        const response = await fetch(`http://baleart.test/api/space?${filterParams.toString()}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`, // Agregar el token aquí
          },
        });

        if (!response.ok) {
          throw new Error(`Error al obtener los espacios: ${response.statusText}`);
        }

        const data = await response.json();
        setSpaces(data); // Asegúrate de que los datos recibidos son correctos
      } catch (error) {
        console.error("Error al aplicar los filtros", error);
      }
    };

    applyFilters();
  }, [filters, token]); // Ejecutamos cuando los filtros cambian o el token cambia

  return (
    <div className="min-h-screen bg-gray-100 w-full">
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <Header />
      </div>

      <div className="sticky top-[60px] z-40 bg-white shadow-sm">
        <Navbar />
      </div>

      <main className="flex w-full h-full">
        {/* Sidebar con filtros */}
        <Sidebar onApplyFilters={handleApplyFilters} />

        <div className="flex-1 p-8 w-full h-full">
          {/* Contenedor del input de búsqueda */}
          <div className="h-min flex items-center mx-4 w-full relative">
            <input
              type="text"
              placeholder="Buscar espacios..."
              className="w-full px-4 py-2 rounded-full bg-gray-700 text-white focus:outline-none pr-10"
              value={query}
              onChange={(e) => setQuery(e.target.value)} // Actualiza el estado correctamente
              onKeyDown={(e) => e.key === "Enter" && handleSearch()} // Buscar al presionar Enter
            />
          </div>

          {/* Mostrar la lista de espacios filtrados */}
          <SpaceList spaces={spaces} />
        </div>
      </main>
    </div>
  );
}
