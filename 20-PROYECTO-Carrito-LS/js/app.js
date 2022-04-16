const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito =[];

cargarEventListeners();
function cargarEventListeners(){
    // Al cargar el document
    document.addEventListener('DOMContentLoaded', ()=>{
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carritoHTML();
    })
    // Cuando agregar un curso presinando "Agregando al Carrito"
    listaCursos.addEventListener('click', agregarCurso);

    // Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    // Vaciar el carrito
    console.log(vaciarCarritoBtn);
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = []; //Necesitamos el arreglo
        limpiarHTML();
    });
}

// Funciones
function agregarCurso(e){    
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

// Eliminar un curso del carrito
function eliminarCurso(e){

    if (e.target.classList.contains('borrar-curso')) {
        const cursoId = e.target.getAttribute('data-id');
        //Eliminar del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
        carritoHTML();
    }

   /*  if (e.target.classList.contains('borrar-curso')) {
        const padre = e.target.getAttribute('data-id');
        const arreglo = articulosCarrito.filter(curso =>padre !== curso.id)
        articulosCarrito = [...arreglo];
        carritoHTML();

    } */
    
}

// Lee el contenido del HTML al que le dimos click y extrae la informacion del curso
function leerDatosCurso(curso) {
    
    // Crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad:1
    }

    // Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);

    if (existe) {
        // Actualizamos la cantidad
        const cursos = articulosCarrito.map(curso =>{
            if (curso.id === infoCurso.id) {
                curso.cantidad ++;
                return curso;
            }

            return curso;
        })
        articulosCarrito = [...cursos];
    } else {
        // Agrega elementos al arreglo de carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }

    /* // Codigo simplificado
    // Revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id ? curso.cantidad ++ : false);
    // Agrega elementos al arreglo de carrito
    if (!existe) {
        articulosCarrito = [...articulosCarrito, infoCurso];   
    }
    
     */
    
    carritoHTML();
}


// Muestra el carrito de compras en el HTML
function carritoHTML(){
    
    // Limpiar el HTML
    limpiarHTML();

    // Recorre el carrito y genera el HTML
    articulosCarrito.forEach(curso=>{
        const {imagen, titulo, precio, cantidad, id} = curso;
        const row = document.createElement('tr');
        row.innerHTML= `
            <td> <img src='${imagen}' width='100px'> </td>
            <td> ${titulo}</td>
            <td> ${precio}</td>
            <td> ${cantidad}</td>
            <td> <a href="#" class='borrar-curso' data-id='${id}'>X</a></td>
        `;
        // row.querySelector('img').style.width = '80px';
        // Agrega el HTML del carrito en el tbody
        contenedorCarrito.children[1].appendChild(row)
    });

    
    // Agregar el carrito de compras al storage
    sincronizarStorage();
    
}

// Sincronizar localStorage
function sincronizarStorage(){
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

// Elimina los cursos del tbody
function limpiarHTML(){
    // Forma lenta
    // contenedorCarrito.children[1].innerHTML = '';

    while(contenedorCarrito.children[1].firstChild){
        contenedorCarrito.children[1].removeChild(contenedorCarrito.children[1].firstChild);
    }

}