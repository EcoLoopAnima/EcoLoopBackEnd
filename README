# Backend de productos – Frontend Práctico (FINEST, ÁNIMA)

API hecha con Node.js + Express que junta todo lo de las Fichas 0 a 3.

## Cómo arrancarlo

```bash
npm install      # instala express (solo la primera vez)
node index.js    # o: npm start
```

Tiene que aparecer: `Servidor corriendo en http://localhost:3000`

## Estructura

```
backend/
├── index.js                          → arranca el servidor y conecta todo
├── routes/productos.routes.js        → qué función se ejecuta en cada ruta
├── controllers/productos.controller.js → la lógica (listar, buscar, agregar...)
└── data/productos.js                 → el array de productos
```

## Endpoints

| Método | URL | Qué hace | Body |
|---|---|---|---|
| GET | `/` | Mensaje de bienvenida | – |
| GET | `/productos` | Lista todos | – |
| GET | `/productos/:id` | Trae uno | – |
| POST | `/productos` | Agrega uno | `{ "nombre": "Gorra" }` |
| PUT | `/productos/:id` | Modifica uno | `{ "nombre": "Remera negra" }` |
| DELETE | `/productos/:id` | Elimina uno | – |

## Códigos de respuesta

- `200` todo bien · `201` creado · `400` falta un dato · `404` no existe

> Los datos están en memoria: al reiniciar el servidor vuelven a los originales.
