'use strict';
const canvas = document.getElementById('draw');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

let brush = 5;
let grow = true;
let color = 0;
let points = [];
let drawing = false;

canvas.addEventListener('mousedown', evt => {
  points.push([evt.offsetX, evt.offsetY]);
  drawing = true;
  ctx.beginPath();
  ctx.fillStyle = 'hsl('+ color +',100%,50%)';
  ctx.arc(evt.offsetX, evt.offsetY, brush/2, 0, 2 * Math.PI);
  ctx.fill();
});

canvas.addEventListener('mouseup', () => {
  drawing = false;
  points = [];
});

canvas.addEventListener('mousemove', evt => { 
  if (!drawing) return;
  let clrGrow = evt.shiftKey;
  points.push([evt.offsetX, evt.offsetY])
  ctx.beginPath();
  ctx.strokeStyle = 'hsl('+ color +',100%,50%)';
  ctx.lineWidth = brush;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.moveTo(points[points.length-2][0],points[points.length-2][1]);
  ctx.lineTo(points[points.length-1][0],points[points.length-1][1])
  ctx.stroke();
  if (clrGrow) color--;
  else color++
  if (grow) {
    brush++;
    if (brush > 100) grow = false;
  }
  else {
    brush--;
    if (brush < 5 ) grow = true;
  }
})

canvas.addEventListener('mouseleave', () => {
  drawing = false;
});

canvas.addEventListener ('dblclick', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
})

window.addEventListener('resize', ()=> {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
})
