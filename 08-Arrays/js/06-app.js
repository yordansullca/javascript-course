// Arreglos funciones declarativas
// No modifica el archivo original

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

const producto3 = {
    nombre: "Teclado",
    precio: 50
}

let resultado;
// Al final
resultado = [...carrito, producto]
resultado = [...resultado, producto2]
resultado = [producto3, ...resultado]

// Al inicio


console.table(resultado);