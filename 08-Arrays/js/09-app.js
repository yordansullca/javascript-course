const carrito = [
    {nombre: "Monitor 27 Pulgadas", precio: 500 },
    {nombre: "Televisión", precio: 100 },
    {nombre: "Tablet", precio: 200},
    {nombre: "Audifonos", precio: 300},
    {nombre: "Teclado", precio: 400},
    {nombre: "Celular", precio: 700}
    
]
// Iterar con arrelos
for (let i = 0; i < carrito.length; i++) {
    let {nombre,precio} = carrito[i];
    console.log(`${carrito[i].nombre} - Precio ${carrito[i].precio}`);
    // console.log(`${nombre} - Precio ${precio}`);
}

console.log();
carrito.forEach(function(producto){
    console.log(`${producto.nombre} - Precio ${producto.precio}`);
});
