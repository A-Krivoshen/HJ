const sliderPictures = document.querySelector('.slides');

  const back = document.querySelector('[data-action=prev]');
  const next = document.querySelector('[data-action=next]');
  const first = document.querySelector('[data-action=first]');
  const last = document.querySelector('[data-action=last]');

let activeSlide = sliderPictures.firstElementChild;
activeSlide.classList.add('slide-current');



next.addEventListener('click', () => move('next'));
back.addEventListener('click', () => move('prev'));
last.addEventListener('click', () => move('last'));
first.addEventListener('click', () => move('first'));

function move(direction){
  activeSlide.classList.remove('slide-current');
  let nextSlide;
  if(direction == 'next'){
    nextSlide = activeSlide.nextElementSibling;
  }else if(direction == 'prev'){
    nextSlide = activeSlide.previousElementSibling;
  }else if(direction == 'last'){
    nextSlide = sliderPictures.lastElementChild;
  }else{nextSlide = sliderPictures.firstElementChild;
       }
  
  nextSlide.classList.add('slide-current');
  activeSlide = nextSlide;
  
  updateUi();
}
function updateUi(){
  next.classList.toggle('disabled',activeSlide.nextElementSibling == null);
  back.classList.toggle('disabled',activeSlide.previousElementSibling == null);
  last.classList.toggle('disabled',activeSlide.nextElementSibling == null);
  first.classList.toggle('disabled',activeSlide.previousElementSibling == null);
  }
