const content = document.querySelector('.contentform');
const fields = document.querySelectorAll('input, textarea');

const btnSubmit = document.getElementsByClassName('button-contact')[0];
const btnEdit = document.getElementsByClassName('button-contact')[1];

message.addEventListener('keydown', checkStatus);

for (const curField of fields) {
  let valid = false;
  curField.addEventListener('input', checkStatus);
}

  function checkStatus() {
    for (const field of fields) {
      if (this.name === 'zip' && this.value.match(/[^0-9]/g)) {
        this.value = this.value.replace(/[^0-9]/g, '');
      }

      if (field.value !== '') {
        valid = true;
      } else {
        valid = false;
      }
      
      if (valid === true) {
        btnSubmit.disabled = false;
      } else {
        btnSubmit.disabled = true;
        return;
      }
    }
  }

btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();
    for (const field of fields) {
      try{
        document.getElementById(field.name).innerText = field.value;
      } catch(e) {
    
      }
    }
 
  output.classList.remove('hidden');
  content.classList.add('hidden');
})

btnEdit.addEventListener('click', (event) => {
  event.preventDefault();
  output.classList.add('hidden');
  content.classList.remove('hidden');
})