// forEach
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JavaScript'];

pendientes.forEach((pendiente,indice) => console.log(`${indice}: ${pendiente}`));


const carrito = [
    {nombre: "Monitor 27 Pulgadas", precio: 500 },
    {nombre: "Televisión", precio: 100 },
    {nombre: "Tablet", precio: 200},
    {nombre: "Audifonos", precio: 300},
    {nombre: "Teclado", precio: 400},
    {nombre: "Celular", precio: 700}
    
]

carrito.forEach((producto,index) => console.log(`${index}: ${producto.nombre} - ${producto.precio}`));


//map 
const arreglo = carrito.map((producto,index) => `${index}: ${producto.nombre} - ${producto.precio}`);

console.table(arreglo);