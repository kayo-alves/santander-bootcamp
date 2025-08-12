const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const overlay = document.querySelector('.overlay');
const menuLinks = navLinks.querySelectorAll('a');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    overlay.classList.toggle('show');
})

overlay.addEventListener('click', () => {
  navLinks.classList.remove('show');
  overlay.classList.remove('show');
});

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('show');
    overlay.classList.remove('show');
  });
});

