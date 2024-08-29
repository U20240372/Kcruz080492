// Oscar Iván Murillo Hidalgo

// Ejercicio 1
numero = parseInt(prompt("Introduce un número: "));
numerosPares = [];
for (i = 0; i < numero; i++) {
    if (i % 2 === 0){
        numerosPares.push(i);
    }
}
console.log(numerosPares.join(' '));

// Ejercicio 2

numLineas = parseInt(prompt("Introduce un número entero para el triángulo: "));
triangulo = "";
for (i = 1; i <= numLineas; i++) {
    triangulo += "*".repeat(i) + "\n";
}
console.log(triangulo);

// Ejercicio 3
numeroSumar = parseInt(prompt("Introducir un número para calcular la suma de enteros: "));
suma = 0;
for(i = 1; i <= numeroSumar; i++){
    suma += i;
}
console.log('Los enteros de 0 a ${numeroSumar} suman ${suma}');

// Ejercicio 4
numeros = [5, 9, 10, 12];
sumaArray = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
media = sumaArray / numeros.length;
console.log('La medida es ${media}');

// Ejercicio 5
numeroTabla = 3;
tablaMultiplicar = "";
for (i = 1; i <= 10; i++){
    tablaMultiplicar += '${numeroTabla} * ${i} = ${numeroTabla * i}\n';
}
console.log(tablaMultiplicar);
