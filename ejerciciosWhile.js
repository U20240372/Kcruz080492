// Imprimir números del 1 al 10.
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// Sumar los primeros 10 números.
let suma = 0;
let j = 1;
do {
    suma += j;
    j++;
} while (j <= 10);
console.log('Suma de los primeros 10 números:', suma);

// Números pares del 2 al 20.
let k = 2;
while (k <= 20) {
    console.log(k);
    k += 2;
}

// Contador regresivo desde 10 hasta 1.
let l = 10;
do {
    console.log(l);
    l--;
} while (l >= 1);

// Encontrar el primer múltiplo de 7 mayor que 10.
let m = 11;
while (m % 7 !== 0) {
    m++;
}
console.log('Primer múltiplo de 7 mayor que 10:', m);

// Imprimir números impares hasta el 15.
let n = 1;
do {
    if (n % 2 !== 0) {
        console.log(n);
    }
    n++;
} while (n <= 15);

// Contar cuántas veces aparece un número en un array.
let arr = [1, 2, 3, 4, 2, 5, 2];
let numBuscado = 2;
let contador = 0;
let o = 0;
while (o < arr.length) {
    if (arr[o] === numBuscado) {
        contador++;
    }
    o++;
}
console.log('El número 2 aparece:', contador, 'veces');

// Sumar todos los elementos de un array.
let arr2 = [1, 2, 3, 4, 5];
let sumaArr = 0;
let p = 0;
do {
    sumaArr += arr2[p];
    p++;
} while (p < arr2.length);
console.log('Suma de los elementos del array:', sumaArr);

// Generar una secuencia de Fibonacci hasta el número 20.
let fib1 = 0, fib2 = 1;
console.log(fib1); // 0
while (fib2 <= 20) {
    console.log(fib2);
    let temp = fib1 + fib2;
    fib1 = fib2;
    fib2 = temp;
}
