import { useEffect, useState } from "react";

function ListaSolicitudes() {
  const [solicitudes, setSolicitudes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/solicitudes")
      .then((res) => res.json())
      .then((data) => setSolicitudes(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  return (
    <div className="mt-8 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Solicitudes Recibidas</h2>
      {solicitudes.length === 0 ? (
        <p className="text-gray-500">No hay solicitudes aún.</p>
      ) : (
        <ul className="space-y-2">
          {solicitudes.map((solicitud) => (
            <li
              key={solicitud.id}
              className="p-3 border border-gray-300 rounded-lg bg-gray-50"
            >
              <span className="font-semibold">{solicitud.tipo}</span> -{" "}
              {solicitud.ciudad} -{" "}
              {new Date(solicitud.fecha).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListaSolicitudes;
