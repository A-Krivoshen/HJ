const nav = document.querySelector('.tabs-nav');
const content = document.querySelector('.tabs-content');
const titles = content.querySelectorAll('h3');

let arrTitle = Array.prototype.slice.call(titles);
let arrTabs;

arrTitle.push(arrTitle[0]); 
arrTitle.forEach((item, i, array) => {
  let parent = arrTitle[i].parentElement;
  let tabTitle =  parent.getAttribute('data-tab-title');
  let tabIcon =   parent.getAttribute('data-tab-icon');
  
  nav.appendChild(nav.querySelector('li').cloneNode(true));
  
  curEl = nav.lastElementChild;
  curEl.querySelector('a').innerText = parent.getAttribute('data-tab-title');
  curEl.querySelector('a').classList.add(parent.getAttribute('data-tab-icon'));
  
  arrTabs = Array.prototype.slice.call(nav.querySelectorAll('li')); 
  getContent(arrTabs[0]); 
  arrTabs[i].addEventListener('click', () => {
    getContent(arrTabs[i]); 
    
    for (listTab in arrTabs) {
      arrTabs[listTab].classList.remove('ui-tabs-active');
    }
    
    arrTabs[i].classList.add('ui-tabs-active');
  });
});

nav.querySelectorAll('li')[arrTabs.length-1].remove(); 
arrTabs[0].remove(); 
nav.querySelector('li').classList.add('ui-tabs-active'); 

function getContent(tab) {
  for (const title of titles) {
    let curArt = title.parentElement.getAttribute('data-tab-title');
    
    if (tab.querySelector('a').text !== curArt) {
      title.parentElement.classList.add('hidden');
    } else {
      title.parentElement.classList.remove('hidden');
    }
  }
}