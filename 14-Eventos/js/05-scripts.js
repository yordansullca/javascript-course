window.addEventListener('scroll',()=>{
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();
    console.log(ubicacion.top);
    if (ubicacion.top < 180) {
        console.log('El elemento ya esta visible');
    } else {
        console.log('Aún no, da más scroll');
    }
});