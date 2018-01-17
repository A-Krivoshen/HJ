const menu = document.getElementsByClassName('wrapper-dropdown');

for (let object of menu) {
  object.onclick = function() {
    object.classList.toggle('active');
  };
}

