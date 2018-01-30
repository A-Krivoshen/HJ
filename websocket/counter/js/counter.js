'use strict';
const connection = new WebSocket('wss://neto-api.herokuapp.com/counter'),
      counter = document.querySelector('.counter'),
      errors = document.querySelector('.errors');

connection.addEventListener('message', event => {
  var data = JSON.parse(event.data);
  
  counter.innerText = data.connections;
  errors.innerText = data.errors;
});
window.addEventListener('beforeunload', () => {
  connection.onclose = () => {
    connection.close(1000)
  };
});