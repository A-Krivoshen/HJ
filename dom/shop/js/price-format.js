const products = document.getElementsByClassName('box');
const idSum = document.getElementById('cart-total-price');
const idCnt = document.getElementById('cart-count');

var curSum = idSum.innerHTML;
var curCnt = idCnt.innerHTML;


for (product of products) {
  product.addEventListener('click', (event)=>{
    let curPrice = event.currentTarget.getElementsByTagName('button')[0].dataset.price;
    
    curSum = parseInt(curSum) + parseInt(curPrice);
    printSum = getPriceFormatted(curSum);
    
    curCnt = ++curCnt;
    
    
    idSum.innerHTML = printSum;
    idCnt.innerHTML = curCnt;
  });
}

function getPriceFormatted(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
