'use strict'

function printConsole(num1, num2) {
    console.log("Suma: " + (num1 + num2));
    console.log("Resta: " + (num1 - num2));
    console.log("Multiplicacion: " + (num1 * num2));
    console.log("División: " + (num1 / num2));
    console.log("***********************************");
}

function printDocument(num1, num2) {
    document.write("Suma: " + (num1 + num2) + "<br/>");
    document.write("Resta: " + (num1 - num2) + "<br/>");
    document.write("Multiplicacion: " + (num1 * num2) + "<br/>");
    document.write("División: " + (num1 / num2) + "<br/>");
    document.write("***********************************" + "<br/>");
}

function calculator(num1, num2, hide = true) {
    if (hide) {
        printConsole(num1, num2);
    } else {
        printDocument(num1, num2);
    }

    return true;
}

//Llamar a la función
calculator(5, 10);
calculator(2, 8, false);

