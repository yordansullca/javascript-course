const dinero = 2000;
const totalPagar = 3800;
const tarjeta = true;
const cheque = false;

if (dinero >= totalPagar) {
    console.log('Si podemos pagar');
} else if(cheque){
    console.log('Si tengo un cheque');
}else if(tarjeta){
    console.log('Si puedo pagar por que tengo tarjeta');
}else{
    console.log('Fondos Insuficientes');
}