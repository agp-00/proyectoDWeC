import { useState, useEffect } from "react";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Sidebar from "../components/Sidebar";
import SpaceList from "../components/SpaceList";

export default function Home() {
  const [spaces, setSpaces] = useState([]);

  useEffect(() => {
    // Aquí puedes cargar los datos de los espacios desde tu backend
    setSpaces([
      { id: 1, name: "Espacio 1", type: "Artístico", rating: 4.5, commentsCount: 10 },
      { id: 2, name: "Espacio 2", type: "Diseño", rating: 4.2, commentsCount: 5 },
      { id: 3, name: "Espacio 3", type: "Cultural", rating: 4.8, commentsCount: 20 },
    ]);
  }, []);

  const handleApplyFilters = () => {
    // Aquí iría la lógica para aplicar filtros
    console.log("Filtros aplicados");
  };

  return (
    <div className="min-h-screen bg-gray-100 w-full">
      <Header />
      <main className="flex w-full h-full">
        <Sidebar onApplyFilters={handleApplyFilters} />
        <div className="flex-1 p-8 w-full h-full">
          {/* Contenedor del carousel y la lista de espacios */}
          <div className="w-full">
            <Carousel />
            <SpaceList spaces={spaces} />
          </div>
        </div>
      </main>
    </div>
  );
}
