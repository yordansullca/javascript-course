function saludar(nombre = 'Desconocido', apellido = '') {
    console.log(`Hola ${nombre} ${apellido}`);
}

saludar('Hiro', 'Dan');
saludar('Hiro');
saludar();