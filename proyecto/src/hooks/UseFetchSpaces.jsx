import { useState, useEffect } from "react";

const useFetchSpaces = () => {
  const [spaces, setSpaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSpaces = async () => {
      setLoading(true);
      setError(null);

      try {
        const token = localStorage.getItem("auth_token"); // ✅ Obtiene el token de autenticación
        if (!token) {
          throw new Error(" Necesitas hacer login para ver este contenido.");
        }

        const response = await fetch("http://baleart.test/api/space", {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ Agrega el token al header
            "Content-Type": "application/json",
          },
        });

        if (response.status === 401) {
          throw new Error("No autorizado. Verifica tu sesión.");
        }

        if (!response.ok) {
          throw new Error("No se pudieron obtener los espacios.");
        }

        const data = await response.json();
        console.log("Datos recibidos de la API:", data); // 🔍 Debug

        // ✅ Si la API devuelve `{ data: [...] }`, ajustamos la asignación
        setSpaces(Array.isArray(data.data) ? data.data : []);
      } catch (error) {
        console.error("Error al obtener espacios:", error);
        setError(error.message);
        setSpaces([]); // ✅ Asegura que siempre se retorne un array
      } finally {
        setLoading(false);
      }
    };

    fetchSpaces();
  }, []);

  return { spaces, loading, error };
};

export default useFetchSpaces;
