'use strict'

const box_dashed = document.querySelector(".dashed");

window.addEventListener('load', () => {
    box_dashed.style.display = "none";
});

const form = document.querySelector("#form");
form.addEventListener('submit', function () {
    const name = document.querySelector('#name').value;
    if (!validateStringField(name, 'nombre')) {
        return false;
    }

    const lastname = document.querySelector('#lastname').value;
    if (!validateStringField(lastname, 'apellido')) {
        return false;
    }

    const age = parseInt(document.querySelector('#age').value);
    if (!validateNumericField(age, 'edad')) {
        return false;
    }

    box_dashed.style.display = "block";
    const data = [name, lastname, age];
    showInformation(data);
});

const validateStringField = (field, name) => {
    console.log(field);
    if (field.trim() == null || field.trim().length == 0) {
        alert(`El campo ${name} no es válido`);
        return false;
    }
    return true;
}

const validateNumericField = (field, name) => {
    if (field == null || field <= 0 || isNaN(field)) {
        alert(`El campo ${name} no es válido`);
        return false;
    }
    return true;
}

const showInformation = (data) => {
    for (const field of data) {
        const paragraph = document.createElement("p");
        paragraph.append(field);
        box_dashed.append(paragraph);
    }
}
