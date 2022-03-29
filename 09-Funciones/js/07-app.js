
iniciarApp();
function iniciarApp() {
    console.log('Iniciando app...');
    segundaFunction();
}

function segundaFunction(){
    console.log('Desde la segunda función');

    usuarioAutenticado('Hiro');
}

function usuarioAutenticado(usuario) {
    console.log('Autenticado usuario... espere...');
    console.log(`Usuario autenticado exitosamente: ${usuario}`);
}