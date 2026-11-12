const express = require("express");
const cors = require("cors");
const app = express();

const productosRoutes = require("./routes/productos.routes");

app.use(cors());          // permite que el front (otro puerto) le haga pedidos
app.use(express.json());  // tiene que ir ANTES de las rutas

app.get("/", (req, res) => {
  res.send("Bienvenido al backend de EcoLoop");
});

app.use("/productos", productosRoutes);

// Cualquier ruta que no exista responde 404
app.use((req, res) => {
  res.status(404).json({ mensaje: "Ruta no encontrada" });
});

const PUERTO = 3000;

app.listen(PUERTO, () => {
  console.log(`Servidor corriendo en http://localhost:${PUERTO}`);
});