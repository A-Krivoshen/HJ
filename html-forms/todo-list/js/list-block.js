const listBlock = document.querySelector('.list-block');
const listItems = Array.from(listBlock.querySelectorAll('li > input[type="checkbox"]'));
const output = listBlock.getElementsByTagName('output')[0];

listBlock.completeClass = 'complete';

function checkList() {
  let checkedItems = listItems.filter((listItem) => {
    return listItem.checked;
  });
  
  if (checkedItems.length < listItems.length) {
    listBlock.classList.remove(listBlock.completeClass);
  } else {
    listBlock.classList.add(listBlock.completeClass);    
  }
  
  output.textContent = checkedItems.length + ' из ' + listItems.length;
}

function initEventsListener() {
  listItems.forEach(listItem => {
    listItem.addEventListener('change', checkList);
  }); 
}

initEventsListener();
checkList();