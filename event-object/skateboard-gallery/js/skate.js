const preview = document.getElementsByClassName('gallery-view')[0];
const gallery = document.getElementsByClassName('gallery-nav')[0];
const imgGallery = gallery.getElementsByTagName('a');
const arrGallery = Array.from(imgGallery);
const title = document.getElementById('title');

function cleanCurrent(){
  for (img in arrGallery) {
    arrGallery[img].classList.remove('gallery-current');
  }
}

cleanCurrent();

for (const curImg of imgGallery) {
  curImg.addEventListener('click', selectImg);
}

function selectImg(event) {
  cleanCurrent();
  
  event.preventDefault();
  event.currentTarget.classList.add('gallery-current');
  
  preview.src = event.currentTarget.href;
  title.innerHTML = event.currentTarget.getElementsByTagName('img')[0].getAttribute('title');
}