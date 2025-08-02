const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

let solicitudes = [];

// 📌 Ruta GET para obtener solicitudes
app.get("/api/solicitudes", (req, res) => {
  res.json(solicitudes);
});

// 📌 Ruta POST para agregar solicitudes
app.post("/api/solicitudes", (req, res) => {
  const nueva = { id: Date.now(), ...req.body, fecha: new Date() };
  solicitudes.push(nueva);
  res.json(nueva);
});

app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
);
