const canvas = document.getElementById("starnightsky");
const ctx = canvas.getContext("2d");
canvas.style = "background-color: black;";

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function getColor() {
  var rand = 0.5 + Math.random() * 3;
  rand = Math.round(rand);
  switch (rand) {
    case 1:
      return "#ffffff";
      break;
    case 2:
      return "#ffe9c4";
      break;
    case 3:
      return "#d4fbff";
  }
}

function makeStar() {
  const x = getRandom(0, canvas.width);
  const y = getRandom(0, canvas.height);
  const radius = getRandom(0, 0.55);
  ctx.beginPath();
  ctx.globalAlpha = getRandom(0.8, 1);
  ctx.fillStyle = getColor();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fill();
}

canvas.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < getRandom(200, 400); i++) {
    makeStar();
  }
});
