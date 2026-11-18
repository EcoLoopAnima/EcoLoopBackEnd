// controllers/productos.controller.js  →  LA LÓGICA
// Cada función recibe req (lo que manda el cliente) y res (lo que respondemos).

const productos = require("../data/productos");

const CATEGORIAS = ["kit-estudio", "kit-empresarial", "individual"];

// GET /productos
function obtenerProductos(req, res) {
  res.json(productos);
}

// GET /productos/:id
function obtenerProductoPorId(req, res) {
  const id = Number(req.params.id); // en la URL el id llega como texto
  const producto = productos.find((p) => p.id === id);

  if (!producto) {
    return res.status(404).json({ mensaje: "Producto no encontrado" });
  }

  res.json(producto);
}

// POST /productos
function agregarProducto(req, res) {
  const { nombre, precio, categoria, descripcion, imagen, incluye } = req.body || {};

  // Validaciones: 400 = pedido mal hecho
  if (!nombre) {
    return res.status(400).json({ mensaje: "Falta el nombre del producto" });
  }
  if (typeof precio !== "number" || precio < 0) {
    return res.status(400).json({ mensaje: "El precio tiene que ser un número mayor o igual a 0" });
  }
  if (categoria !== undefined && !CATEGORIAS.includes(categoria)) {
    return res.status(400).json({ mensaje: "Categoría inválida. Usá: " + CATEGORIAS.join(", ") });
  }

  // id más alto + 1 (así no se repiten si se borra alguno)
  const ultimoId = productos.length > 0
    ? Math.max(...productos.map((p) => p.id))
    : 0;

  const nuevoProducto = {
    id: ultimoId + 1,
    nombre,
    precio,
    categoria: categoria || "individual",
    descripcion: descripcion || "",
    imagen: imagen || "",
  };
  if (incluye !== undefined) nuevoProducto.incluye = incluye;

  productos.push(nuevoProducto);

  res.status(201).json(nuevoProducto);
}

// PUT /productos/:id  → cambia solo los datos que lleguen
function modificarProducto(req, res) {
  const id = Number(req.params.id);
  const producto = productos.find((p) => p.id === id);

  if (!producto) {
    return res.status(404).json({ mensaje: "Producto no encontrado" });
  }

  const { nombre, precio, categoria, descripcion, imagen, incluye } = req.body || {};

  const mandaAlgo = [nombre, precio, categoria, descripcion, imagen, incluye]
    .some((dato) => dato !== undefined);
  if (!mandaAlgo) {
    return res.status(400).json({ mensaje: "No mandaste ningún dato para modificar" });
  }

  if (nombre !== undefined && !nombre) {
    return res.status(400).json({ mensaje: "El nombre no puede estar vacío" });
  }
  if (precio !== undefined && (typeof precio !== "number" || precio < 0)) {
    return res.status(400).json({ mensaje: "El precio tiene que ser un número mayor o igual a 0" });
  }
  if (categoria !== undefined && !CATEGORIAS.includes(categoria)) {
    return res.status(400).json({ mensaje: "Categoría inválida. Usá: " + CATEGORIAS.join(", ") });
  }

  // producto apunta al objeto dentro del array: al cambiarlo, queda guardado
  if (nombre !== undefined) producto.nombre = nombre;
  if (precio !== undefined) producto.precio = precio;
  if (categoria !== undefined) producto.categoria = categoria;
  if (descripcion !== undefined) producto.descripcion = descripcion;
  if (imagen !== undefined) producto.imagen = imagen;
  if (incluye !== undefined) producto.incluye = incluye;

  res.json(producto);
}

// DELETE /productos/:id
function eliminarProducto(req, res) {
  const id = Number(req.params.id);
  const posicion = productos.findIndex((p) => p.id === id);

  if (posicion === -1) {
    return res.status(404).json({ mensaje: "Producto no encontrado" });
  }

  // splice modifica el MISMO array que exporta data/productos.js
  const eliminado = productos.splice(posicion, 1);

  res.json({ mensaje: "Producto eliminado", producto: eliminado[0] });
}

module.exports = {
  obtenerProductos,
  obtenerProductoPorId,
  agregarProducto,
  modificarProducto,
  eliminarProducto,
};