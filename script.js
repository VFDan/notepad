document.getElementById('textarea').value = localStorage.getItem('content');
document.getElementById('textarea').onkeyup = function(){localStorage.setItem('content', document.getElementById('textarea').value))};
