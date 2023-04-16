'use strict'

// Ingreso de datos
var firstname = prompt("Ingresa tu nombre");
var lastname = prompt("Ingresa tu apellido");


var text = `
    <hr/>
	<h3>Nombre: ${firstname}</h3>
	<h3>Apellido: ${lastname}</h3>
    <hr/>
`;

document.write(text);