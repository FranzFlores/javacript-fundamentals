'use strict'

window.addEventListener('load', () => {
	var buttom = document.querySelector("#btn");

	function changeColor() {
		buttom.style.background = (buttom.style.background == 'green') ? 'red' : 'green';
		buttom.style.padding = "10px";
		buttom.style.border = "1px solid #ccc";

		return true;
	}

	// Evento Click
	buttom.addEventListener('click', function () {
		changeColor();
		this.style.border = "10px solid black";
	});

	// Evento Mouse over (Pasar el curso encima del elemento)
	buttom.addEventListener('mouseover', function () {
		this.style.background = "yellow";
	});

	// Evento Mouseout (Sacar el curso del elemento)
	buttom.addEventListener('mouseout', function () {
		this.style.background = "#ccc";
	});

	// Evento Focus (Cuando el elemento esta activo o tiene el foco)
	var input = document.querySelector("#name");
	input.addEventListener('focus', function () {
		console.log("El campo de texto tiene el foco");
	});

	// Evento Blur (Cuando el elemento pierde el foco)
	input.addEventListener('blur', function () {
		console.log("El campo de texto perdió el foco");
	});

	// Evento Keydown
	input.addEventListener('keydown', function (event) {
		console.log("Se está presionando la tecla: ", String.fromCharCode(event.keyCode));
	});

	// Evento Keypress
	input.addEventListener('keypress', function (event) {
		console.log("Tecla presionada ", String.fromCharCode(event.keyCode));
	});

	// Evento Keyup
	input.addEventListener('keyup', function (event) {
		console.log("Tecla que se ha dejado de presionar ", String.fromCharCode(event.keyCode));
	});
});

