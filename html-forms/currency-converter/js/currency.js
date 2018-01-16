let loader = document.getElementById('loader');
let content = document.getElementById('content');
let fromList = document.getElementById('from');
let toList = document.getElementById('to');
let source = document.getElementById('source');
let result = document.getElementById('result');
let xhr = new XMLHttpRequest();

function initXHR() {
  xhr.timeout = 5000;
  xhr.addEventListener("loadstart", onLoadStart);
  xhr.addEventListener("load", onLoad);
  xhr.open('GET', 'https://neto-api.herokuapp.com/currency');
  xhr.send();  
}

function onLoadStart() {
  loader.classList.remove('hidden');
}

function onLoad() {
  let data = JSON.parse(xhr.responseText);
  
  data.forEach(item => {
    fromList.innerHTML += `<option value="${item.value}">${item.code}</option>`; 
    toList.innerHTML += `<option value="${item.value}">${item.code}</option>`; 
  });  
  
  initForm();
  calcCurrency();
  
  content.classList.remove('hidden');
  loader.classList.add('hidden');
}

function initForm() {
  source.addEventListener('keyup', () => {
    calcCurrency();
  }); 
  
  fromList.addEventListener('change', () => {
    calcCurrency();
  }); 
  
  toList.addEventListener('change', () => {
    calcCurrency();
  }); 
}

function calcCurrency() {
  let from = fromList.options[fromList.selectedIndex].value;
  let to = toList.options[toList.selectedIndex].value
  let total = source.value / to * from;
  
  if (Math.round(total) !== total) {
    total = total.toFixed(2);
  }
  
  result.innerHTML = total;
}

initXHR();