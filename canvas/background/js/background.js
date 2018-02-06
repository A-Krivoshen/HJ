'use strict';
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function nextPointOne(x, y, time) {
  return {
    x: x + Math.sin((50 + x + time / 10) / 100) * 3,
    y: y + Math.sin((45 + x + time / 10) / 100) * 4
  };
}
function nextPointTwo(x, y, time) {
  return {
    x: x + Math.sin((x + time / 10) / 100) * 5,
    y: y + Math.sin((10 + x + time / 10) / 100) * 2
  };
}

let units = [];

class Unit {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = getRandom(0.1, 0.6);
    this.outline = 5 * this.size;
    this.moveFunc = randomInteger(0, 1) ? nextPointOne : nextPointTwo;
  }
  draw () {
    ctx.lineWidth = this.outline;
    ctx.strokeStyle = "white";
    return this.moveFunc(this.x, this.y, Date.now());
  }
}

class Circle extends Unit {
  constructor(x, y) {
    super(x, y);
    this.radius = 12 * this.size;
  }
  draw () {
    let {x,y} = super.draw();
    ctx.beginPath();
    ctx.arc(x, y, this.radius, 0, 2 * Math.PI);
    ctx.stroke();
  }
}

class Cross extends Unit {
  constructor(x, y) {
    super(x, y);
    this.side = 20 * this.size;
    this.rotate = getRandom(0, 360) * Math.PI / 180;
    this.rotationSpeed = getRandom(-0.2, 0.2);
  }
  draw() {
    let {x,y} = super.draw();
    ctx.translate(x, y);
    ctx.rotate(this.rotate);
    
    ctx.beginPath();
    ctx.moveTo(this.side / 2, 0);
    ctx.lineTo(-this.side / 2, 0);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, this.side / 2);
    ctx.lineTo(0, -this.side / 2);
    ctx.stroke();

    ctx.rotate(-this.rotate);
    ctx.translate(-x, -y);

    this.angle += this.rotationSpeed;
  }
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function randomInteger(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

function createUnits(amount) {
  for (let i = 0; i < amount / 2; i++) {
    units.push(
      new Cross(
        randomInteger(0, canvas.width), 
        randomInteger(0, canvas.height))
    );
    units.push(
      new Circle(
        randomInteger(0, canvas.width),
        randomInteger(0, canvas.height)
      )
    );
  }
}

function tick() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  units.forEach(unit => {
    unit.draw();
  });
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  units = [];
  createUnits(randomInteger(80, 150));
});

createUnits(randomInteger(80, 150));
setInterval(tick, 1000 / 20);
