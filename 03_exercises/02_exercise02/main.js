'use strict'

var sum = 0;
var cont = 0;

do {
    var num = parseInt(prompt('Introduce un número', 0));

    if (isNaN(num)) {
        num = 0;
    } else if (num >= 0) {
        sum += num;
        cont++;
    }
} while (num >= 0);

console.log(`La suma de los números ingresados es: ${sum}`);
console.log(`La media de todos los numeros es: ${sum/cont}`);