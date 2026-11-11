// ============================================================
// routes/productos.routes.js  →  LAS RUTAS
// ------------------------------------------------------------
// Este archivo solo dice: "si llega tal pedido, llamá a tal
// función del controller". No tiene lógica adentro.
//
// IMPORTANTE: en index.js estas rutas se montan en "/productos",
// así que acá "/" significa "/productos" y "/:id" significa
// "/productos/:id".
// ============================================================

const express = require("express");
const router = express.Router();

const {
  obtenerProductos,
  obtenerProductoPorId,
  agregarProducto,
  modificarProducto,
  eliminarProducto
} = require("../controllers/productos.controller");
//        MÉTODO   RUTA      FUNCIÓN DEL CONTROLLER
router.get(    "/",     obtenerProductos);      // Listar todos
router.get(    "/:id",  obtenerProductoPorId);  // Buscar uno
router.post(   "/",     agregarProducto);       // Agregar
router.put(    "/:id",  modificarProducto);     // Modificar
router.delete( "/:id",  eliminarProducto);      // Eliminar

module.exports = router;
