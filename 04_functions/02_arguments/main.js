// 'use strict'

// Argumentos obligatorios
function subtract(a, b) {
    return a - b;
}

console.log(`Uso de argumentos obligatorios. 
Resultado: ${subtract(5, 3)}`
);

// Argumentos opcionales
function greet(name, message = 'Mucho gusto') {
    return `${name}, ${message}`;
}

console.log(`Uso de argumentos opcionales
Resultado 1: ${greet('Franz')}
Resultado 2: ${greet('Fabricio', 'Un placer conocerte')}
`);


// Argumentos de longitud variable
var fruitsArray = [];
function addToListFruits(...fruits) {
    for (const fruit of fruits) {
        fruitsArray.push(fruit);
    }
    return fruitsArray;
}

console.log(`Uso de argumentos con logitud variable
Resultado 1: ${addToListFruits('Manzana','Pera')}
Resultado 2: ${addToListFruits('Durazno')}
`);
