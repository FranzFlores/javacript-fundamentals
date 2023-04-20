'use strict'

var movie = {
    title: 'Batman vs Superman',
    year: 2017,
    country: 'Estados unidos'
};

var movies = [
    { title: "Civil War", year: 2016, country: "Reino Unido" },
    movie
];

var box_movies = document.querySelector("#movies");
for (const movie of movies) {
    const paragraph = document.createElement("p");
    paragraph.append(`${movie.title} - ${movie.year}`);
    box_movies.append(paragraph);
}
