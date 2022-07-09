// console.log(document.querySelector(".message").textContent);

// console.log(document.querySelector(".message"));

// document.querySelector(".message").textContent = "🍕❤ you won";

// console.log(document.querySelector(".message").textContent);

// console.log(document.querySelector(".number").textContent);

// document.querySelector(".number").textContent = "20";

// console.log(document.querySelector(".number").textContent);

// console.log(document.querySelector(".score").textContent);

// document.querySelector(".score").textContent = "30";
// console.log(document.querySelector(".score").textContent);

// console.log(document.querySelector(".guess").value);
// document.querySelector(".guess").value = 23;

// console.log(document.querySelector(".guess").value);

// const secrectNumber = Math.trunc(Math.random() * 20) + 1;
// let number = 5;
// document.querySelector(".number").textContent = secrectNumber;
// document.querySelector(".check").addEventListener("click", function () {
//   const x = Number(document.querySelector(".guess").value);
//   console.log(x, typeof x);
//   if (!x) {
//     document.querySelector(".message").textContent = "🚨 please enter number";
//   } else if (secrectNumber === x) {
//     console.log("you won");
//     document.querySelector(".message").textContent = "you won";
//   } else if (number < 1) {
//     console.log(" you lost");
//     document.querySelector(".message").textContent = "to lost the game";
//     document.querySelector(".score").textContent = number;
//   } else if (secrectNumber > x) {
//     document.querySelector(".message").textContent = "to low";
//     number--;
//     document.querySelector(".score").textContent = number;
//   } else if (number < 1) {
//     document.querySelector(".message").textContent = "you lost the game";
//     document.querySelector(".score").textContent = number;
//   } else if (secrectNumber < x) {
//     document.querySelector(".message").textContent = "to high";
//     number--;
//     document.querySelector(".score").textContent = number;
//   }
// });

let secrectNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const addMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

function scoreF(score) {
  document.querySelector(".score").textContent = score;
}
score > 10 ? console.log("yes") : console.log("no");

document.querySelector(".check").addEventListener("click", function () {
  const x = Number(document.querySelector(".guess").value);
  if (!x) {
    addMessage("🚨 please enter number");
  } else if (score <= 1) {
    addMessage("🙆‍♀️sorry you lost the game...");
    scoreF(0);
  } else if (secrectNumber === x) {
    addMessage("to won");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secrectNumber;
    if (highscore < score) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (secrectNumber > x) {
    score--;
    scoreF(score);

    addMessage("to low");
  } else if (secrectNumber < x) {
    addMessage("to high");
    score--;
    scoreF(score);
  }
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";

  addMessage("Guess the number");
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  secrectNumber = Math.trunc(Math.random() * 20) + 1;

  score = 20;
  scoreF(20);
});
