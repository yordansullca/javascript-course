const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

// const nombre = producto.nombre;
// console.log(producto.nombre);

// Destructuring
const {nombre, precio, disponible} = producto;
console.log(typeof nombre);
console.log(typeof precio);
console.log(typeof disponible);