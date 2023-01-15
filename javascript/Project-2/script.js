var HiddenNuber = 0;
var number = document.getElementsByClassName("number")[0];
var highscore = document.getElementsByClassName("highscore")[0];
var score = document.getElementsByClassName("score")[0];
var message = document.getElementsByClassName("message")[0];
var guess = document.getElementsByClassName("guess")[0];
var body = document.getElementsByTagName("body")[0];

function againFunction() {
  score.innerHTML = "20";
  guess.value = "0";
  message.innerHTML = "Start guessing...";
  body.style.backgroundColor = "#222";
}
function checkFunction() {
  hNo();
  if (score.innerHTML != "0") {
    score.innerHTML = Number(score.textContent) - 1;
    if (Number(guess.value) == HiddenNuber) {
      message.innerHTML = "Correct Number!";
      HiddenNuber = 0;
      highscore.innerHTML =
        Number(highscore.innerHTML) + Number(score.innerHTML);
      score.innerHTML = "20";
      number.innerHTML = guess.value;
      body.style.backgroundColor = "#60b347";
    } else if (Number(guess.value) <= HiddenNuber) {
      message.innerHTML = "To low!";
    } else {
      message.innerHTML = "To high!";
    }
  } else {
    alert("Your chance is over");
  }
}
function hNo() {
  if (HiddenNuber == 0) HiddenNuber = Math.floor(Math.random() * 20 + 1);
  number.innerHTML = "?";
}
document
  .getElementsByClassName("check")[0]
  .addEventListener("click", checkFunction);

document
  .getElementsByClassName("again")[0]
  .addEventListener("click", againFunction);

number;
