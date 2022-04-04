const navegacion = document.querySelector('.navegacion');
console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);
// console.log(navegacion.childNodes); // Los espacios en blancos son considerador elementos
// console.log(navegacion.children[0]); // Espacios blancos no considerados elementos.


// console.log(navegacion.children[0].nodeName);
// console.log(navegacion.children[0].nodeType);

// const card = document.querySelector('.card');
// card.children[1].children[1].textContent = 'Nuevo heading desde traversing the don'
// console.log(card.children[1].children[1].textContent);
// card.children[0].src = 'img/hacer2.jpg';
// console.log(card.children[0].src);

//Traversing de hijo a padre

// console.log(card.parentNode);
// console.log(card.parentElement);

// Traversing de hermanos
// console.log(card.nextElementSibling);

// const ultimoCard = document.querySelector('.card:nth-child(4');

// console.log(ultimoCard.previousElementSibling);
