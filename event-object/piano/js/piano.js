let lower = [
  'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/first.mp3',
  'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/second.mp3',
  'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/third.mp3',
  'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/fourth.mp3',
  'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/fifth.mp3'
];

let middle = [
  'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/first.mp3',
  'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/second.mp3',
  'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/third.mp3',
  'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/fourth.mp3',
  'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/fifth.mp3'
];

let higher = [
  'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/first.mp3',
  'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/second.mp3',
  'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/third.mp3',
  'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/fourth.mp3',
  'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/fifth.mp3'
];

let keys = document.getElementsByTagName('li');
let set = document.getElementsByClassName('set')[0]; 

function setSounds(state = middle, className = 'middle') {  
  Array.from(keys).forEach((key, index) => {
    let audio = key.getElementsByTagName('audio')[0];

    audio.src = state[index];        
  }); 
  
  set.classList.remove('middle', 'higher', 'lower');
  set.classList.add(className);
}

function playSound(event) {
  let audio = event.target.getElementsByTagName('audio')[0];
  
  audio.currentTime = 0;
  audio.play();
}

function checkSounds(event) {
  if (event instanceof KeyboardEvent) {
    if (!event.repeat) {
      switch (event.key) {
        case 'Shift':
          setSounds(lower, 'lower');
        break;

        case 'Alt':
          setSounds(higher, 'higher');
        break;
      }       
    }
  }
}

Array.from(keys).forEach((key, index) => {
  key.addEventListener('click', playSound);  
});

setSounds();

document.addEventListener('keydown', checkSounds);
document.addEventListener('keyup', () => {
  setSounds();
});