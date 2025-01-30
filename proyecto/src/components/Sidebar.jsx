import { useState } from 'react';

export default function Sidebar({ onApplyFilters }) {
  const [selectedFilters, setSelectedFilters] = useState({
    modalities: [],
    municipalities: [],
    services: [],
  });

  const handleFilterChange = (e, filterType) => {
    const value = e.target.value;
    setSelectedFilters((prev) => {
      const newFilters = { ...prev };
      if (newFilters[filterType].includes(value)) {
        newFilters[filterType] = newFilters[filterType].filter(
          (item) => item !== value
        );
      } else {
        newFilters[filterType].push(value);
      }
      return newFilters;
    });
  };

  const handleApplyFilters = () => {
    onApplyFilters(selectedFilters);
  };

  return (
    <div className="w-64 p-4 bg-gray-800 text-white mt-16 sticky top-0 h-screen"> {/* Cambié h-full a h-screen */}
      <h2 className="text-lg font-bold mb-4">Filtros</h2>

      <div className="mb-4">
        <h3 className="text-md font-semibold">Modalidades</h3>
        <div>
          <label>
            <input
              type="checkbox"
              value="Artístico"
              onChange={(e) => handleFilterChange(e, 'modalities')}
              className="mr-2"
            />
            Artístico
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="Cultural"
              onChange={(e) => handleFilterChange(e, 'modalities')}
              className="mr-2"
            />
            Cultural
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="Diseño"
              onChange={(e) => handleFilterChange(e, 'modalities')}
              className="mr-2"
            />
            Diseño
          </label>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-md font-semibold">Municipios</h3>
        <div>
          <label>
            <input
              type="checkbox"
              value="Barcelona"
              onChange={(e) => handleFilterChange(e, 'municipalities')}
              className="mr-2"
            />
            Barcelona
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="Madrid"
              onChange={(e) => handleFilterChange(e, 'municipalities')}
              className="mr-2"
            />
            Madrid
          </label>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="text-md font-semibold">Servicios</h3>
        <div>
          <label>
            <input
              type="checkbox"
              value="Wi-Fi"
              onChange={(e) => handleFilterChange(e, 'services')}
              className="mr-2"
            />
            Wi-Fi
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              value="Aire acondicionado"
              onChange={(e) => handleFilterChange(e, 'services')}
              className="mr-2"
            />
            Aire acondicionado
          </label>
        </div>
      </div>

      <button
        onClick={handleApplyFilters}
        className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 mt-4 w-full"
      >
        Aplicar filtros
      </button>
    </div>
  );
}
