// Campos del formulario
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');

// UI
const formulario = document.querySelector('#nueva-cita');
const contenedorCitas = document.querySelector('#citas');

let editando;

class Citas {
    constructor() {
        this.citas = []
    }

    agregarCita(cita) {
        /* Paso por referencia, al pasar un parametro cita y citaObj que es
        objeto pasado haran referencia al mismo objeto, para solucionar esto 
        realizamos una copia de citaObj => {...citaObj} */
        this.citas = [...this.citas, cita]; //
    }

    eliminarCita(id) {
        this.citas = this.citas.filter(cita => cita.id !== id);
    }

    editarCita(citaActualizada) {
        this.citas = this.citas.map(cita => cita.id === citaActualizada.id ? citaActualizada : cita);
    }

}

class UI {

    imprimirAlerta(mensaje, tipo) {
        // Crear el div
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12');

        // Agregar clase en base del tipo de error
        tipo === 'error' ? divMensaje.classList.add('alert-danger') : divMensaje.classList.add('alert-success');;
        /* if (tipo === 'error') {
            divMensaje.classList.add('alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        } */

        // Mensaje de alerta
        divMensaje.textContent = mensaje;

        // Agregar al DOM
        // document.querySelector('#contenido').insertBefore(divMensaje, formulario.parentElement);
        document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'));

        // Quitar la alerta despúes de 5 segundos
        setTimeout(() => {
            divMensaje.remove();
        }, 5000);
    }
    // Destructuring desde parametros
    // citas <= citas.citas 
    imprimirCitas({ citas }) {
        //Destructuring ya que es un objeto
        // citas <= citasObj.citas
        // const {citas} = citasObj;

        // Limpiar 
        this.limpiarHTML();

        citas.forEach(cita => {
            const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;

            const divCita = document.createElement('div');
            divCita.classList.add('cita', 'p-3');
            divCita.dataset.id = id;

            // Scripting de los elementos de la cita.
            const mascotaParrafo = document.createElement('h2');
            mascotaParrafo.classList.add('card-title', 'font-weight-bolder');
            mascotaParrafo.textContent = mascota;

            const propietarioParrafo = document.createElement('p');
            propietarioParrafo.innerHTML = `
                <span class="font-weight-bolder">Propietario:</span> ${propietario}
            `;

            const telefonoParrafo = document.createElement('p');
            telefonoParrafo.innerHTML = `
                <span class="font-weight-bolder">Telefono:</span> ${telefono}
            `;

            const fechaParrafo = document.createElement('p');
            fechaParrafo.innerHTML = `
                <span class="font-weight-bolder">Fecha:</span> ${fecha}
            `;
            const horaParrafo = document.createElement('p');
            horaParrafo.innerHTML = `
                <span class="font-weight-bolder">Hora:</span> ${hora}
            `;

            const sintomasParrafo = document.createElement('p');
            sintomasParrafo.innerHTML = `
                <span class="font-weight-bolder">Sintomas:</span> ${sintomas}
            `;


            // Boton eliminar esta cita
            const btnEliminar = document.createElement('button');
            btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
            btnEliminar.innerHTML = `Eliminar <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>`;
            btnEliminar.onclick = () => eliminarCita(id);


            // Boton editar esta cita
            const btnEditar = document.createElement('button');
            btnEditar.classList.add('btn', 'btn-info');
            btnEditar.innerHTML = `Editar <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>`;
            btnEditar.onclick = () => cargarEdicion(cita);


            // Agregar los parrafos
            divCita.appendChild(mascotaParrafo);
            divCita.appendChild(propietarioParrafo);
            divCita.appendChild(telefonoParrafo);
            divCita.appendChild(fechaParrafo);
            divCita.appendChild(horaParrafo);
            divCita.appendChild(sintomasParrafo);
            divCita.appendChild(btnEliminar);
            divCita.appendChild(btnEditar);

            // agregas las citas al HTML
            contenedorCitas.appendChild(divCita);

        });

    }


    limpiarHTML() {
        while (contenedorCitas.firstChild) {
            contenedorCitas.removeChild(contenedorCitas.firstChild)
        }
    }
}

const ui = new UI();
const administrarCitas = new Citas();

// Registrar eventos
eventListeners();
function eventListeners() {
    mascotaInput.addEventListener('change', datosCita);
    propietarioInput.addEventListener('change', datosCita);
    telefonoInput.addEventListener('change', datosCita);
    fechaInput.addEventListener('change', datosCita);
    horaInput.addEventListener('change', datosCita);
    sintomasInput.addEventListener('change', datosCita);

    formulario.addEventListener('submit', nuevaCita);
}


// Objeto con la información de la cita
const citaObj = {
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}

// Agrega datos al objeto de cita
function datosCita(e) {
    citaObj[e.target.name] = e.target.value;
}

// Valida y agrega una nueva cita a la clase de citas
function nuevaCita(e) {
    e.preventDefault();

    // Extraer la información del objeto de cita
    const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj;

    if (!mascota || !propietario || !telefono || !fecha || !hora || !sintomas) {
        ui.imprimirAlerta('Todos los campos son obligatorios', 'error');
        return;
    }

    if (editando) {

        ui.imprimirAlerta('Editando correctamente');

        // Pasar el objeto de la cita a edición
        administrarCitas.editarCita({ ...citaObj });

        // Regresar boton a su estado original
        formulario.querySelector('button[type="submit"]').textContent = 'CREAR CITA';

        // Quitar modo edición
        editando = false;
    } else {
        // Generar un di único
        citaObj.id = Date.now();
        // Creando una nueva cita
        administrarCitas.agregarCita({ ...citaObj });

        // Mensaje de agregado correctamente
        ui.imprimirAlerta('Se ágrego correctamente');
    }


    // Reiniciar objeto
    reiniciarObjeto();

    // Reseteando el formulario
    formulario.reset();


    // Mostrar el HTML
    ui.imprimirCitas(administrarCitas);
}

function reiniciarObjeto() {
    /* for...in recorre sobre los indices
        for...of recorre sobre un objeto iterable */

    /* for (let cita in citaObj) {
        citaObj[cita] = '';
    } */
    // Forma eficiente

    citaObj.mascota = '',
        citaObj.propietario = '',
        citaObj.telefono = '',
        citaObj.fecha = '',
        citaObj.hora = '',
        citaObj.sintomas = ''
}

function eliminarCita(id) {
    // Eliminar la cita
    administrarCitas.eliminarCita(id);

    // Muestre un mensaje
    ui.imprimirAlerta('La cita se elimin+o correctamente');

    // Refrescar las citas
    ui.imprimirCitas(administrarCitas);
}

// Cargar los datos y el modo edición
function cargarEdicion(cita) {
    const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;

    mascotaInput.value = mascota;
    propietarioInput.value = propietario;
    telefonoInput.value = telefono;
    fechaInput.value = fecha;
    horaInput.value = hora;
    sintomasInput.value = sintomas;

    // Llenar el objeto
    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas;
    citaObj.id = id;

    // Cambiar el texto del boton
    formulario.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';

    editando = true;




}