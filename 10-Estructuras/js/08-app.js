const autenticado = true;

if (autenticado) {
    console.log('El usuario esta autenticado');
}

const puntaje = 500;

function revisaPuntaje(){
    if (puntaje > 400) {
        console.log('Excelente');
        return;
    } else if(puntaje > 300){
        console.log('Buen puntaje... felicitaciones');
        return;
    }
}

revisaPuntaje();