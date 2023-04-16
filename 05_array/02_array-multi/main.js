'use strict'

var teamsA = ['Liga de Quito', 'Emelec', 'Barcelona'];
var teamsB = ['Chacaritas', 'Macara', 'Espoli'];

// arreglos múltiples
var teams = [teamsA, teamsB];
console.log(teams);

// Ordenar elementos de manera contraria
teamsA.reverse();
console.log(teamsA);

// El índice del elemento
var index = teamsB.indexOf('Macara');
if (index > -1) {
    // Agrega o elimina elementos en el arreglo
    teamsA.splice(index,1);
    console.log(teamsB);
}

// unir todos los elementos del arreglo en un string
var teamsA_string = teamsA.join();

// transformar un texto a un arreglo de acuerdo a un criterio
var text =  "texto1, texto2, texto3";
var text_array = text.split(', ');
console.log(text_array);