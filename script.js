"use strict";

const students = [
  "Peter",
  "Andrew",
  "Ann",
  "Mark",
  "Josh",
  "Sandra",
  "Cris",
  "Bernard",
  "Takesi",
  "Sam",
  "Sam",
];

function sortStudentsByGroups(arr) {
  const newArr = [];
  arr.sort();
  console.log(arr);
  for (let i = 0; i < 9; i += 3) {
    let arrSt = [];
    for (let j = i; j < i + 3; j++) {
      arrSt.push(arr[j]);
    }
    newArr.push(arrSt);
  }
  if (arr.length > 9) {
    let str = arr.slice(9);
    str = str.join(", ");
    newArr.push(str);
  } else {
    newArr.push("-");
  }
  return newArr;
}

console.log(sortStudentsByGroups(students));

// const baseCurrencies = ["USD", "EUR"];
// const additionalCurrencies = ["UAH", "RUB", "CNY"];

// function availableCurr(arr, missingCurr) {
//   const array = [...arr];
//   delete array[missingCurr];
//   console.log(array);
//   let message = "Доступные валюты:";
//   array.forEach((item) => {
//     message += `\n${item}`;
//   });
//   console.log(message);
//   return message;
// }

// console.log(availableCurr(baseCurrencies, "EUR"));

// const someString = "This is some strange string";

// function reverse(str) {
//   if (typeof str !== "string") return "Ошибка!";
//   const newString = str.split("").reverse().join("");
//   console.log(newString);
//   return newString;
// }

// reverse(someString);

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: ((obj) => {
//         let text = `Мне ${obj.age} и я владею языками`;
//         for (let key in obj.skills.languages){
//             lang = obj.skills.languagesp[key].toUpperCase()
//             text += ` ${lang}`;
//         }
//         return text;
//     })
// };

// function showExperience(plan) {

//     //console.log(Object.keys(plan.length).length)
//     const {age} = plan;
//     console.log(age)

// }

// console.log(showExperience(personalPlanPeter));
// let arr=[1,2,3];
// console.log([...arr]);

// Числа Фибоначчи!!!
// function fib(length) {
//   if (typeof length !== 'number' || length <= 0 || !Number(length))
//       return "";
//   let arr = [0, 1];
//   let str = "";
//   for(let i = 0; i < length; i++){
//       if(i === 0)
//           str += "0";
//       else if(i === 1)
//           str += " 1";
//       else{
//           arr[i] = arr[i-1]+arr[i-2];
//           str += ` ${arr[i]}`;
//       }
//   }
//   return str;
// }

// function fib1(num) {
//   if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//       return "";
//   }

//   let result = '';
//   let first = 0;
//   let second = 1;

//   for (let i = 0; i < num; i++) {
//       if (i + 1 === num) {
//           result += `${first}`;
//           // Без пробела в конце
//       } else {
//           result += `${first} `;
//       }

//       let third = first + second;
//       first = second;
//       second = third;
//   }

//   return result;
// }

// console.log(fib(7))

// function findMaxNumber(num1, num2, num3, num4) {
//   let arr = [num1, num2, num3, num4];
//   for (let i = 0; i < arr.length; i++){
//       if (typeof arr[i] !== 'number')
//           return 0;
//   }
//   let max = Math.max(num1, num2, num3, num4);
//   // for (let i = 1; i < arr.length; i++){
//   //     if (arr[i] > max)
//   //         max = arr[i];
//   //}
//   return max;
// }

// console.log(findMaxNumber(1, 5, '6', '10'))

// function getTimeFromMinutes(num) {
//   if (isNaN(num) || num < 0 || !Number.isInteger(num))
//       return "Ошибка, проверьте данные";
//   let h = Math.floor(num / 60);
//   let m = num % 60;
//   let strH = h.toString();
//   strH = strH.slice(strH.length-1)
//   strH = Number(strH)
//   if (strH === 0 || (strH >= 5 && strH <= 9) || (h >= 11 && h <= 20)){
//       return `Это ${h} часов и ${m} минут`;
//   } else if (strH === 1) {
//       return `Это ${h} час и ${m} минут`;
//   } else if (strH >= 2 && strH <= 4){
//       return `Это ${h} часа и ${m} минут`;
//   }
// }

// console.log(getTimeFromMinutes(-50))

// let num = 700;
// let h = Math.floor(num / 60);
// let m = num % 60;
// let strH = h.toString();
//  strH = strH.slice(strH.length-1)
// console.log(strH)

// console.log(isNaN(125));

// function getCoupeNumber(num) {
//   if(isNaN(num) ||  !Number.isInteger(num) || num < 0){
//       return "Ошибка. Проверьте правильность введенного номера места";
//   } else if (num < 1 || num > 36) {
//       return "Таких мест в вагоне не существует";
//   }
//   let res = Math.ceil(num/4);
//   return res;
// }
// console.log(getCoupeNumber(37.5));

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
