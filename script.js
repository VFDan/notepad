document.getElementById('textarea').value = localStorage.getItem('content');
if (typeof(localStorage.getItem('dark')) === "undefined") {
  localStorage.setItem('dark', false);
}

if (localStorage.getItem('dark')) {
  document.body.className += ' ' + 'dark';
} else {
  document.body.className += ' ' + 'light';
}
