'use strict'

// Pedir 6 números por pantalla y agregarlos a un arreglo
var numbers = [];
for (let i = 0; i < 6; i++) {
    const number = parseInt(prompt(`Ingrese el valor ${i + 1}: `));
    numbers.push(number);
}

// Mostrar arreglo en cuerpo de la página
function showArray(array, title = '') {
    document.write(`<hr/><h2>Contenido del arreglo ${title}</h2>`);
    document.write("<ul>");
    array.forEach((el) => {
        document.write("<li>" + el + "</li>");
    });
    document.write("</ul><hr/>");
}
showArray(numbers);

// Mostrar arreglo en consola
console.log(numbers);

// Ordernar arreglo 
numbers.sort((a, b) => a - b);
showArray(numbers, 'ordenado');

// Invertir arreglo
numbers.reverse();
showArray(numbers, 'revertido');

// Número de elementos del arreglo
document.write(`
    <hr/>
    <h2>Número de elementos del arreglo: ${numbers.length}</h2>
    <hr/>
`);

// Buscar elemento ingresado por el usuario
const search = parseInt(prompt('Ingrese valor a buscar en el arreglo'));
var index = numbers.indexOf(search);
document.write(`
    <hr/>
    <h2>El valor ingresado por el usuario 
        ${(index > -1) ? `está en el índice ${index}` : 'no se encuentra en el arreglo'}
    </h2>
    <hr/>
`);


