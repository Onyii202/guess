"use strict";
const again = document.getElementById("again");
const number = document.getElementById("number");
const check = document.getElementById("check");
const input = document.getElementById("input");
const message = document.getElementById("message");
const scoreEl = document.getElementById("score");
const highscoreEl = document.getElementById("highscore");
const darkbtn = document.getElementById("darkmodeToogle");

let randomNum = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function guessNum() {
  if (input.value === "") return;
  const value = Number(input.value);
  if (score < 1) {
    document.body.style.backgroundColor = "red";
    message.innerText = " shit you lost the game";
    return;
  }
  if (value === randomNum) {
    Correct(input.value);
  } else {
    incorrect(input.value);
  }
}

function Correct(value) {
  document.body.style.backgroundColor = "green";
  number.innerText = value;
  message.innerText = "Correct";
  scoreEl.innerText = score;
  highscore = score > highscore ? score : highscore;
  highscoreEl.innerText = highscore;
}

function incorrect(value) {
  let msg = value > randomNum ? "Too High" : "Too Low";
  score--;
  message.innerText = msg;
  scoreEl.innerText = score;
}

function reset() {
  document.body.style.backgroundColor = "#222";
  number.innerText = "?";
  message.innerText = "Start guessing...";
  score = 20;
  highscore = 0;
  scoreEl.innerText = score;
  highscoreEl.innerText = highscore;
  input.value = input;
  randomNum = Math.floor(Math.random() * 20) + 1;
}

again.addEventListener("click", reset);
check.addEventListener("click", guessNum);

function toggleDarkMode() {
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  localStorage.setItem("darkMode", !isDarkMode);
  body.classList.toggle("darkMode");
}

darkbtn.addEventListener("click", toggleDarkMode);

const isDarkMode = localStorage.getItem("darkMode") === "true";
body.classList.toggle("darkMode", isDarkMode);
