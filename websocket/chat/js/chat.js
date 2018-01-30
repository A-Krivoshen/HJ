'use strict'
const connection = new WebSocket("wss://neto-api.herokuapp.com/chat");
const messages = document.querySelector(".messages-content");
const status = document.querySelector(".chat-status");
const date = new Date();
connection.addEventListener("open", event => {
  status.textContent = status.dataset.online;
  document.querySelector(".message-submit").disabled = false;
  const a = document.querySelector(".message-status").cloneNode(true);
  a.firstElementChild.textContent = "Пользователь появился в сети";
  messages.appendChild(a);
});
connection.addEventListener("error", error => {
  console.log(error);
  const a = document.querySelector(".message-status").cloneNode(true);
  a.firstElementChild.textContent = "Ошибка сервера";
  messages.appendChild(a);
});
connection.addEventListener("message", event => {
  if (event.data === "...") {
    const a = document.querySelector(".loading").cloneNode(true);
    messages.appendChild(a);
  } else {
    const a = document
      .querySelector(".messages-templates")
      .children[1].cloneNode(true);
    a.querySelector(".message-text").textContent = event.data;
    a.querySelector(
      ".timestamp"
    ).textContent = `${date.getHours()}:${date.getMinutes()}`;
    a.querySelector(".avatar").firstElementChild.src =
      "https://netology-code.github.io/hj-homeworks/websocket/chat/i/profile-80.jpg";
    messages.appendChild(a);
  }
});

document.querySelector(".message-submit").addEventListener("click", () => {
  event.preventDefault();
  const message = document.querySelector(".message-input").value;
  connection.send(message);
  const a = document.querySelector(".message-personal").cloneNode(true);
  a.querySelector(".message-text").textContent = message;
  a.querySelector(
    ".timestamp"
  ).textContent = `${date.getHours()}:${date.getMinutes()}`;
  messages.appendChild(a);
  document.querySelector(".message-input").value = "";
});

window.onunload = function() {
  connection.close(1000);
};

connection.addEventListener("close", event => {
  status.textContent = status.dataset.offline;
  document.querySelector(".message-submit").disabled = true;
  const a = document.querySelector(".message-status").cloneNode(true);
  a.firstElementChild.textContent = "Пользователь не в сети";
  messages.appendChild(a);
});

