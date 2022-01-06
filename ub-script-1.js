/// antiquora.js

console.log('started antiquora.js');

var counter = 4;
var interval = setInterval(() => {
  document.querySelectorAll('*').forEach(l => l.style = '')
  var s = document.documentElement.innerHtml;
  document.documentElement.innerHtml = s;
  
  if (--counter < 1) {
    clearInterval(interval);
  }
}, 1000);
