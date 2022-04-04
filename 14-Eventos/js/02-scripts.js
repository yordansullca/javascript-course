const nav = document.querySelector('.navegacion');

// registrar un evento
nav.addEventListener('mouseout', () => {
    console.log('saliendo de la navagación');
    nav.style.backgroundColor = 'transparent';
})

nav.addEventListener('dblclick', () => {
    console.log('doble click');

    nav.style.backgroundColor = 'white';
})

