var screen = document.querySelectorAll(".screen");
var startBtn = document.querySelector("button");
var allElem = document.querySelectorAll(".elem");
var playground = document.querySelector(".playground");
var score = document.querySelector("#score h4 span");
var time = document.querySelector("#time h4 span");

var selected = "";

startBtn.addEventListener("click", function () {
  screen[1].style.transform = "translateY(-100%)";
});

allElem.forEach(function (elem) {
  elem.addEventListener("click", function () {
    screen[2].style.transform = "translateY(-200%)";
    selected = elem.childNodes[3].getAttribute("src");
    addImage();
    var t = 30;
    var interval = setInterval(function () {
      t--;
      time.innerHTML = t;
      if (t == 0) {
        clearInterval(interval);
        newImg.style.display = "none";
        endGame(sc);
      }
    }, 1000);
  });
});





function addImage() {
  setTimeout(createImage, 500);
  updateScore();
}
var newImg = document.createElement("img");

function createImage() {
  var x = Math.random() * 90;
  var y = Math.random() * 90;
  var rot = Math.random() * 360;
  newImg.setAttribute("src", selected);
  newImg.style.left = x + "%";
  newImg.style.top = y + "%";
  newImg.style.rotate = rot + "deg";
  playground.appendChild(newImg);

  
}
newImg.addEventListener("click", function () {
  addImage();
});
var sc = 0;
function updateScore() {
  sc++;
  score.innerHTML = sc;
}
var scoreCard = document.createElement("div");
playground.append(scoreCard);

function endGame(sc) {
  scoreCard.style.display = "block";
  scoreCard.style.boxShadow = "0 0 8px 5px  rgb(57, 110, 150)";
  scoreCard.textContent = "Game Over!\n Your Score ⁚" + sc;
}