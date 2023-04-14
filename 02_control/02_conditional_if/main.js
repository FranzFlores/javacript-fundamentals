'use strict'

const age = prompt("¿Que edad tienes?", 18);
if (age >= 18) {
    // Es mayor de edad
    console.log("Es mayor de edad");

    if (age <= 33) {
        console.log('Todavia eres millenial');
    } else if (age >= 70) {
        console.log('Eres anciano');
    } else {
        console.log('Ya no eres millenial');
    }

} else {
    // Es menor de edad
    console.log("Es menor de edad");
}


const year = prompt("¿En que año estamos?", 2023);

// Negación
if (year != 2016) {
    console.log("El año no es 2016 realmente es: " + year);
}

// Operador AND
if (year >= 2020 && year <= 2030) {
    console.log("Estamos en segunda década de los 2000s");
} else {
    console.log("No estamos en la segunda década de los 2000s");
}

// Operador OR
if (year == 2008 || (year >= 2018 && year == 2028)) {
    console.log("El año termina en el dígito 8");
} else {
    console.log("El año no termina en el dígito 8");
}