const xhr = new XMLHttpRequest();
const content = document.querySelector('#content');
let result;

xhr.addEventListener("load", () => {
  if (xhr.status === 200) {
    const books = JSON.parse(xhr.responseText);     
    result = books.reduce((res, cur) => {
    return res + 
      `<li data-title="${cur.title}" data-author="${cur.author.name}" data-info="${cur.info}" data-price="${cur.price}"><img src="${cur.cover.small}"></li>`;
    }, '');
  } else {
    result = 'Ошибка.';
  };
  
  content.innerHTML = result;
});

xhr.open("GET", "https://netology-fbb-store-api.herokuapp.com/book/");
xhr.send();