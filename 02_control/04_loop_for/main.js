'use strict'

// Uso del bucle for clásico
console.log('Uso del bucle for clásico');
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Uso del bucle for in
console.log('Uso del bucle for in');
const person = { name: 'Franz', lastname: 'Flores', age: 24 };
for (const atr in person) {
    console.log('Atributo', atr);
}

//Uso del bucle for of
const array = [1,2,3,4];
for (const i of array) {
    console.log('Valor de i', i);
}

