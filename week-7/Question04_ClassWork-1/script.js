"use strict";

const table = document.querySelector("#table");

const c1 = document.querySelector("#c1");
const c2 = document.querySelector("#c2");
const c3 = document.querySelector("#c3");
const c4 = document.querySelector("#c4");
const c5 = document.querySelector("#c5");
const c6 = document.querySelector("#c6");
const c7 = document.querySelector("#c7");
const c8 = document.querySelector("#c8");
const c9 = document.querySelector("#c9");
const cAll = document.querySelectorAll(".box__item");

const playerCross = document.querySelector(".player__cross");
const playerCircle = document.querySelector(".player__circle");
const resultModal = document.querySelector(".result__modal");
const gameMode = document.querySelector("#game__mode");

const winArray = [
  [c1, c2, c3],
  [c4, c5, c6],
  [c7, c8, c9],
  [c1, c4, c7],
  [c2, c5, c8],
  [c3, c6, c9],
  [c1, c5, c9],
  [c3, c5, c7],
];

let activePlayer = "cross";

const activePlayerCheck = function (player) {
  if (player === "cross") {
    playerCross.classList.remove("deactive");
    playerCircle.classList.add("deactive");
  } else {
    playerCircle.classList.remove("deactive");
    playerCross.classList.add("deactive");
  }
};
activePlayerCheck(activePlayer);

table.addEventListener("click", (e) => {
  if (e.target.classList.contains("box__item")) {
    const target = e.target.children;

    if (activePlayer === "cross") {
      target[0].classList.add("active");
      e.target.style.pointerEvent = "none";
      e.target.dataset.player = "cross";
    }

    if (activePlayer === "circle") {
      target[1].classList.add("active");
      e.target.style.pointerEvent = "none";
      e.target.dataset.player = "circle";
    }

    checkWin(winArray);

    if (checkWin(winArray)) {
      resultModal.style.display = "flex";

      if (activePlayer === "cross") {
        resultModal.querySelector(".cross").style.display = "block";
      } else {
        resultModal.querySelector(".circle").style.display = "block";
      }
    }

    if ([...cAll].every((c) => c.dataset.player) && !checkWin(winArray)) {
      resultModal.style.display = "flex";
      resultModal.querySelector(".cross").style.display = "block";
      resultModal.querySelector(".circle").style.display = "block";

      resultModal.querySelector("p").textContent = "DRAW!";
    }

    activePlayer === "cross"
      ? (activePlayer = "circle")
      : (activePlayer = "cross");

    activePlayerCheck(activePlayer);
  }
});

const checkWin = function (arr) {
  for (const item of arr) {
    const winCheckCross = item.every((c) => {
      return c.dataset.player === "cross";
    });

    const winCheckCircle = item.every((c) => {
      return c.dataset.player === "circle";
    });

    if (winCheckCross === true) {
      return winCheckCross;
    } else if (winCheckCircle === true) {
      return winCheckCircle;
    }
  }
};
checkWin(winArray);
