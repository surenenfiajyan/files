/// antiquora.js
setTimeout(() => {
  document.querySelectorAll('*').forEach(l => l.style = '')
  var s = document.documentElement.innerHtml;
  document.documentElement.innerHtml = s;
  console.log('quora is unlocked');
}, 500);
