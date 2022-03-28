const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
}

producto.disponible = disponible;

delete producto.precio;

// No se puede reasignar una const pero si el objeto.