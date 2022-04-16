// Object literal
const cliente = {
    nombre: 'Hiro',
    saldo: 500
}

console.log(cliente);
console.log(typeof cliente);

// Objeto constructor
function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const hiro = new Cliente('Hiro',500);
console.log(hiro);