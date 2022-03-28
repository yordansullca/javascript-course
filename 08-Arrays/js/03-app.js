const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

console.table(meses);
console.table(meses[0]);
console.table(meses[1]);
console.table(meses[2]);


// Cuanto mide el arreglo
console.log(meses.length);

for (const key in meses) {
    console.log(key);
}
for (let index = 0; index < meses.length; index++) {
    console.log(meses[index]); 
    
}
