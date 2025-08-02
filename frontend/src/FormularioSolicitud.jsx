import { useState } from "react";

function FormularioSolicitud() {
  const [tipo, setTipo] = useState("");
  const [ciudad, setCiudad] = useState("");

  const manejarEnvio = async (e) => {
    e.preventDefault();

    const nuevaSolicitud = { tipo, ciudad };

    try {
      const res = await fetch("http://localhost:3000/api/solicitudes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevaSolicitud),
      });

      if (res.ok) {
        const data = await res.json();

        alert("Solicitud enviada correctamente ✅");

        setTipo("");
        setCiudad("");

        // 🔹 ACTUALIZAR LA LISTA MANUALMENTE
        const resLista = await fetch("http://localhost:3000/api/solicitudes");
        const lista = await resLista.json();
        console.log("Nueva lista:", lista);
      } else {
        alert("Error al enviar la solicitud ❌");
      }
    } catch (err) {
      console.error(err);
      alert("Error de conexión ❌");
    }
  };

  return (
    <form onSubmit={manejarEnvio}>
      <input
        type="text"
        placeholder="Tipo de solicitud"
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
      />
      <input
        type="text"
        placeholder="Ciudad"
        value={ciudad}
        onChange={(e) => setCiudad(e.target.value)}
      />
      <button type="submit">Enviar Solicitud</button>
    </form>
  );
}

export default FormularioSolicitud;
