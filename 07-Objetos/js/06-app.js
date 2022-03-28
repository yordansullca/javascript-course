const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: '1kg',
            medida: '1m'
        },
        fabricacion: {
            pais: 'China'
        }
    }
}

// Destructuring
const {nombre, informacion: {fabricacion}, informacion: {medidas, fabricacion: {pais}}} = producto;

console.log(nombre);
console.log(fabricacion);
console.log(pais);
console.log(medidas);
