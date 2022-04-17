// class declaration
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }

}

const hiro = new Cliente('Hiro', 400);
console.log(hiro);


// Class Expresion
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;

    }
    
}

const hiro2 = new Cliente2('Hiro2', 600);
console.log(hiro2);
