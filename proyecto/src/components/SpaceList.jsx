import { useState } from "react";
import useFetchSpaces from "../hooks/UseFetchSpaces";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

export default function SpaceList({ spaces: propSpaces }) {
  const { spaces: fetchedSpaces, loading, error } = useFetchSpaces();
  const spaces = propSpaces?.length ? propSpaces : fetchedSpaces; // ✅ Evita conflicto de nombres

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(spaces.length / itemsPerPage);

  if (loading) return <p>Cargando espacios...</p>;
  if (error) return <p>Error: {error}</p>;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentSpaces = spaces.slice(startIndex, endIndex);

  const nextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  const generatePageNumbers = () => {
    const pages = [];
    pages.push(1); // Siempre incluir la primera página

    const minPage = Math.max(2, currentPage - 2);
    const maxPage = Math.min(totalPages - 1, currentPage + 2);

    if (minPage > 2) pages.push("...");
    for (let i = minPage; i <= maxPage; i++) {
      pages.push(i);
    }
    if (maxPage < totalPages - 1) pages.push("...");
    if (totalPages > 1 && !pages.includes(totalPages)) pages.push(totalPages);

    return pages;
  };

  const renderStars = (rating) => {
    if (isNaN(rating) || rating < 0 || rating > 5) rating = 0;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.3 && rating - fullStars <= 0.7;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <AiFillStar key={`full-${i}`} className="text-yellow-400 text-xl" />
        ))}
        {hasHalfStar && (
          <div className="relative w-5 h-5">
            <AiFillStar className="text-yellow-400 absolute left-0 top-0 w-full h-full" />
            <div className="absolute left-1/2 top-0 w-1/2 h-full bg-white"></div>
          </div>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <AiOutlineStar key={`empty-${i}`} className="text-gray-300 text-xl" />
        ))}
      </div>
    );
  };

  return (
    <div className="h-auto w-full p-4">
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

        {generatePageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => {
              if (page !== "...") setCurrentPage(page);
            }}
            className={`px-4 py-2 rounded ${
              page === currentPage ? "bg-blue-500 text-white font-bold" : "bg-gray-300 text-gray-700"
            }`}
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
