'use strict'

// Obtener elementos del HTML por id
var box1 = document.querySelector('#box1');
box1.innerHTML = "Elemento insertado desde JS";
box1.style.background = "red";
box1.style.padding = "20px";
box1.style.color = "white";

var box2 = document.getElementById('box2');
box2.innerHTML = "Elemento insertado desde JS";
box2.style.background = "blue";
box2.style.color = "white";
box2.style.fontSize = "20px";

// Obtener elementos del HTML por etiqueta
var section = document.getElementById('section');
var divs = document.getElementsByTagName('div');
var hr = document.createElement('hr');
// var divs = document.querySelector("div");
for (const element of divs) {
    var paragraph = document.createElement('p');
    var text = document.createTextNode(element.textContent);
    paragraph.append(text);
    section.append(paragraph);
}
section.append(hr);

// Obtener elementos del HTML por clase
var firstDiv = document.getElementsByClassName('first');
for (const div of firstDiv) {
    div.style.background = 'red';
}

var secondDiv = document.querySelector('.second');
console.log(secondDiv);