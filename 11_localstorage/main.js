'use strict'

// Formulario de agregar películas
var movies = document.querySelector("#formMovie");
movies.addEventListener('submit', function () {
    const title = document.querySelector('#title').value;

    if (title.length >= 1) {
        localStorage.setItem(title, title);
    }
});

// Agregar listado de películas
var ul = document.querySelector('#movies-list');
for (var m in localStorage) {
    const movie = localStorage.getItem(m);
    const li = document.createElement("li");
    li.append(localStorage.getItem(movie));
    ul.append(li);
}

// Formulario de eliminar película
const deleteMovie = document.querySelector("#formDeleteMovie");
deleteMovie.addEventListener('submit', function () {
    const title = document.querySelector('#title-delete').value;

    if (title.length >= 1) {
        localStorage.removeItem(title);
    }
});
