/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("How mane films have you watched?", "");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("How mane films have you watched?", "");
  }
}

start();

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let movie = prompt("What was the latest movie?");
    if (movie == null || movie === "" || movie.length > 50) {
      console.log(movie);
      i--;
      continue;
    }
    let rating = prompt("Rating of this movie: ");
    if (rating == null || rating === "") {
      i--;
      continue;
    }
    personalMovieDB.movies[movie] = rating;
  }
}

rememberMyFilms();

function showMyDB(private) {
  if (!private) console.log(db);
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    genre = prompt(`Ваш любимый жанр под номером ${i + 1}`);
    personalMovieDB.genres[i] = genre;
  }
}
writeYourGenres();

console.log(numberOfFilms);
console.log(personalMovieDB);

// Код возьмите из предыдущего домашнего задания
