// Operador  &&
const usuario = false;
const puedePagar = false;


if (usuario  && puedePagar) {
    console.log('Si eres usuario');
} else if(!usuario && !puedePagar) {
    console.log('No no puedes comprar');
} else if(!usuario) {
    console.log('Inicia sesión o saca una cuenta');
} else if(!puedePagar){
    console.log('Fondos insuficienes');
} 