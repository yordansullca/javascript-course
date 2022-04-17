// class declaration
class Cliente {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;
    }


    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`
    }

    static bienvenida(){
        return `Bienvenida al cajero`;
    }
}

const hiro = new Cliente('Hiro', 400);
console.log(hiro);
console.log(hiro.mostrarInformacion());
// Class Expresion
const Cliente2 = class {
    constructor(nombre, saldo) {
        this.nombre = nombre;
        this.saldo = saldo;

    }
    mostrarInformacion() {
        return `Cliente: ${this.nombre}, tu saldo es de ${this.saldo}`
    }


}

const hiro2 = new Cliente2('Hiro2', 600);
console.log(hiro2);
console.log(hiro2.mostrarInformacion());