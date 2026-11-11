// ============================================================
// controllers/productos.controller.js  →  LA LÓGICA
// ------------------------------------------------------------
// Acá está "lo que hace" cada ruta. Cada función recibe:
//   req → lo que manda el cliente (params, body)
//   res → lo que usamos para responder
// ============================================================

// Traemos los datos desde la carpeta data
const productos = require("../data/productos");

// ------------------------------------------------------------
// GET /productos  →  Listar todos
// (Ficha 0: listarProductos)
// ------------------------------------------------------------
function obtenerProductos(req, res) {
  res.json(productos);
}

// ------------------------------------------------------------
// GET /productos/:id  →  Buscar uno por id
// (Ficha 0: buscarProducto)
// ------------------------------------------------------------
function obtenerProductoPorId(req, res) {
  // Lo que viene en la URL siempre es texto ("1"),
  // por eso lo pasamos a número con Number().
  const id = Number(req.params.id);

  const producto = productos.find((p) => p.id === id);

  // Si no existe, avisamos con código 404 (No encontrado)
  if (!producto) {
    return res.status(404).json({ mensaje: "Producto no encontrado" });
  }

  res.json(producto);
}

// ------------------------------------------------------------
// POST /productos  →  Agregar uno nuevo
// (Ficha 0: agregarProducto / Ficha 2: POST)
// ------------------------------------------------------------
function agregarProducto(req, res) {
  // Si el cliente no manda body, req.body llega "undefined".
  // Con "|| {}" usamos un objeto vacío y no se rompe nada.
  const { nombre } = req.body || {};

  // Validación: si no mandan nombre, no agregamos nada.
  // Código 400 = "el pedido está mal hecho".
  if (!nombre) {
    return res.status(400).json({ mensaje: "Falta el nombre del producto" });
  }

  // ¿Por qué no usamos productos.length + 1?
  // Si borramos un producto, el length baja y se pueden repetir ids.
  // Más seguro: buscar el id más alto y sumarle 1.
  const ultimoId = productos.length > 0
    ? Math.max(...productos.map((p) => p.id))
    : 0;

  const nuevoProducto = {
    id: ultimoId + 1,
    nombre: nombre
  };

  productos.push(nuevoProducto);

  // Código 201 = "creado". Devolvemos el producto nuevo.
  res.status(201).json(nuevoProducto);
}

// ------------------------------------------------------------
// PUT /productos/:id  →  Modificar uno
// (Ficha 0: modificarProducto / Ficha 2: PUT)
// ------------------------------------------------------------
function modificarProducto(req, res) {
  const id = Number(req.params.id);
  const { nombre } = req.body || {};

  const producto = productos.find((p) => p.id === id);

  if (!producto) {
    return res.status(404).json({ mensaje: "Producto no encontrado" });
  }

  if (!nombre) {
    return res.status(400).json({ mensaje: "Falta el nombre del producto" });
  }

  // Como "producto" apunta al objeto que está dentro del array,
  // al cambiarlo acá se cambia también en el array.
  producto.nombre = nombre;

  res.json(producto);
}

// ------------------------------------------------------------
// DELETE /productos/:id  →  Eliminar uno
// (Ficha 2: DELETE)
// ------------------------------------------------------------
function eliminarProducto(req, res) {
  const id = Number(req.params.id);

  // findIndex devuelve la POSICIÓN en el array (o -1 si no está)
  const posicion = productos.findIndex((p) => p.id === id);

  if (posicion === -1) {
    return res.status(404).json({ mensaje: "Producto no encontrado" });
  }

  // splice(posicion, 1) saca 1 elemento desde esa posición.
  // Usamos splice (y no filter) para modificar el MISMO array
  // que exporta data/productos.js.
  const eliminado = productos.splice(posicion, 1);

  res.json({ mensaje: "Producto eliminado", producto: eliminado[0] });
}

// Exportamos todas las funciones para usarlas en las rutas
module.exports = {
  obtenerProductos,
  obtenerProductoPorId,
  agregarProducto,
  modificarProducto,
  eliminarProducto
};
