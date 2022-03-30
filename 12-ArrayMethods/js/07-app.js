const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Setiembre'];
const meses3 = ['Octubre', 'Noviembre', 'Diciembre'];

const resultado = meses.concat(meses2, meses3);

console.log(resultado);
// spread operator

const resultado2 = [...meses, ...meses2, ...meses3];
console.log(resultado2);