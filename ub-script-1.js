/// antiquora.js

var counter = 4;
var interval = setInterval(() => {
  document.querySelectorAll('*').forEach(l => l.style = '')
  var s = document.documentElement.innerHtml;
  document.documentElement.innerHtml = s;
  console.log('quora is unlocked');
  
  if (--counter < 1) {
    clearInterval(interval);
  }
}, 1000);
