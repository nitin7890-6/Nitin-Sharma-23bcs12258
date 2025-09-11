const toggle = document.getElementById('theme-toggle');
const body = document.body;

// Load theme from local storage or default to light
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  toggle.checked = true;
}

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
});
