import { useState, useEffect } from "react";

const useFetchSpaces = () => {
  const [spaces, setSpaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSpaces = async () => {
      try {
        const response = await fetch("http://baleart.test/api/space");
        if (!response.ok) {
          throw new Error("No se pudieron obtener los espacios.");
        }
        const data = await response.json();
        setSpaces(data); // Guarda los espacios recibidos
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSpaces();
  }, []);

  return { spaces, loading, error };
};

export default useFetchSpaces;
