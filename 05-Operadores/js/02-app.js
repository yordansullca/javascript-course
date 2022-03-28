const numero1 = 20.1;
const numero2 = "20.1";
const numero3 = 30;

// Revisar si 2 números son iguales

console.log(numero1 == numero3);
console.log(numero1 == numero2);
console.log(20 == "20");

// Comparador estricto
console.log(numero1 === numero2);
console.log(numero1 === parseFloat(numero2));
console.log(typeof numero1);
console.log(typeof numero2);

// Diferente
console.log('Diferente');
const password1 = "admin";
const password2 = "Admin"

console.log(password1 != password2);
console.log(numero1 != numero2);


// Diferenciador estricto
console.log(password1 !== password2);
console.log(numero1 !== parseFloat(numero2));