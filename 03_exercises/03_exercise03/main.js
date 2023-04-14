'use strict'

var num1 = parseInt(prompt("Introduce el primer numero", 0));
var num2 = parseInt(prompt("Introduce el segundo numero", 0));

document.write(`
    <h2>Valores Generados</h2>
    <h3>Rango Mínimo: ${num1}</h3>
`);

for (var i = num1; i <= num2; i++) {
    document.write(i + "<br/>");
}

document.write(`<h3>Rango Máximo: ${num2}</h3>`);