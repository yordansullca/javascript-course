"use strict";

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}
// Congela el objeto producto, pero si permite hacer modificaciones en las propiedades existentes.
Object.seal(producto);

producto.disponible = false;
// producto.imagen = "imagen.jpg";

console.log(producto);


console.log(Object.isSealed(producto));