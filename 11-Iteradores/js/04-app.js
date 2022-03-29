let i = 1; // Inicializar el while

/* while (i < 10) { // Condición
    console.log(`Número ${i}`);

    i++;
} */

while (i < 100){
    
    if (i % 15 === 0) {
        console.log(`${i}: FIZZBUSS`);
    } else if (i % 3 === 0) {
        console.log(`${i}: fizz`);
    } else if (i % 5 === 0) {
        console.log(`${i}: buss`);
    } 

    i++;
}
