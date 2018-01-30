'use strinct';
const connection = new WebSocket('wss://neto-api.herokuapp.com/mouse');

showBubbles(connection);

connection.addEventListener('open', () => {
  console.log('open');
});
document.addEventListener('click', e => {
   
  connection.send(JSON.stringify({ 
    x: e.layerX, 
    y: e.layerY 
  }));
});
