const btns = document.getElementsByClassName('drum-kit__drum');

for (const btn of btns) {
 const audios = btn.getElementsByTagName('audio');
 
 btn.onclick = () => {  
  for (const audio of audios) {
   audio.pause();
   audio.currentTime = 0; 
   audio.play();
  }
 }
} 
