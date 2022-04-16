const diaHoy = new Date();

moment.locale('es');
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().format('LLLL', diaHoy));

console.log(moment().add(30,'days').calendar());
console.log(moment().calendar());
console.log(moment().subtract(30,'days').calendar());