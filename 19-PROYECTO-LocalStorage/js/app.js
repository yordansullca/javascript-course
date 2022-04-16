// Variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

// Event Listeners
eventListeners();

function eventListeners() {
    // Cuando el usuario agrega un nuevo twet
    document.addEventListener('submit', agregarTweet);
    // Cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', iniciarApp());
}


// Funciones
function iniciarApp() {
    /* const tweetsString = localStorage.getItem('tweets');
    if (tweetsString) {
        const tweetsArray = JSON.parse(tweetsString);
        tweets = [...tweetsArray];
        crearHTML();
    } */
    //  Si el arreglo es null, entonces se le asigna el []
    tweets = JSON.parse(localStorage.getItem('tweets')) || [];
    crearHTML();
}

function agregarTweet(e) {
    e.preventDefault();

    // Textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;

    // Validación
    if (tweet === '') {
        mostrarError('Un mensaje no puede ir vació');

        return; // Evita que se ejecuten más lineas de código.
    }

    const tweetObj = {
        id: Date.now(),
        tweet // tweet: tweet
    }

    // Añadir el arreglo de tweets
    // tweets.push(tweet);
    tweets = [...tweets, tweetObj];


    // Una vez agregado vamos a crear el HTML
    crearHTML();

    // Reiniciar el fomulario
    formulario.reset();
}

// Mostrar mensaje de error
function mostrarError(error) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');
    // Insertar en el Contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    // Elimina la alerta despúes de 3 segundos
    setTimeout(() => {
        mensajeError.remove();
    }, 3000);

}
// Muestra un listado de los tweets
function crearHTML() {

    limpiarHtml();

    if (tweets.length > 0) {
        tweets.forEach(tweet => {

            // Agregar un botón
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            // Añadir la funcion de eliminar 
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            // Crear el HTML
            const li = document.createElement('li');

            // Añadir el texto
            li.innerText = tweet.tweet

            // Asignar el botón de eliminar
            li.appendChild(btnEliminar);


            // insertar  en el HTML
            listaTweets.appendChild(li);
        });
    }

    sincronizarStorage();
}

// Agrega los Tweets actuales al localStorage
function sincronizarStorage() {
    const tweetsString = JSON.stringify(tweets);
    localStorage.setItem('tweets', tweetsString);
}

// Elimina el tweet
function borrarTweet(id) {
    tweets = tweets.filter(tweet => tweet.id !== id);
    crearHTML();
    sincronizarStorage();
}

// Limpiar el HTML
function limpiarHtml() {

    while (listaTweets.firstChild) {
        listaTweets.removeChild(listaTweets.firstChild);
    }
}