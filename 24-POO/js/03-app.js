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

// Herencia

class Empresa extends Cliente{
    constructor(nombre, saldo, telefono, categoria){
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    
    static bienvenida(){
        return `Binvenida al cajero de la empresa`;
    }
}

const hiro = new Cliente('Hiro', 400);
console.log(hiro);
console.log(hiro.mostrarInformacion());
console.log(Cliente.bienvenida());

const empresa = new Empresa('Hiro Empresa', 400, 979541512, 'Aprendizaje' );
console.log(empresa);
console.log(empresa.mostrarInformacion());
console.log(Empresa.bienvenida());