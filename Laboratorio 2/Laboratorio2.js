// Oscar Iván Murillo Hidalgo.
// PD: no agrego switch-case porque no lo solicita.
function calcularPromedio(nombre, notas) {
    let suma = 0;
    for (let i =0; i < notas.length; i++){
        suma += notas[i];
    }
    let promedioFinal = suma / notas.length;
    console.log("El promedio de las notas de " +nombre + " es: " + promedioFinal);
}

let nombreEstudiante = "Anne";
let notasEstudiante = [80, 90, 85, 70, 95];

calcularPromedio(nombreEstudiante, notasEstudiante);