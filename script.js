"use strict";

// const category = "toys";
// console.log(`https://url.com/${category}`);
// ("");

let numberOfFilms = prompt("How mane films have you watched?", 1);
let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};
let movie = prompt("What was the latest movie?");
let rating = prompt("Rating of this movie: ");
personalMovieDB.movies[movie] = rating;

console.log(numberOfFilms);
console.log(personalMovieDB);
