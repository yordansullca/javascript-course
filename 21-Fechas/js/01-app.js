const diaHoy = new Date('2-5-2000');

let valor;
valor = diaHoy;
valor = diaHoy.getFullYear();
valor = diaHoy.getMonth();
valor = diaHoy.getMinutes();
valor = diaHoy.getHours();
valor = diaHoy.getTime();
diaHoy.setFullYear(2015);
valor = Date.now(); // Devuelve el número de milisegundos transcurridos desde las 00:00:00 UTC del 1 de enero de 1970.

console.log(valor);