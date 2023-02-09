"use strict";
// Selecting elements
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const currentScore0 = document.getElementById("current--0");
const currentScore1 = document.getElementById("current--1");
// Buttons
const newBtn = document.querySelector(".btn--new");
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");

// Game Values
let diceVa = 0;
let currentScore0Va = 0;
let currentScore1Va = 0;
let score0Va = 0;
let score1Va = 0;
let currentPlayer = 1;

// Starting Conditions & restart function
let start = function () {
  currentPlayer = 1;
  score0Va = 0;
  score1Va = 0;
  console.log(currentPlayer);
  score0El.textContent = 0;
  score1El.textContent = 0;
  diceEl.classList.add("hidden");
  currentScore0Va = 0;
  currentScore1Va = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
};

start();
// New Game
newBtn.addEventListener("click", function () {
  start();
  console.log("New Game has begun.");
});

// Dice Roll
rollBtn.addEventListener("click", function () {
  //   diceRoll();
  //   console.log(diceRoll);
  diceVa = Math.trunc(Math.random() * 6) + 1;
  console.log(diceVa);
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${diceVa}.png`;

  // score0El.textContent = 5;
  // score1El.textContent = 5;
  console.log("Dice rolled");
  // currentScore0.textContent = 5;
  // currentScore1.textContent = 5;
  if (diceVa === 1) {
    if (currentPlayer === 1) {
      score0Va = 0;
      score0El.textContent = score0Va;
      currentPlayer = 2;
      console.log("player 2");
    } else {
      score1Va = 0;
      score1El.textContent = score1Va;
      currentPlayer = 1;
      console.log("player 1");
    }
    console.log("number 1");
  } else {
    if (currentPlayer === 1) {
      score0Va += diceVa;
      score0El.textContent = score0Va;
    } else if (currentPlayer === 2) {
      score1Va += diceVa;
      score1El.textContent = score1Va;
    }
  }
});

// Hold Button

holdBtn.addEventListener("click", function () {
  if (currentPlayer === 1) {
    currentScore0Va += score0Va;
    currentScore0.textContent = currentScore0Va;
    score0Va = 0;
    score0El.textContent = score0Va;

    currentPlayer = 2;
    console.log("Player 2");
  } else {
    currentScore1Va += score1Va;
    currentScore1.textContent = currentScore1Va;
    score1Va = 0;
    score1El.textContent = score1Va;

    currentPlayer = 1;
    console.log("Player 1");
  }
  console.log("Player Switched");
  console.log(currentPlayer);
});
