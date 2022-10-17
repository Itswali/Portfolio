const hamburger = document.querySelector('.bars');
const overlay = document.querySelector('.open');
const mainMenu = document.querySelector('.main-menu');
const cancel = document.querySelector('.cancel');

hamburger.addEventListener('click', () => {
  mainMenu.style.display = 'flex';
  overlay.style.display = 'block';
});

cancel.addEventListener('click', () => {
  overlay.style.display = 'none';
});
