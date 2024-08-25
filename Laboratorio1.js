// Oscar Iván Murillo Hidalgo.

// Declarar las variables para la cantidad de cada producto.
let cantidadCamisetas = 120; // Cantidad de camisetas.
let cantidadPantalones = 80; // Cantidad de pantalones.
let cantidadZapatos = 50;    // Cantidad de zapatos.

// Para calcular el total del producto en el inventario.
let totalProductos = cantidadCamisetas + cantidadPantalones + cantidadZapatos;

// Para imprimir el total de productos del inventario
console.log("Total de productos en inventario: " + totalProductos);

// Verificamos si es necesario reponer algún producto
if (cantidadCamisetas < 100) {
    console.log("Es necesario reponer camisetas.");
} else if (cantidadPantalones < 100) {
    console.log("Es necesario reponer pantalones.");
} else if (cantidadZapatos < 100) {
    console.log("Es necesario reponer zapatos.");
} else {
    console.log("No es necesario reponer ningún producto.");
}
