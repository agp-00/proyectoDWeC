import { useState, useEffect } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Carousel() {
  const [topRatedSpaces, setTopRatedSpaces] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Realizar fetch para obtener los espacios desde el backend
  useEffect(() => {
    const fetchTopRatedSpaces = async () => {
      try {
        const response = await fetch("http://baleart.test/api/space", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();

        // Calcular el rating como totalScore / countScore para cada espacio
        const spacesWithRating = data.map(space => {
          const rating = space.totalScore / space.countScore; // Calcular el rating
          return { ...space, rating };
        });

        // Ordenar los espacios por calificación (rating) en orden descendente
        const sortedSpaces = spacesWithRating.sort((a, b) => b.rating - a.rating);

        // Limitar a los 3 mejores espacios
        setTopRatedSpaces(sortedSpaces.slice(0, 3));
      } catch (error) {
        console.error("Error al obtener los espacios:", error);
      }
    };

    fetchTopRatedSpaces();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % topRatedSpaces.length);
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(interval);
  }, [topRatedSpaces]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + topRatedSpaces.length) % topRatedSpaces.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % topRatedSpaces.length);
  };

  const renderStars = (rating) => {
    if (isNaN(rating) || rating < 0 || rating > 5) {
      rating = 0;
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
    <div className="relative w-full h-72 bg-gray-200 flex justify-center items-center mb-8">
      {topRatedSpaces.length > 0 ? (
        <div className="relative w-96 h-64 bg-white rounded-md shadow-lg overflow-hidden flex flex-col items-center justify-center transition-all duration-500 ease-in-out">
          <img
            src={topRatedSpaces[currentIndex]?.image || "https://via.placeholder.com/600"}
            alt={topRatedSpaces[currentIndex]?.nom}
            className="w-full h-40 object-cover"
          />
          <h3 className="text-lg font-semibold mt-2">{topRatedSpaces[currentIndex]?.nom}</h3>
          <p className="text-sm">{topRatedSpaces[currentIndex]?.municipi}</p>
          <div className="flex items-center mt-2">{renderStars(topRatedSpaces[currentIndex]?.rating)}</div>
        </div>
      ) : (
        <p>Cargando espacios destacados...</p>
      )}

      {/* Botón Anterior */}
      <button onClick={handlePrev} className="absolute left-4 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600">
        <FaChevronLeft size={20} />
      </button>

      {/* Botón Siguiente */}
      <button onClick={handleNext} className="absolute right-4 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600">
        <FaChevronRight size={20} />
      </button>
    </div>
  );
}
