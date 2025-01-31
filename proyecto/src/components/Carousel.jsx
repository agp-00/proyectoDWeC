import { useState, useEffect } from "react";

export default function Carousel({ }) {
  const [topRatedSpaces, setTopRatedSpaces] = useState([]);
    // Datos de ejemplo de los espacios
    const spaces = [
      { id: 1, nom: "Espacio 1", municipi: "Municipio 1", image: "https://via.placeholder.com/300", rating: 4.6 },
      { id: 2, nom: "Espacio 2", municipi: "Municipio 2", image: "https://via.placeholder.com/300", rating: 3.5 },
      { id: 3, nom: "Espacio 3", municipi: "Municipio 3", image: "https://via.placeholder.com/300", rating: 4.9 },
      { id: 4, nom: "Espacio 4", municipi: "Municipio 4", image: "https://via.placeholder.com/300", rating: 4.1 },
      { id: 5, nom: "Espacio 5", municipi: "Municipio 5", image: "https://via.placeholder.com/300", rating: 5 },
      // Otros espacios...
    ];

  // Función para obtener los espacios con mejor valoración
  const getTopRatedSpaces = () => {
    if (spaces.length > 0) {
      // Ordenamos los espacios por rating de mayor a menor
      const sortedSpaces = [...spaces].sort((a, b) => b.rating - a.rating);
      // Tomamos los primeros 3
      setTopRatedSpaces(sortedSpaces.slice(0, 3));
    }
  };

  useEffect(() => {
    getTopRatedSpaces(); // Obtener los espacios con mejor valoración cuando el componente se monta
  }, [spaces]);

  return (
    <div className="w-full h-64 bg-gray-200 flex justify-center items-center mb-8">
      <h2 className="text-2xl mb-4">Carrusel de Espacios Destacados</h2>

      {/* Carrusel */}
      <div className="w-full flex justify-center items-center space-x-4 overflow-x-auto">
        {topRatedSpaces.length > 0 ? (
          topRatedSpaces.map((space) => (
            <div
              key={space.id}
              className="w-60 h-48 bg-white rounded-md shadow-lg overflow-hidden flex flex-col items-center justify-center"
            >
              <img
                src={space.image || "https://via.placeholder.com/300"}
                alt={space.nom}
                className="w-full h-32 object-cover"
              />
              <h3 className="text-lg font-semibold mt-2">{space.nom}</h3>
              <p className="text-sm">{space.municipi}</p>
              <div className="flex items-center mt-2">
                {/* Aquí agregamos las estrellas basadas en la valoración */}
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={`text-yellow-400 ${
                      index < Math.floor(space.rating) ? "text-yellow-400" : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>Cargando espacios destacados...</p>
        )}
      </div>
    </div>
  );
}
