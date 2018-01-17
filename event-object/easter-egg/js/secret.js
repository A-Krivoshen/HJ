var step = 0;
const nav = document.getElementsByTagName('nav')[0];
const secret = document.getElementsByClassName('secret')[0];
const keyList = ['Y', 'T', 'N', 'J', 'K', 'J', 'U', 'B', 'Z'];

function openNav(event) {
  if (event.altKey && event.ctrlKey) {
    switch (event.code) {
      case 'KeyT':
        nav.classList.toggle('visible');
    }
  }
}

function secretPass(event) {
  if (event.code === 'Key' + keyList[step]){
    step++;
  } else {
    step = 0;
  }
  if (step === keyList.length) {
    secret.classList.add('visible');
  }
}

document.addEventListener('keydown', openNav);
document.addEventListener('keydown', secretPass);