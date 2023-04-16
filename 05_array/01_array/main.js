'use strict'

// Definir arreglos
var data = ['Franz', 'Fabricio', 'Emilio', 24, 32, true];
var languages = new Array("Java", "JS", "Python", "PHP");

// Recorrer arreglo
document.write(`
    <hr/>
    <h2>Lenguajes de Programación</h2>
    <ul>
`);

for (const language of languages) {
    document.write(`<li> ${language} </li>`);
}

document.write("</ul>");

var prices = [10,20,30,40,50];

// búsqueda de índices
var index = prices.findIndex(p => p == 20);
console.log(`El índice a buscar es: ${index}`);


// some => devuelve un booleano si existe algún elemento con la condición
var result = prices.some(p => p < 40);
console.log('Existe algún elemento menor a 40:', result);



