// Variables
const year = document.querySelector('#year');
const marca = document.querySelector('#marca');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// Contenedor para los resultados
const resultado = document.querySelector('#resultado');


const max = new Date().getFullYear();
const min = max - 10;

// Generar un objeto con la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos); // Muestra los automoviles

    // Lista de opciones de años
    llenarSelect();
});

// Event Listerner para los select de búsqueda.
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    filtrarAutos();
});
year.addEventListener('change', e => {
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAutos();
});
minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
    filtrarAutos();
});
maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
    filtrarAutos();
});
puertas.addEventListener('change', e => {
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAutos();
});
transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
    filtrarAutos();
});
color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    filtrarAutos();
});

console.log(datosBusqueda);

// Funciones
function mostrarAutos(autos) {
    autos.forEach(auto => {
        const autoHTML = document.createElement('p');
        const { marca, modelo, year, precio, puertas, color, transmision } = auto;
        autoHTML.textContent = `
            ${marca} - ${modelo} - ${year} - ${puertas} PUERTAS - TRANSMISIÓN: ${transmision} - PRECIO: ${precio} - COLOR: ${color}`

        // Añadiendo resultado
        resultado.appendChild(autoHTML);
    });
}


function llenarSelect() {
    for (let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}

// Funcion que filtra en base a la busqueda

function filtrarAutos() {

    limpiarHTML(); // Limpiar resultado HTML

    const resultado = autos
        .filter(filtrarMarca)
        .filter(filtrarYear)
        .filter(filtrarMinimo)
        .filter(filtrarMaximo)
        .filter(filtrarPuertas)
        .filter(filtrarTransmision)
        .filter(filtrarColor);

    if (resultado.length ) {
        mostrarAutos(resultado)
    } else {
        noResultado();
    }
}

function noResultado() {
    const noResultado = document.createElement('p');
    noResultado.classList.add('alerta', 'error')
    noResultado.textContent = 'No hay resultados';
    resultado.appendChild(noResultado);
}

function filtrarMarca(auto) {
    const { marca } = datosBusqueda;
    if (marca) {
        return auto.marca === marca;
    }
    return auto;
}

function filtrarYear(auto) {
    const { year } = datosBusqueda;
    if (year) {
        return auto.year === year;
    }

    return auto;
}

function filtrarMinimo(auto) {
    const { minimo } = datosBusqueda;
    if (minimo) {
        return auto.precio >= minimo;
    }

    return auto;
}

function filtrarMaximo(auto) {
    const { filtrarMaximo } = datosBusqueda;
    if (filtrarMaximo) {
        return auto.precio <= filtrarMaximo;
    }

    return auto;
}

function filtrarPuertas(auto) {
    const { puertas } = datosBusqueda;
    if (puertas) {
        return auto.puertas === puertas;
    }

    return auto;
}

function filtrarTransmision(auto) {
    const { transmision } = datosBusqueda;
    if (transmision) {
        return auto.transmision === transmision;
    }

    return auto;
}

function filtrarColor(auto) {
    const { color } = datosBusqueda;
    if (color) {
        return auto.color === color;
    }

    return auto;
}

function limpiarHTML() {

    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}