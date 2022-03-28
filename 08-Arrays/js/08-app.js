const producto = {
    nombre: "Monitor 32 Pulgadas",
    precio: 400
}

// Destruturing
const {nombre} = producto;

console.log(nombre);

//Destructuring con Arreglos

const numeros = [10, 20, 30, 40, 50];

const [, , tercero] = numeros;
const [a,b,...c] = numeros;
// console.log(primero);
console.log(tercero);
console.log(c);