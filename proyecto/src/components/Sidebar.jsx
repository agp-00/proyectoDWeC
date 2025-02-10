import { useState, useEffect } from "react";

export default function Sidebar({ onApplyFilters }) {
  const [islas, setIslas] = useState([]);
  const [modalidades, setModalidades] = useState([]);
  const [servicios, setServicios] = useState([]);
  const [tipos, setTipos] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    isla: "",
    modalidad: "",
    servicio: "",
    tipo: "",
  });

  const token = localStorage.getItem("token"); // O usa sessionStorage si lo guardas allí

  // Manejar los cambios de filtro seleccionados
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Aplicar los filtros cuando se hace clic en "Aplicar filtros"
  const handleApplyFilters = () => {
    onApplyFilters(selectedFilters); // Pasar los filtros seleccionados al componente principal
  };

  return (
    <div className="w-1/4 h-max p-4 bg-gray-800 text-white shadow-lg">
      <h3 className="font-bold text-xl mb-4">Filtros</h3>

      {/* Filtro por Isla */}
      <div className="mb-4">
        <label htmlFor="isla" className="block font-bold">Isla</label>
        <select
          id="isla"
          name="isla"
          value={selectedFilters.isla}
          onChange={handleFilterChange}
          className="w-full p-2 border rounded text-black"
        >
          <option value="">Selecciona una isla</option>
          {islas.map((isla, index) => (
            <option key={index} value={isla}>{isla}</option>
          ))}
        </select>
      </div>

      {/* Filtro por Modalidad */}
      <div className="mb-4">
        <label htmlFor="modalidad" className="block font-bold">Modalidad</label>
        <select
          id="modalidad"
          name="modalidad"
          value={selectedFilters.modalidad}
          onChange={handleFilterChange}
          className="w-full p-2 border rounded text-black"
        >
          <option value="">Selecciona una modalidad</option>
          {modalidades.map((modalidad, index) => (
            <option key={index} value={modalidad}>{modalidad}</option>
          ))}
        </select>
      </div>

      {/* Filtro por Servicio */}
      <div className="mb-4">
        <label htmlFor="servicio" className="block font-bold">Servicio</label>
        <select
          id="servicio"
          name="servicio"
          value={selectedFilters.servicio}
          onChange={handleFilterChange}
          className="w-full p-2 border rounded text-black"
        >
          <option value="">Selecciona un servicio</option>
          {servicios.map((servicio, index) => (
            <option key={index} value={servicio}>{servicio}</option>
          ))}
        </select>
      </div>

      {/* Filtro por Tipo */}
      <div className="mb-4">
        <label htmlFor="tipo" className="block font-bold">Tipo</label>
        <select
          id="tipo"
          name="tipo"
          value={selectedFilters.tipo}
          onChange={handleFilterChange}
          className="w-full p-2 border rounded text-black"
        >
          <option value="">Selecciona un tipo</option>
          {tipos.map((tipo, index) => (
            <option key={index} value={tipo}>{tipo}</option>
          ))}
        </select>
      </div>

      {/* Botón para aplicar los filtros */}
      <button
        onClick={handleApplyFilters}
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Aplicar filtros
      </button>
    </div>
  );
}
