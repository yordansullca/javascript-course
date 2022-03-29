let i = 1;// Inicializar

/* do {
    console.log(`Número ${i}`);
    i++; // Incremento
} while (i < 10); // Condicion */

do {
    
    if (i % 15 === 0) {
        console.log(`${i}: FIZZBUSS`);
    } else if (i % 3 === 0) {
        console.log(`${i}: fizz`);
    } else if (i % 5 === 0) {
        console.log(`${i}: buss`);
    } 
    i++;
} while (i < 100);