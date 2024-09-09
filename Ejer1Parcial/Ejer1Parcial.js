// Oscar Iván Murillo Hidalgo.

// Ejercicio 1.
// Array con los gastos mensuales en categorías
let gastosMensuales = [
    { categoria: "Vivienda", valor: parseFloat(prompt("Ingresa el gasto mensual en Vivienda:")) },
    { categoria: "Alimentos", valor: parseFloat(prompt("Ingresa el gasto mensual en Alimentos:")) },
    { categoria: "Transporte", valor: parseFloat(prompt("Ingresa el gasto mensual en Transporte:")) },
    { categoria: "Entretenimiento", valor: parseFloat(prompt("Ingresa el gasto mensual en Entretenimiento:")) }
];

// Ingreso mensual de la familia
let ingresoMensual = parseFloat(prompt("Ingresa el ingreso mensual total de la familia:"));

// Calcular el gasto total sumando los valores de cada categoría
let totalGastos = 0;
for (let i = 0; i < gastosMensuales.length; i++) {
    totalGastos += gastosMensuales[i].valor;
}

// Comparar los gastos con el ingreso mensual
if (totalGastos < ingresoMensual) {
    let ahorro = ingresoMensual - totalGastos;
    console.log(`El presupuesto está equilibrado y tienes un ahorro de: $${ahorro}`);
} else if (totalGastos === ingresoMensual) {
    console.log("El presupuesto está equilibrado y no tienes ahorros");
} else {
    let deficit = totalGastos - ingresoMensual;
    console.log(`El presupuesto está excedido. Te faltan $${deficit} para cubrir los gastos.`);
}


// Ejercicio 2.
// Array de películas con su título y género
let peliculas = [
    { titulo: "El Padrino", genero: "Drama" },
    { titulo: "Toy Story", genero: "Animación" },
    { titulo: "Inception", genero: "Ciencia Ficción" },
    { titulo: "La La Land", genero: "Musical" },
    { titulo: "Mad Max: Fury Road", genero: "Acción" }
];

// Variable que almacena el género que el usuario desea ver
let generoBuscado = prompt("Ingresa el género de película que deseas ver:");

// Buscar una película que coincida con el género seleccionado
let peliculaRecomendada = null;
for (let i = 0; i < peliculas.length; i++) {
    if (peliculas[i].genero.toLowerCase() === generoBuscado.toLowerCase()) {
        peliculaRecomendada = peliculas[i].titulo;
        break;
    }
}

// Mostrar el resultado de la recomendación
if (peliculaRecomendada) {
    console.log(`Te recomendamos ver: ${peliculaRecomendada}`);
} else {
    console.log("No hay películas disponibles para el género seleccionado.");
}
