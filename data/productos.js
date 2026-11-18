// ============================================================
// data/productos.js  →  LOS DATOS
// ------------------------------------------------------------
// Acá viven los productos. Por ahora es un array en memoria:
// si apagás el servidor, los cambios se pierden y vuelve a
// arrancar con estos productos. (Más adelante esto será una
// base de datos, pero la idea es la misma.)
// ============================================================

const productos = [
  {"id":1,"categoria":"kit","nombre":"Kit Escolar","descripcion":"Kit completo de útiles escolares elaborados con materiales reciclados.","precio":450,"imagen":"/assets/kitEscolar.jpg"},
  {"id":2,"categoria":"kit","nombre":"Kit Empresarial","descripcion":"Conjunto de artículos de papelería ideales para oficinas.","precio":650,"imagen":"/assets/kitOficina.png"},
  {"id":3,"categoria":"individual","nombre":"Cuadernos","descripcion":"Cuadernos ecológicos elaborados con papel reciclado.","precio":80,"imagen":"/assets/Cuaderno.jpg"},
  {"id":4,"categoria":"individual","nombre":"Lapiceras","descripcion":"Lapiceras fabricadas con materiales reutilizados.","precio":40,"imagen":"/assets/lapiceras.jpg"},
  {"id":5,"categoria":"individual","nombre":"Lápices","descripcion":"Lápices de madera reciclada para el uso diario.","precio":10,"imagen":"/assets/lapices.jpg"},
  {"id":6,"categoria":"individual","nombre":"Gomas de borrar","descripcion":"Gomas de borrar ecológicas.","precio":20,"imagen":"/assets/gomasDeBorrar.jpg"},
  {"id":7,"categoria":"individual","nombre":"Colores","descripcion":"Materiales para pintar y crear.","precio":100,"imagen":"/assets/lapicesDeColores.jpg"},
  {"id":8,"categoria":"individual","nombre":"Juegos de reglas","descripcion":"Set de reglas para dibujo y geometría.","precio":60,"imagen":"/assets/Juegodereglas.png"},
  {"id":9,"categoria":"individual","nombre":"Post-its","descripcion":"Notas adhesivas para organizar tus ideas.","precio":70,"imagen":"/assets/Postits.jpg"},
  {"id":10,"categoria":"individual","nombre":"Agenda","descripcion":"Agenda para organizar tus actividades.","precio":130,"imagen":"/assets/agenda.jpg"},
  {"id":11,"categoria":"individual","nombre":"Calendario","descripcion":"Calendario práctico para planificar tu año.","precio":110,"imagen":"/assets/Calendario.jpg"},
  {"id":12,"categoria":"individual","nombre":"Sacapuntas","descripcion":"Sacapuntas práctico para uso diario.","precio":30,"imagen":"/assets/Sacapuntas.png"},
  {"id":13,"categoria":"individual","nombre":"Mochila Ecológica EcoLoop","descripcion":"Mochila resistente y reutilizable, elaborada con materiales reciclados. Ideal para estudiar y llevar tus útiles.","precio":600,"imagen":"/assets/Mochila.jpg"},
  {"id":18,"categoria":"individual","nombre":"Cartuchera Ecológica","descripcion":"Cartuchera práctica y reutilizable, elaborada con materiales reciclados. Ideal para guardar lápices, lapiceras y otros útiles.","precio":200,"imagen":"/assets/Cartuchera.jpg"},
  {"id":101,"categoria":"kit-estudio","nombre":"Kit Esencial","descripcion":"Cuaderno reciclado + lápices + regla + borrador + cartuchera.","precio":400,"imagen":"/assets/KitEsencial.jpg","etiqueta":"Kit Esencial","incluye":["Cuaderno reciclado","Lápices","Regla","Borrador","Cartuchera"]},
  {"id":102,"categoria":"kit-estudio","nombre":"Kit Completo","descripcion":"Todo lo que necesitás: cuadernos, lápices, carpeta, regla, lapicera y más.","precio":450,"imagen":"/assets/kitEscolar.jpg","etiqueta":"Kit Completo","incluye":["2 Cuadernos","2 Lapices","Bolsa de tela ($100)","Juego de reaglas","2 Lapicera","1 Borrador"]},
  {"id":103,"categoria":"kit-estudio","nombre":"Kit Creativo","descripcion":"Para dibujar, crear y soñar.","precio":590,"imagen":"/assets/kit.jpg","etiqueta":"Kit Creativo","incluye":["Cuaderno de dibujo ($120)","2 Cuadernos","Juego de reglas","Lapices de colores","Lápices de grafito x3","Borrador","Sacapuntas"]},
  {"id":104,"categoria":"kit-empresarial","nombre":"Kit Office","descripcion":"Ideal para la oficina o para regalar.","precio":500,"imagen":"/assets/kitOficina.png","etiqueta":"Kit Office","incluye":["Agenda personalizada de la empresa","3 Lapiceras","Portalápices ($50)","Bolsa de tela ($100)"]},
  {"id":105,"categoria":"kit-estudio","nombre":"Kit Universitario Eco","descripcion":"Todo lo que necesitás para la facultad: organización, creatividad y materiales sustentables para acompañarte durante tus estudios.","precio":1500,"imagen":"/assets/kitUniversitario.jpg","etiqueta":"Kit Universitario","incluye":["Mochila ecológica EcoLoop","Cartuchera reutilizable","Botella reutilizable ($200)","Portalápices de cartón reciclado","Lápices de colores","5 Lápices de grafito","2 Gomas de borrar","Sacapuntas","Regla de madera","Agenda"]},
  {"id":201,"categoria":"kit-empresarial","nombre":"Kit Corporativo","descripcion":"Detalles sostenibles para empresas comprometidas con el planeta.","precio":1250,"imagen":"/assets/kitEmpresarialTote.png","incluye":["Cuaderno personalizable","Lapicera ecológica","Portalápices","Bolsa de tela"]}
];

module.exports = productos;
