/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying",
  "yesterday"
];

function randomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

function randomValue(arr) {
  const rIndex = randomIndex(arr);
  return arr[rIndex];
}

function randomExcuse(arrayWho, arrayAction, arrayWhat, arrayWhen) {
  return (
    randomValue(arrayWho) +
    " " +
    randomValue(arrayAction) +
    " " +
    randomValue(arrayWhat) +
    " " +
    randomValue(arrayWhen)
  );
}

function generateRandomExcuse() {
  const element = document.querySelector("p");
  element.innerText = randomExcuse(who, action, what, when);
}

window.onload = function() {
  generateRandomExcuse();
  setInterval(generateRandomExcuse, 3000);
};
