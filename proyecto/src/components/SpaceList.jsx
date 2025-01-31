import { act, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function SpaceList({ spaces }) {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(spaces.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentSpaces = spaces.slice(startIndex, endIndex);

  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  const generatePageNumbers = () => {
    const pages = [];
    
    // Siempre mostrar la primera página
    pages.push(1);

    // Mostrar las páginas cercanas a la actual
    const minPage = Math.max(2, currentPage - 2); // No mostrar página 1 en la lista intermedia
    const maxPage = Math.min(totalPages - 1, currentPage + 2); // No mostrar última página en la lista intermedia

    // Mostrar "..." después de la primera página solo si hay más páginas intermedias entre la primera y la página actual
    if (minPage > 2) {
      pages.push('...');
    }


    // Añadir las páginas intermedias entre minPage y maxPage
    for (let i = minPage; i <= maxPage; i++) {
      pages.push(i);
    }

    // Mostrar "..." antes de la última página si hay más páginas después de la página actual
    if (maxPage < totalPages - 1) {
      pages.push('...');
    }

    // Siempre mostrar la última página si no está ya en la lista
    if (totalPages > 1 && !pages.includes(totalPages)) {
      pages.push(totalPages);
    }

    return pages;
  };

  const renderStars = (rating) => {
    if (isNaN(rating) || rating < 0 || rating > 5) {
      rating = 0; // Asignar valor por defecto si rating no es válido
    }

    const fullStars = Math.floor(rating);
    const remainder = rating - fullStars;
    const hasHalfStar = remainder >= 0.3 && remainder <= 0.7;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, index) => (
          <AiFillStar key={`full-${index}`} className="text-yellow-400 text-xl" />
        ))}
        {hasHalfStar && (
          <div className="relative w-5 h-5">
            <AiFillStar className="text-yellow-400 absolute left-0 top-0 w-full h-full" />
            <div className="absolute left-1/2 top-0 w-1/2 h-full bg-white"></div>
          </div>
        )}
        {[...Array(emptyStars)].map((_, index) => (
          <AiOutlineStar key={`empty-${index}`} className="text-gray-300 text-xl" />
        ))}
      </div>
    );
  };

  return (
    <div className="h-64 w-full">
      {/* Grid de espacios */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentSpaces.map((space) => (
          <div key={space.id} className="border rounded-md p-4 bg-white shadow-sm">
            <img
              src={space.image || "https://via.placeholder.com/300"}
              alt={space.nom}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">{space.nom}</h3>
            <p>{space.municipi}</p>
            <p>{space.tipus}</p>
            {renderStars(space.rating)}
          </div>
        ))}
      </div>

      {/* Controles de paginación */}
      <div className="flex justify-center items-center mt-6 space-x-3">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-700 text-white rounded disabled:bg-gray-400"
        >
          Anterior
        </button>

        {generatePageNumbers().map((page, index, array) => (
          <button
            key={page}
            onClick={() => {
              if (page !== "...") setCurrentPage(page);
            }}
            className={`px-4 py-2 rounded ${page === currentPage ? "bg-blue-500 text-white font-bold" : "bg-gray-300 text-gray-700"}`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-700 text-white rounded disabled:bg-gray-400"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
} 