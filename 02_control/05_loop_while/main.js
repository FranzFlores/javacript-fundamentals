'use strict'

// bucle while
console.log('Uso del bucle while');
let year = 2000;
while (year <= 2023) {
    console.log('Es el año: ', year);
    year++;
}

// bucle do while
// cumple la condición y se ejecuta varias veces
console.log('Uso del bucle do while 1');
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);


// bucle do while
// no cumple la condición y se ejecuta una vez
console.log('Uso del bucle do while 2');
let j = 10;
do {
    console.log(j);
    j++;
} while (j <= 5);