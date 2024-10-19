// Oscar Iván Murillo Hidalgo
// Ejercicio 1

let alumno = {
    nombre: "Juan Peréz", 
    calificaciones: {
        ingles: 85,  // Calificación en ingles.
        programacion: 90, // Calificación en programación.
        matematica: 78 // Calificación en matemáticas.
    }
    promedio: function () {
        let suma = this.calificaciones.ingles + this.calificaciones.programacion + this.calificaciones.matematica;
        return (suma / 3).toFixed(2); // Redondeo a 2 decimales.
    }
};

console.log("Nombre del alumno: " + alumno.nombre);
console.log("Promedio de calificaciones: "+ alumno.promedio());

//Ejercicio 2

const prompt = require('prompt-sync')();

let producto = {
    precio: 0, // Propiedad para el precio.
    descuento: 0, // Propiedad para el descuento.
    neto: function(){
        return this.precio - (this.precio * (this.descuento / 100));
    }
}

producto.precio = parseFloat(prompt("Ingrese el precio del producto: "));
producto.descuento = parseFloat(prompt("Ingrese el porcentaje de descuento: "));

let precioConDescuento = producto.neto();
console.log("El precio neto con descuento es: $" + precioConDescuento.toFixed(2));
