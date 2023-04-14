'use strict'

// Palabra reservada break
console.log('Uso de la palabra reservada break');
for (let i = 0; i < 10; i++) {
    if (i == 6) {
        break;
    }
    console.log(i); // Salida 0,1,2,3,4,5
}

// Palabra reservada continue
console.log('Uso de la palabra reservada continue');
for (let i = 0; i < 10; i++) {
    if (i% 3 !== 0) {
        continue;
    }
    console.log(i); // Salida 0,3,6,9
}