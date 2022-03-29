const producto = "Monitor 20 pulgadas";


//.repetear te va permitir una cadena de texto....
const texto = 'en Promoción'.repeat(3);
console.log(texto);
console.log(`${producto} ${texto} !!!`);

//Split, dividir un string

const actividad = "Estoy aprendiendo JavaScript Moderno";
console.log(actividad.split(" "));

const hobbies = 'Leer, caminar, escuchar música, escribir, aprender a programar'
console.log(hobbies.split(','));

const tweet = "Aprendiendo JavaScript #JSModernoConHiro";
console.log(tweet.split('#'));