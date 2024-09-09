// Oscar Iván Murillo Hidalgo.

// Ejercicio 1.

let gastosMensuales = [
    { categoria: "Vivienda", valor: 800 },
    { categoria: "Alimentos", valor: 400 },
    { categoria: "Transporte", valor: 150 },
    { categoria: "Entretenimiento", valor: 100 }
];

// Ingreso mensual de la familia.
let ingresoMensual = 1800;

// Calcular el gasto total sumando los valores de cada categoría.
let totalGastos = 0;
for (let i = 0; i < gastosMensuales.length; i++) {
    totalGastos += gastosMensuales[i].valor;
}

// Comparar los gastos con el ingreso mensual.
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
// Array de películas con su título y género.
let peliculas = [
    { titulo: "El Padrino", genero: "Drama" },
    { titulo: "Toy Story", genero: "Animación" },
    { titulo: "Inception", genero: "Ciencia Ficción" },
    { titulo: "La La Land", genero: "Musical" },
    { titulo: "Mad Max: Fury Road", genero: "Acción" }
];

// Variable que almacena el género que él usuario desea ver.
let generoBuscado = "Ciencia Ficción";

// Buscar una película que coincida con el género seleccionado.
let peliculaRecomendada = null;
for (let i = 0; i < peliculas.length; i++) {
    if (peliculas[i].genero === generoBuscado) {
        peliculaRecomendada = peliculas[i].titulo;
        break;
    }
}

// Para mostrar el resultado de la recomendación.
if (peliculaRecomendada) {
    console.log(`Te recomendamos ver: ${peliculaRecomendada}`);
} else {
    console.log("No hay películas disponibles para el género seleccionado.");
}
