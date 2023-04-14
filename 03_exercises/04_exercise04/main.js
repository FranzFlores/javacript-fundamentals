'use strict'

var num = parseInt(prompt('Ingrese un valor numérico', 0));

while (isNaN(num) || num <= 0) {
    num = parseInt(prompt('Ingrese un valor numérico', 0));
}

document.write(`
    <h2> Tabla del número ${num}</h2>
`);

for (let i = 0; i < 10; i++) {
    document.write(`
        <p>${i + 1} x ${num} = ${(i + 1) * num} </p>
    `);
}