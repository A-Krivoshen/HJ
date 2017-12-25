'use strict';
openMail();
function openMail() {
  const values = ['Открыть', 'Закрыть'];
  const btn = document.getElementById('open');
  const mail = document.getElementById('mail');
  var state = 1;
  
  mail.classList.toggle('is-active'); 
  
  changeText();

  
  btn.onclick = function revertMail(){
    mail.classList.toggle('is-active'); 
    state = mail.classList.contains('is-active') ? 1 : 0; 
    
    changeText(state);
  };
  function changeText(){
    setTimeout(() => {
      btn.value = values[state];
    }, state * 2000);
  }
}

