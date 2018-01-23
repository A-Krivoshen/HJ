function handleTableClick(event) {
  if (event.target.classList.contains('prop__name')) {
    switch(event.target.dataset.dir) {
      case undefined:
        event.target.dataset.dir = 1;
        break;
      case '1':
        event.target.dataset.dir = -1;
        break;
      case '-1': 
        event.target.dataset.dir = 1;
    }
    event.currentTarget.dataset.sortBy = event.target.dataset.propName;
    sortTable(event.currentTarget.dataset.sortBy, event.target.dataset.dir);
  }
} 

    table.addEventListener('click', handleTableClick);