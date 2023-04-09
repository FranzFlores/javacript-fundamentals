'use strict'

// Variables var (Alcance de función)
function exampleVar() {
    var number = 1;
    if (true) {
        var number = 50;
        console.log(number); // valor 50
    }
    console.log(number); // valor 50
}

exampleVar();


// Variables let (Alcance de bloque) recomendado
function exampleLet() {
    let number = 1;
    if (true) {
        let number = 50;
        console.log(number); // valor 50
    }
    console.log(number); // valor 1
}

exampleLet();

// Constantes const
function exampleConst() {
    const ip = "192.88.0.12";
    // No se puede sobreescrir la constante
    console.log(ip);
}

exampleConst();


