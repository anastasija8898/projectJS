/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

"use strict";

let numberOfFilms;

//start();

let personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: function () {
    personalMovieDB.count = +prompt("How mane films have you watched?", "");
    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("How mane films have you watched?", "");
    }
  },
  rememberMyFilms: function () {
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
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) console.log(personalMovieDB);
  },
  writeYourGenres: function () {
    for (let i = 0; i < 3; i++) {
      let genre = prompt(`Ваш любимый жанр под номером ${i + 1}`);
      if (genre === null || genre.trim() === "") {
        i--;
      } else {
        personalMovieDB.genres[i] = genre;
      }
    }
    this.genres.forEach((item, i) => {
      console.log(`Любимый жанр #${i + 1} - это ${item}`);
    });
  },
  toggleVisibleMyDB: () => (personalMovieDB.private = !personalMovieDB.private),
};

//rememberMyFilms();

//showMyDB(personalMovieDB.private);

//writeYourGenres();

//console.log(numberOfFilms);
console.log(personalMovieDB);

personalMovieDB.toggleVisibleMyDB();
console.log(personalMovieDB);
personalMovieDB.writeYourGenres();
