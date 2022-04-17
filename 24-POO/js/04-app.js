// class declaration
class Cliente {
    #nombre; // propiedad privada
    #saldo;

    setNombre(nombre){
        this.#nombre = nombre;
    }
    getNombre(){
        return this.#nombre;
    }
}


const hiro = new Cliente();
hiro.setNombre('Hiro');
// console.log(hiro);
console.log(hiro.getNombre());

