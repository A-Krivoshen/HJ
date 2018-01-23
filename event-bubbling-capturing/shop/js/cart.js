'use strict';
const itemsList = document.querySelector('.items-list');

function checkClick() {
  event.preventDefault();
  if (!event.target.classList.contains('add-to-cart')) return;
  console.log(event.target.dataset.price)
  addToCart({title: event.target.dataset.title, price: event.target.dataset.price})
}

itemsList.addEventListener('click', checkClick)
