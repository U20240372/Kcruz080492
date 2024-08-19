// Ejercicio 1: Verificar la edad para ingresar a una discoteca.

function verificarEdad(edad){
    if (typeof edad !== 'number' || edad <0){
        console.log("Ingrese la edad. ");
    }else if (edad >= 18){
        console.log("puedes ingresar a la discoteca. ");
    }else{
        console.log("No puedes ingrear a la discoteca. ");
    }
}

// ejercicio 2: Clasificación de calificaciones.

function clasificarCalicacion(calificacion){
    if (calificaion >= 90 && calificaion <= 100){
        console.log("A");
    }else if (calificaion >= 80 && calificacion < 80){
        console.log("B");
    }else if (calificacion >=70 && calificacion < 80){
        console.log ("C");
    }else if (calificacion >=60 && calificicion < 70){
        console.log ("D");
    }else if  (calificacion >=0 && calificacion <60){
        console.log ("F");
    }else{
        console.log("Por favro, ingrese una calificación válida (0-100). ")
    }
}

// ejercicio 3: Determinar el día de la semana.

function determinarDiaSemana(dia){
    switch(dia){
        case 1:
            console.log("Lunes");
            break;
        case 2:
            console.log("Martes");
            break;
        case 3:
            console.log("Miércoles");
            break;
        case 4:
            console.log("Jueves");
            break;
        case 5:
            console.log("Viernes");
            break;
        case 6:
            console.log("sábado");
            break;
        case 7: 
        console.log("Domingo");
            break;
        default:
            console.log("Ingresar un número del 1 al 7.");
    }
}

//ejercicio 4: Evslucsción de números.

function evaluarNumero(numero){
    if (numero > 0){
        console.log("El número es positivo. ");
    }else if (numero < 0){
        console.log("El número es negativo");
    }else if (numero === 0){
        console.log("El númeor es cero.");
    }else{
        console.log("Por favor, ingrese un número valido. ");
    }
}