let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');
let body = document.querySelector('body');

burger.addEventListener('click', () => {
   burger.classList.toggle('active');
   menu.classList.toggle('active');
   body.classList.toggle('lock');
});

