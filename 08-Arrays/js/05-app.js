// Forma imperativa para añadir elementos
// Trabaja sobre el elemento original
const carrito = [];

//Definir un producto
const producto = {
    nombre: "Monitor 32 Pulgadas",
    precio: 400
}
const producto2 = {
    nombre: "Celular",
    precio: 800
}
// .push
carrito.push(producto);
carrito.push(producto2);


const producto3 = {
    nombre: "Teclado",
    precio: 50
}

//.unshift
carrito.unshift(producto3);

console.table(carrito[0]);