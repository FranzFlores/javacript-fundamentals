'use strict'

function sum(num1, num2, printResult, duplicateResult) {
    let result = num1 + num2;

    printResult(result);
    duplicateResult(result);

    return result;
}

// llamar a la función
sum(5, 10, result => {
    console.log(`El resultado es ${result}`);
}, function (result) {
    console.log(`El resultado duplicado es ${result * 2}`);
});