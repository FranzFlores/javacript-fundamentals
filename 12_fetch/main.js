'use strict'

// Obtener listado de datos mediante fetch
const div_users = document.querySelector("#users");
fetch('https://reqres.in/api/users')
    .then(data => data.json())
    .then(users => {
        listUsers(users.data);
    }).catch((err) => {
        console.log("El error es ", err);
    });

function listUsers(users) {
    for (const user of users) {
        const name = document.createElement('h2');
        name.innerHTML = `${user.first_name} ${user.last_name}`;
        div_users.appendChild(name);
    }
}

// Obtener un dato mediante fetch
const div_user = document.querySelector("#user");
fetch('https://reqres.in/api/users/2')
    .then(data => data.json())
    .then(user => {
        showUser(user.data);
    }).catch((err) => {
        console.log("El error es ", err);
    });

function showUser(user) {
    const name = document.createElement('h4');
    name.innerHTML = user.first_name + " " + user.last_name;
    div_user.appendChild(name);

    const avatar = document.createElement('img');
    avatar.src = user.avatar;
    avatar.width = '100';
    div_user.appendChild(avatar);
}

// Creación y uso de Promesas
const person = {
    name: 'Franz',
    lastname: 'Flores',
    age: 24
}

const getPerson = () => {
    return new Promise((resolve, reject) => {
        const personString = JSON.stringify(person);
        if (typeof personString != 'string') {
            return reject('Error al obtener la persona');
        }
        return resolve(personString);
    });
}

var div_user_local = document.querySelector("#local_user");
getPerson()
    // .then(data => data.json())
    .then(person => {
        const obj = document.createElement('h4');
        obj.innerHTML = person;
        div_user_local.appendChild(obj);
    }).catch((err) => {
        console.log("El error es ", err);
    });


