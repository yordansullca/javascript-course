// Objeto constructor
function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const hiro = new Cliente('Hiro', 500);

function formatearCliente(cliente){
    const {nombre, saldo} = cliente;
    
    return ` El cliente ${nombre} tien un saldo de ${saldo}`;
}

function formatearEmpresa(empresa){
    const {nombre, saldo, categoria} = empresa;
    
    return ` El cliente ${nombre} tien un saldo de ${saldo} y pertenece a la categorá ${categoria}`;
}

console.log(formatearCliente(hiro));

// Objeto constructor
function Empresa(nombre, saldo, categoria){
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CCH = new Empresa('Código con Hiro', 400, 'Aprendiendo JavaScript');
console.log(formatearEmpresa(CCH));
