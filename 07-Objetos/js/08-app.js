"use strict";

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}
// Congela el objeto producto.
Object.freeze(producto);

// producto.disponible = false;
// producto.imagen = "imagen.jpg";

console.log(producto);


console.log(Object.isFrozen(producto));



