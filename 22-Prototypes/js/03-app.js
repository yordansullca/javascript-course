function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

Cliente.prototype.tipoCliente = function () {
    let tipo;
    if (this.saldo > 10000) {
        tipo = 'Gold';
    } else if (this.saldo > 5000) {
        tipo = 'Platinium';
    } else {
        tipo = 'Normal';
    }

    return tipo;
}


Cliente.prototype.nombreClienteSaldo = function () {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}}, Tipo Cliente: ${this.tipoCliente()}`
}

Cliente.prototype.retiraSaldo = function (retira) {
    this.saldo -= retira;
}
/* // Este busca en objeto actual. -> Es mi nuevo proto Hiro
Cliente.prototype.tipoCliente = function(){
    console.log('Es mi nuevo proto ' + this.nombre);
}
// Este busca en la ventana global -> Es mi nuevo proto undefinedA
Cliente.prototype.tipoCliente2 = ()=>{
    console.log('Es mi nuevo proto ' + this.nombre);
} */

// Instancia 
const hiro = new Cliente('Hiro', 5000);
console.log(hiro.nombreClienteSaldo());
hiro.retiraSaldo(1000);
console.log(hiro.nombreClienteSaldo());
hiro.tipoCliente();


// Objeto constructor
function Empresa(nombre, saldo, categoria) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CCH = new Empresa('Código con Hiro', 400, 'Aprendiendo JavaScript');
console.log(CCH);