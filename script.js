"use strict";
//  <======== CODING EXERCISE 6 ========>
// function sayHello(name) {
//   return `Привет,${name}`;
// }
// console.log(sayHello("Антон"));

// function returnNeighboringNumbers(num) {
//   return [num-1,num,num+1];
// }
// console.log(returnNeighboringNumbers(5));

// function getMathResult(base, count) {
//   if (count <= 0) return base;
//   let res = "";
//   for (let i = 1; i <= count; i++){
//       res += base*i + (i===count?"":"---");
//   }
//   return res;
// }

// console.log(getMathResult(5,""));

//  <======== LESSON 24 ========>
// function showFirstMessage(text) {
//   console.log(text);
// }
// showFirstMessage("Hello, world");

// const category = "toys";
// console.log(`https://url.com/${category}`);
// ("");

//  <======== LESSON 18 ========>
//
// let numberOfFilms = +prompt("How mane films have you watched?", 1);
// let personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   private: false,
// };
// let movie = prompt("What was the latest movie?");
// let rating = prompt("Rating of this movie: ");
// personalMovieDB.movies[movie] = rating;

// console.log(numberOfFilms);
// console.log(personalMovieDB);

//  <======== LESSON 20 ========>
// console.log( NaN || 2 || undefined ); // 2

// console.log( NaN && 2 && undefined ); // NaN

// console.log( 1 && 2 && 3 ); // 3

// console.log( !1 && 2 || !3 ); // false

// console.log( 25 || null && !3 ); // 25

// console.log( NaN || null || !3 || undefined || 5); // 5

// console.log( NaN || null && !3 && undefined || 5); // 5

// console.log( 5 === 5 && 3 > 1 || 5); // true

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!!!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// for (let i = 1; i < 7; i++) {
//   let j = 0;
//   let text = "";
//   while (j < i) {
//     text += "*";
//     j++;
//   }
//   console.log(text);
// }

//  <======== LESSON 23 ========>
//   1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит -
// возвращаем пользователя к вопросам опять

// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше -
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

// 4) Потренироваться и переписать цикл еще двумя способами*/

// let numberOfFilms = +prompt("How mane films have you watched?", 1);
// let personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   private: false,
// };
// for (let i = 0; i < numberOfFilms; i++) {
//   let movie = prompt("What was the latest movie?");
//   if (movie == null || movie === "" || movie.length > 50) {
//     console.log(movie);
//     i--;
//     continue;
//   }
//   let rating = prompt("Rating of this movie: ");
//   if (rating == null || rating === "") {
//     i--;
//     continue;
//   }
//   personalMovieDB.movies[movie] = rating;
// }

// console.log(numberOfFilms);
// console.log(personalMovieDB);
