localStorage.removeItem('name');

//Actualizar un registro
const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray);
mesesArray.push('Nuevo Mes');
const mesesString = JSON.stringify(mesesArray);
localStorage.setItem('meses', mesesString);