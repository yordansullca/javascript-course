const autenticado = false;
const puedePagar = true;
console.log(autenticado || puedePagar ? 'Si esta autenticado': 'No esta autenticado');
console.log(autenticado ? puedePagar ? 'Si esta autenticado y puede pagar': 'Si esta autenticado, no puedes pagar' :'No esta autenticado');

/* const efectivo = 300;
const credito = 400;
const disponible = efectivo + credito;
const totalPagar = 600;

if (efectivo > totalPagar || credito > totalPagar ||disponible > totalPagar) {
    if (efectivo > totalPagar) {
        console.log('Si pagaste con efectivo');
    } else {
        
    }
} else {
    console.log('Fondos insuficientes');
} */