const arrLabels = document.querySelectorAll('label');
const sectDone = document.querySelector('.done');
const sectUndone = document.querySelector('.undone');

for (const curLabel of arrLabels) {
  
  curLabel.querySelector('input').addEventListener('click', () => {
    let curInput = curLabel.querySelector('input');
    if (curInput.hasAttribute('checked')) {
      curInput.removeAttribute('checked');
      sectUndone.appendChild(curLabel);
    } else {
      curInput.setAttribute('checked','');
      sectDone.appendChild(curLabel);
    }
  })
  
}