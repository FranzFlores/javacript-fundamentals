'use strict'

var num1 = parseInt(prompt('Introduce el primer numero'));
var num2 = parseInt(prompt('Introduce el segundo numero'));

while (num1 <= 0 || num2 <= 0 || isNaN(num1) || isNaN(num2)) {
    alert("No ha ingresado un valor válido");
    num1 = parseInt(prompt('Introduce el primer numero'));
    num2 = parseInt(prompt('Introduce el segundo numero'));
}

if (num1 == num2) {
    alert("Los numeros son iguales");
} else if (num1 > num2) {
    alert(`El mayor es el primer numero ingresado. Es el numero ${num1}`);
} else {
    alert(`El mayor es el segundo numero ingresado. Es el numero ${num2}`);
}
