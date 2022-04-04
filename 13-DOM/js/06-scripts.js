const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado);

// console.log(encabezado.innerText);
// console.log(encabezado.textContent);
// console.log(encabezado.innerHTML);

const nuevoHeading = 'nuevo Heading';
document.querySelector('.contenido-hero h1').textContent = nuevoHeading;


const imagen = document.querySelector('.card img');
console.log(imagen);
imagen.src = 'img/hacer2.jpg';

